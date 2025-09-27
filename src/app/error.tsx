'use client';

export default function ErrorBoundary({
  error,
}: {
  error: Error & { digest?: string };
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  // In Next.js, errors are Error instances
  if (process.env.NODE_ENV === 'development' && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main style={{ padding: '4rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre style={{ width: '100%', padding: '1rem', overflow: 'auto' }}>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
