import React from 'react'

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary: () => void
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div
      style={{
        padding: '2rem',
        textAlign: 'center',
        border: '1px solid red',
        borderRadius: '8px',
        margin: '1rem',
      }}
    >
      <h2>Oops! Something went wrong</h2>
      <details
        style={{ whiteSpace: 'pre-wrap', textAlign: 'left', marginTop: '1rem' }}
      >
        <summary>Error details (click to expand)</summary>
        <p>
          <strong>Error:</strong> {error.message}
        </p>
        <p>
          <strong>Stack:</strong>
        </p>
        <pre>{error.stack}</pre>
      </details>
      <button
        onClick={resetErrorBoundary}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Try again
      </button>
    </div>
  )
}

export default ErrorFallback
