import type { Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Page Not Found</h2>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
    </div>
  );
}
