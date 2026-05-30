'use client';

import { useEffect } from 'react';

// Boundary de último recurso — substitui o root layout quando ele próprio falha.
// Estilos inline porque o CSS global pode não ter carregado.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F5F1EA',
          color: '#1A1A1A',
          fontFamily: 'Georgia, serif',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <div style={{ maxWidth: 480 }}>
          <p
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#6E5E40',
              fontFamily: 'system-ui, sans-serif',
              fontWeight: 600,
            }}
          >
            Erro inesperado
          </p>
          <h1 style={{ fontSize: '2rem', color: '#3A4A3F', marginTop: '1rem', lineHeight: 1.2 }}>
            Algo travou por aqui.
          </h1>
          <p style={{ color: '#6B6B6B', marginTop: '1rem', fontFamily: 'system-ui, sans-serif' }}>
            Tente recarregar a página. Se persistir, volte mais tarde.
          </p>
          <button
            onClick={reset}
            style={{
              marginTop: '2rem',
              height: '3.5rem',
              padding: '0 2rem',
              borderRadius: '9999px',
              background: '#3A4A3F',
              color: '#F5F1EA',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'system-ui, sans-serif',
              fontWeight: 500,
            }}
          >
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  );
}
