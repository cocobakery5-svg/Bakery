export default function Home() {
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
      <section className="text-center py-24 px-8">
        <h2 className="text-5xl font-bold mb-4" style={{color: "#3d1f0e"}}>wholesome bakes, every week</h2>
        <p className="text-xl mb-8" style={{color: "#6b3a2a"}}>overnight oats, smoothies, pancakes, puddings and a lot more!</p>
        <p className="text-lg mb-10 max-w-xl mx-auto" style={{color: "#6b3a2a"}}>Nourishing breakfasts that taste like dessert. Made with clean ingredients and little to no added sweetener.</p>
        <a href="/menu" className="px-8 py-3 rounded-full text-lg font-bold hover:opacity-80" style={{backgroundColor: "#3d1f0e", color: "#ede0d4"}}>See This Weeks Menu</a>
      </section>
      <section className="grid grid-cols-3 gap-8 px-16 py-12">
        <div className="rounded-2xl p-8 text-center" style={{backgroundColor: "#e8d5c4"}}>
          <div className="text-4xl mb-4">🥣</div>
          <h3 className="text-lg font-bold mb-2" style={{color: "#3d1f0e"}}>Clean ingredients</h3>
          <p style={{color: "#6b3a2a"}}>No to very little added sweetener, always nourishing</p>
        </div>
        <div className="rounded-2xl p-8 text-center" style={{backgroundColor: "#e8d5c4"}}>
          <div className="text-4xl mb-4">📦</div>
          <h3 className="text-lg font-bold mb-2" style={{color: "#3d1f0e"}}>Pickup only</h3>
          <p style={{color: "#6b3a2a"}}>Order online, collect on your chosen Saturday</p>
        </div>
        <div className="rounded-2xl p-8 text-center" style={{backgroundColor: "#e8d5c4"}}>
          <div className="text-4xl mb-4">🗓️</div>
          <h3 className="text-lg font-bold mb-2" style={{color: "#3d1f0e"}}>Every Saturday</h3>
          <p style={{color: "#6b3a2a"}}>Subscribe monthly or order week by week</p>
        </div>
      </section>
    </main>
  )
}