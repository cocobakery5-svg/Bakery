'use client'
import { useEffect, useState } from 'react'
import { getCart, clearCart, CartItem } from '@/lib/cart'

export default function Checkout() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  })

  useEffect(() => {
    setCart(getCart())
  }, [])

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit() {
    if (!form.name || !form.phone || !form.date || !form.time) {
      alert('Please fill in all required fields!')
      return
    }
    alert(`Thank you ${form.name}! Your order of ₹${total} is confirmed for pickup on ${form.date} at ${form.time}.`)
    clearCart()
    window.location.href = '/'
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
          <a href="/cart" className="px-4 py-2 rounded-full font-bold hover:opacity-80 text-xl" style={{backgroundColor: "#3d1f0e", color: "#ede0d4"}}>🛒</a>
        </div>
      </nav>
      <section className="max-w-2xl mx-auto py-16 px-8">
        <h2 className="text-4xl font-bold mb-8" style={{color: "#3d1f0e"}}>Checkout</h2>
        <div className="rounded-2xl p-6 mb-6" style={{backgroundColor: "#e8d5c4"}}>
          <h3 className="text-lg font-bold mb-4" style={{color: "#3d1f0e"}}>Your Order</h3>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <p style={{color: "#6b3a2a"}}>{item.name} x {item.qty}</p>
              <p style={{color: "#3d1f0e"}}>₹{item.price * item.qty}</p>
            </div>
          ))}
          <div className="flex justify-between mt-4 pt-4 border-t border-amber-800">
            <p className="font-bold" style={{color: "#3d1f0e"}}>Total</p>
            <p className="font-bold" style={{color: "#3d1f0e"}}>₹{total}</p>
          </div>
        </div>
        <div className="rounded-2xl p-6" style={{backgroundColor: "#e8d5c4"}}>
          <h3 className="text-lg font-bold mb-4" style={{color: "#3d1f0e"}}>Your Details</h3>
          <div className="mb-4">
            <label className="block mb-1 font-bold" style={{color: "#3d1f0e"}}>Name *</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full p-3 rounded-xl" style={{backgroundColor: "#ede0d4", color: "#3d1f0e", border: "none", outline: "none"}} placeholder="Your name"/>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-bold" style={{color: "#3d1f0e"}}>Phone *</label>
            <input name="phone" value={form.phone} onChange={handleChange} className="w-full p-3 rounded-xl" style={{backgroundColor: "#ede0d4", color: "#3d1f0e", border: "none", outline: "none"}} placeholder="Your phone number"/>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-bold" style={{color: "#3d1f0e"}}>Pickup Date *</label>
            <input name="date" type="date" value={form.date} onChange={handleChange} className="w-full p-3 rounded-xl" style={{backgroundColor: "#ede0d4", color: "#3d1f0e", border: "none", outline: "none"}}/>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-bold" style={{color: "#3d1f0e"}}>Pickup Time *</label>
            <select name="time" value={form.time} onChange={handleChange} className="w-full p-3 rounded-xl" style={{backgroundColor: "#ede0d4", color: "#3d1f0e", border: "none", outline: "none"}}>
              <option value="">Select a time</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-bold" style={{color: "#3d1f0e"}}>Notes</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} className="w-full p-3 rounded-xl" style={{backgroundColor: "#ede0d4", color: "#3d1f0e", border: "none", outline: "none"}} placeholder="Any special requests?" rows={3}/>
          </div>
          <button onClick={handleSubmit} className="w-full py-3 rounded-full font-bold hover:opacity-80" style={{backgroundColor: "#3d1f0e", color: "#ede0d4"}}>
            Place Order
          </button>
        </div>
      </section>
    </main>
  )
}