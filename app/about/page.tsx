export default function About() {
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
      <section className="max-w-2xl mx-auto text-center py-24 px-8">
        <h2 className="text-4xl font-bold mb-6" style={{color: "#3d1f0e"}}>hey, i am so glad you are here!</h2>
        <p className="text-lg mb-6" style={{color: "#6b3a2a"}}>
          Coco Bakery started with one simple idea — wholesome breakfasts that actually taste like a treat.
        </p>
        <p className="text-lg mb-6" style={{color: "#6b3a2a"}}>
          Every Saturday I make a fresh batch of overnight oats, smoothies, pancakes, puddings and more —
          all made with clean ingredients and little to no added sweetener.
        </p>
        <p className="text-lg mb-6" style={{color: "#6b3a2a"}}>
          Based in Bangalore. Pickup only. Made with love every single week.
        </p>
        <p className="text-xl font-bold" style={{color: "#3d1f0e"}}>— Coco Bakery 🍫</p>
      </section>
    </main>
  )
}