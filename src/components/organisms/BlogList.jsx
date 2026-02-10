import BlogCard from '../molecules/BlogCard';

export default function BlogList({ blogs }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '10px' }}>
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
