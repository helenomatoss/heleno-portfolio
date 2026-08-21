import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET() {
  const grad = 'linear-gradient(90deg,#031A6B 0%,#004385 60%,#05B2DC 100%)'
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: grad,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
            width: '1200px',
            padding: '60px',
            fontFamily: 'Inter, ui-sans-serif, system-ui',
          }}
        >
          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.1 }}>
            Heleno Vitor Matos Leite
          </div>
          <div style={{ marginTop: 12, fontSize: 36, opacity: 0.95 }}>
            Full-Stack Developer — React · Next.js · Node.js
          </div>
          <div style={{ marginTop: 24, fontSize: 26, opacity: 0.85 }}>
            AI-assisted development. Accessible UI. Based in Dublin.
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}

