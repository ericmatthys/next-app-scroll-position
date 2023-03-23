import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      padding: 100,
      height: 5000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      Scroll down...
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Link href="/with-loading-state">Page with loading state (scroll position does not reset to top)</Link>
        <Link href="/without-loading-state">Page without loading state (scroll position does reset to top)</Link>
      </div>
    </main>
  )
}
