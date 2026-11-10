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
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#09090b',
          color: '#fafafa',
          fontFamily: 'Inter, ui-sans-serif, system-ui',
        }}
      >
        <div style={{ fontSize: 26, color: '#a1a1aa', display: 'flex' }}>heleno.matos — full-stack developer · Dublin</div>
        <div style={{ marginTop: 28, fontSize: 76, fontWeight: 700, lineHeight: 1.05, display: 'flex', flexDirection: 'column' }}>
          <span>I build web apps</span>
          <span style={{ color: '#a1a1aa' }}>and the automation behind them.</span>
        </div>
        <div style={{ marginTop: 40, fontSize: 26, color: '#60a5fa', display: 'flex' }}>
          React · Vue.js · TypeScript · Node.js · Docker · PostgreSQL · n8n
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
