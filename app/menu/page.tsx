export default function Menu() {
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
      <section className="text-center py-16 px-8">
        <h2 className="text-4xl font-bold mb-2" style={{color: "#3d1f0e"}}>This Weeks Menu</h2>
        <p className="text-lg mb-12" style={{color: "#6b3a2a"}}>Fresh every Saturday. Order before Friday!</p>
        <div className="grid grid-cols-3 gap-8 px-8">
          <div className="rounded-2xl p-6 text-left" style={{backgroundColor: "#e8d5c4"}}>
            <div className="text-5xl mb-4">🥣</div>
            <h3 className="text-xl font-bold mb-1" style={{color: "#3d1f0e"}}>Overnight Oats</h3>
            <p className="mb-4" style={{color: "#6b3a2a"}}>Creamy oats with seasonal fruits and zero refined sugar</p>
            <p className="text-lg font-bold" style={{color: "#3d1f0e"}}>₹180</p>
          </div>
          <div className="rounded-2xl p-6 text-left" style={{backgroundColor: "#e8d5c4"}}>
            <div className="text-5xl mb-4">🥞</div>
            <h3 className="text-xl font-bold mb-1" style={{color: "#3d1f0e"}}>Banana Pancakes</h3>
            <p className="mb-4" style={{color: "#6b3a2a"}}>Fluffy pancakes made with banana and oat flour</p>
            <p className="text-lg font-bold" style={{color: "#3d1f0e"}}>₹220</p>
          </div>
          <div className="rounded-2xl p-6 text-left" style={{backgroundColor: "#e8d5c4"}}>
            <div className="text-5xl mb-4">🍮</div>
            <h3 className="text-xl font-bold mb-1" style={{color: "#3d1f0e"}}>Chia Pudding</h3>
            <p className="mb-4" style={{color: "#6b3a2a"}}>Coconut milk chia pudding topped with mango</p>
            <p className="text-lg font-bold" style={{color: "#3d1f0e"}}>₹200</p>
          </div>
        </div>
      </section>
    </main>
  )
}