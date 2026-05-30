import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

interface OgInput {
  eyebrow: string;
  title: string;
}

/** Gera uma OG image consistente com a marca (cream + bronze + moss). */
export function renderOg({ eyebrow, title }: OgInput) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#F5F1EA',
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            color: '#8C7853',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          {eyebrow}
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 76,
            lineHeight: 1.1,
            color: '#3A4A3F',
            fontFamily: 'serif',
            maxWidth: 980,
          }}
        >
          {title}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 48, height: 3, background: '#8C7853' }} />
          <div style={{ fontSize: 28, color: '#6B6B6B' }}>vcareessence.com.br</div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
