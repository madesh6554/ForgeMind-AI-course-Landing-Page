export default function TopBar() {
  return (
    <div style={{
      background: 'linear-gradient(90deg,var(--red),#b91c1c)',
      textAlign: 'center', padding: '10px 16px',
      fontSize: 13, fontWeight: 500, color: '#fff'
    }}>
      Get upto 150/- off for this discount offer! Use code{' '}
      <code style={{
        background: 'rgba(255,255,255,.2)', padding: '2px 10px',
        borderRadius: 4, fontFamily: "'JetBrains Mono',monospace",
        fontSize: 12, marginLeft: 6, letterSpacing: 1
      }}>FORGE26</code>
    </div>
  )
}
