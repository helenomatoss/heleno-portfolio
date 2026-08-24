import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090b',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: '#fafafa',
            width: '1200px',
            padding: '60px',
            fontFamily: 'ui-sans-serif, system-ui',
          }}
        >
          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.1 }}>
            Heleno Vitor Matos Leite
          </div>
          <div style={{ marginTop: 12, fontSize: 36, color: '#3b82f6' }}>
            Full-Stack Developer — React · Next.js · Node.js
          </div>
          <div style={{ marginTop: 24, fontSize: 26, color: '#a1a1aa' }}>
            AI-assisted development. Accessible UI. Based in Dublin.
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}

