export default function Contact() {
  return (
    <main className="min-h-screen" style={{backgroundColor: "#ede0d4"}}>
      <nav className="px-8 py-4 flex justify-between items-center" style={{backgroundColor: "#e8d5c4"}}>
        <h1 className="text-2xl font-bold" style={{color: "#3d1f0e"}}>coco bakery</h1>
        <div className="flex gap-6">
          <a href="/" style={{color: "#3d1f0e"}} className="hover:opacity-70">Home</a>
          <a href="/menu" style={{color: "#3d1f0e"}} className="hover:opacity-70">This Weeks Menu</a>
          <a href="/about" style={{color: "#3d1f0e"}} className="hover:opacity-70">About</a>
          <a href="/contact" style={{color: "#3d1f0e"}} className="hover:opacity-70">Contact</a>
        </div>
      </nav>
      <section className="max-w-xl mx-auto text-center py-24 px-8">
        <h2 className="text-4xl font-bold mb-4" style={{color: "#3d1f0e"}}>get in touch</h2>
        <p className="text-lg mb-12" style={{color: "#6b3a2a"}}>Have a question or want to place a bulk order? Reach out!</p>
        <div className="rounded-2xl p-8 text-left" style={{backgroundColor: "#e8d5c4"}}>
          <div className="mb-6">
            <p className="font-bold mb-1" style={{color: "#3d1f0e"}}>📍 Location</p>
            <p style={{color: "#6b3a2a"}}>Bangalore, India — Pickup only</p>
          </div>
          <div className="mb-6">
            <p className="font-bold mb-1" style={{color: "#3d1f0e"}}>📸 Instagram</p>
            <a href="https://instagram.com/__cocobakery" style={{color: "#6b3a2a"}} className="hover:opacity-70">@__cocobakery</a>
          </div>
          <div>
            <p className="font-bold mb-1" style={{color: "#3d1f0e"}}>🕐 Pickup day</p>
            <p style={{color: "#6b3a2a"}}>Every Saturday — order before Friday</p>
          </div>
        </div>
      </section>
    </main>
  )
}