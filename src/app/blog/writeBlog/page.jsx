'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { db, storage, getAuthClient } from '../../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

export default function WriteBlog() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [signingIn, setSigningIn] = useState(false);
  const [authError, setAuthError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [heading, setHeading] = useState('');
  const [title, setTitle] = useState('');
  const [sections, setSections] = useState([]);

  // The previous gate compared against NEXT_PUBLIC_ env vars, which Next
  // inlines into the client bundle — the credentials were readable by anyone
  // who opened the JS, and the check was a state flag anyone could flip in
  // devtools. Identity now comes from Firebase Auth, and the Firestore rules
  // are what actually decide whether a write is allowed.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuthClient(), (nextUser) => {
      setUser(nextUser);
      setCheckingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  const login = async (event) => {
    event?.preventDefault?.();
    setAuthError('');
    setSigningIn(true);
    try {
      await signInWithEmailAndPassword(getAuthClient(), email.trim(), password);
      setPassword('');
    } catch (error) {
      // Firebase returns distinct codes, but they all mean the same thing to
      // someone at a login box, and distinguishing them leaks which half was
      // wrong.
      const code = error?.code || '';
      setAuthError(
        code === 'auth/too-many-requests'
          ? 'Too many attempts. Please wait a few minutes and try again.'
          : 'Sign in failed. Check the email and password and try again.'
      );
    } finally {
      setSigningIn(false);
    }
  };

  const logout = async () => {
    await signOut(getAuthClient());
  };

  const addTextSection = () => setSections([...sections, { type: 'text', content: '' }]);
  const addImageSection = () => setSections([...sections, { type: 'image', src: '' }]);

  // const handleImageUpload = async (idx, file) => {
  //   const storageRef = ref(storage, `blog_images/${file.name}`);
    
  //   await uploadBytes(storageRef, file);
  //   const url = await getDownloadURL(storageRef);
    
  //   const updated = [...sections];
  //   updated[idx].src = url;
  //   setSections(updated);
  // };

const handleImageUpload = async (idx, file) => {
  if (!file) return;

  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "blog_unsigned"); // from Step 2

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dq9zjdwfy/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    console.log("Cloudinary URL:", data.secure_url);

    const updated = [...sections];
    updated[idx].src = data.secure_url; // store Cloudinary URL
    setSections(updated);

  } catch (error) {
    console.error("Upload failed:", error);
    alert("Image upload failed");
  }
};



  const handleImageURL = (idx, url) => {
    const updated = [...sections];
    updated[idx].src = url;
    setSections(updated);
  };

  const updateSection = (idx, value) => {
    const updated = [...sections];
    updated[idx].content = value;
    setSections(updated);
  };

  const saveBlog = async () => {
    try {
      const now = new Date();
      const blogData = {
        heading,
        title,
        // toLocaleDateString() rendered in whatever locale the author's browser
        // happened to use, which made posts unsortable and inconsistent.
        // createdAt is the field to read; date stays for older posts.
        createdAt: now.toISOString(),
        date: now.toISOString(),
        authorEmail: user.email,
        sections
      };
      console.log(blogData)
      const postsCollection = collection(db, 'posts');
      await addDoc(postsCollection, blogData);

      alert('Blog saved successfully!');
      // router.push('/blog');
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('There was an error saving the blog. Please try again.');
    }
  };

  if (checkingAuth) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <p>Checking sign in…</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>📝 Admin Login</h2>
          <form onSubmit={login}>
            <input
              style={styles.input}
              type="email"
              autoComplete="username"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              style={styles.input}
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {authError && <p style={styles.authError}>{authError}</p>}
            <button style={styles.buttonPrimary} type="submit" disabled={signingIn}>
              {signingIn ? 'Signing in…' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.signedInBar}>
          <span style={styles.signedInAs}>Signed in as {user.email}</span>
          <button style={styles.buttonSecondary} onClick={logout} type="button">
            Sign out
          </button>
        </div>
        <h2 style={styles.title}>📝 Create New Blog</h2>
        
        <input
          style={styles.input}
          placeholder="Blog Heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <input
          style={styles.input}
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: '30px' }}>
            {section.type === 'text' ? (
              <TiptapEditor
                value={section.content}
                onChange={(content) => updateSection(idx, content)}
              />
            ) : (
              <>
                {section.src && (
                  <img
                    src={section.src}
                    alt="Uploaded"
                    style={styles.imagePreview}
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(idx, e.target.files[0])}
                  style={styles.input}
                />
                <input
                  type="text"
                  placeholder="Or provide image URL"
                  onChange={(e) => handleImageURL(idx, e.target.value)}
                  style={styles.input}
                />
              </>
            )}
          </div>
        ))}

        <div style={styles.buttonGroup}>
          <button style={styles.buttonOutline} onClick={addTextSection}>
            + Rich Text Section
          </button>
          <button style={styles.buttonOutline} onClick={addImageSection}>
            + Image Section
          </button>
        </div>

        <button style={styles.buttonPrimary} onClick={saveBlog}>
          💾 Save Blog
        </button>
      </div>
    </div>
  );
}

function TiptapEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: value,
    immediatelyRender: false, // Prevent SSR hydration mismatches
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '10px', background: '#fff' }}>
      <EditorContent editor={editor} />
    </div>
  );
}

const styles = {
  authError: {
    color: '#c0392b',
    fontSize: '0.9rem',
    margin: '0 0 10px 0',
  },
  signedInBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    gap: '12px',
  },
  signedInAs: {
    color: '#666',
    fontSize: '0.9rem',
  },
  buttonSecondary: {
    background: 'none',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '6px 12px',
    cursor: 'pointer',
    fontSize: '0.85rem',
  },
  container: {
    maxWidth: '900px',
    margin: '60px auto',
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#222',
    marginBottom: '30px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    marginBottom: '20px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  imagePreview: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '15px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    marginBottom: '30px',
  },
  buttonOutline: {
    flex: 1,
    padding: '12px',
    border: '1px solid #0066cc',
    backgroundColor: '#fff',
    color: '#0066cc',
    fontWeight: 'bold',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  buttonPrimary: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#0066cc',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1.1rem',
    cursor: 'pointer',
  },
};
