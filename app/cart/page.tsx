'use client'
import { useEffect, useState } from 'react'
import { getCart, removeFromCart, CartItem } from '@/lib/cart'

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    setCart(getCart())
  }, [])

  function handleRemove(id: number) {
    removeFromCart(id)
    setCart(getCart())
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

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
      <section className="max-w-2xl mx-auto py-16 px-8">
        <h2 className="text-4xl font-bold mb-8" style={{color: "#3d1f0e"}}>Your Cart</h2>
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl mb-6" style={{color: "#6b3a2a"}}>Your cart is empty!</p>
            <a href="/menu" className="px-8 py-3 rounded-full font-bold hover:opacity-80" style={{backgroundColor: "#3d1f0e", color: "#ede0d4"}}>See This Weeks Menu</a>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="rounded-2xl p-6 mb-4 flex justify-between items-center" style={{backgroundColor: "#e8d5c4"}}>
                <div>
                  <h3 className="text-lg font-bold" style={{color: "#3d1f0e"}}>{item.name}</h3>
                  <p style={{color: "#6b3a2a"}}>Qty: {item.qty} x ₹{item.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-bold" style={{color: "#3d1f0e"}}>₹{item.price * item.qty}</p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="px-4 py-2 rounded-full text-sm hover:opacity-80"
                    style={{backgroundColor: "#3d1f0e", color: "#ede0d4"}}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="rounded-2xl p-6 mt-6" style={{backgroundColor: "#e8d5c4"}}>
              <div className="flex justify-between items-center mb-6">
                <p className="text-xl font-bold" style={{color: "#3d1f0e"}}>Total</p>
                <p className="text-xl font-bold" style={{color: "#3d1f0e"}}>₹{total}</p>
              </div>
              <a href="/checkout" className="block text-center py-3 rounded-full font-bold hover:opacity-80" style={{backgroundColor: "#3d1f0e", color: "#ede0d4"}}>
                Proceed to Checkout
              </a>
            </div>
          </>
        )}
      </section>
    </main>
  )
}