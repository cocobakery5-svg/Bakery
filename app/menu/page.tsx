'use client'
import { useEffect, useState } from 'react'
import { addToCart } from '@/lib/cart'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Menu() {
  const [products, setProducts] = useState<any[]>([])
  const [added, setAdded] = useState<number | null>(null)

  useEffect(() => {
    supabase
      .from('products')
      .select('*')
      .eq('available', true)
      .then(({ data }) => setProducts(data || []))
  }, [])

  function handleAdd(product: any) {
    addToCart({ id: product.id, name: product.name, price: product.price, qty: 1 })
    setAdded(product.id)
    setTimeout(() => setAdded(null), 1500)
  }

  return (
    <main className="min-h-screen" style={{backgroundColor: "#ede0d4"}}>
      <nav className="px-8 py-4 flex justify-between items-center" style={{backgroundColor: "#e8d5c4"}}>
        <h1 className="text-2xl font-bold" style={{color: "#3d1f0e"}}>coco bakery</h1>
        <div className="flex gap-6 items-center">
          <a href="/" style={{color: "#3d1f0e"}} className="hover:opacity-70">Home</a>
          <a href="/menu" style={{color: "#3d1f0e"}} className="hover:opacity-70">This Weeks Menu</a>
          <a href="/about" style={{color: "#3d1f0e"}} className="hover:opacity-70">About</a>
          <a href="/contact" style={{color: "#3d1f0e"}} className="hover:opacity-70">Contact</a>
          <a href="/cart" className="px-4 py-2 rounded-full font-bold hover:opacity-80" style={{backgroundColor: "#3d1f0e", color: "#ede0d4"}}>Cart</a>
        </div>
      </nav>
      <section className="text-center py-16 px-8">
        <h2 className="text-4xl font-bold mb-2" style={{color: "#3d1f0e"}}>This Weeks Menu</h2>
        <p className="text-lg mb-12" style={{color: "#6b3a2a"}}>Fresh every Saturday. Order before Friday!</p>
        <div className="grid grid-cols-3 gap-8 px-8">
          {products.map((product) => (
            <div key={product.id} className="rounded-2xl p-6 text-left" style={{backgroundColor: "#e8d5c4"}}>
              <h3 className="text-xl font-bold mb-1" style={{color: "#3d1f0e"}}>{product.name}</h3>
              <p className="mb-4" style={{color: "#6b3a2a"}}>{product.description}</p>
              <p className="text-lg font-bold mb-4" style={{color: "#3d1f0e"}}>₹{product.price}</p>
              <button
                onClick={() => handleAdd(product)}
                className="w-full py-2 rounded-full font-bold hover:opacity-80"
                style={{backgroundColor: added === product.id ? "#6b3a2a" : "#3d1f0e", color: "#ede0d4"}}
              >
                {added === product.id ? "Added!" : "Add to cart"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}