'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function OrderConfirmedContent() {
  const params = useSearchParams()
  const name = params.get('name')
  const total = params.get('total')
  const date = params.get('date')
  const time = params.get('time')

  return (
    <main className="min-h-screen" style={{backgroundColor: "#ede0d4"}}>
      <nav className="px-8 py-4 flex justify-between items-center" style={{backgroundColor: "#e8d5c4"}}>
        <h1 className="text-2xl font-bold" style={{color: "#3d1f0e"}}>coco bakery</h1>
        <div className="flex gap-6 items-center">
          <a href="/" style={{color: "#3d1f0e"}} className="hover:opacity-70">Home</a>
          <a href="/menu" style={{color: "#3d1f0e"}} className="hover:opacity-70">This Weeks Menu</a>
          <a href="/about" style={{color: "#3d1f0e"}} className="hover:opacity-70">About</a>
          <a href="/contact" style={{color: "#3d1f0e"}} className="hover:opacity-70">Contact</a>
        </div>
      </nav>
      <section className="max-w-xl mx-auto text-center py-24 px-8">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-4xl font-bold mb-4" style={{color: "#3d1f0e"}}>Order Confirmed!</h2>
        <p className="text-xl mb-8" style={{color: "#6b3a2a"}}>Thank you {name}! We cant wait to bake for you.</p>
        <div className="rounded-2xl p-8 text-left mb-8" style={{backgroundColor: "#e8d5c4"}}>
          <div className="flex justify-between mb-4">
            <p className="font-bold" style={{color: "#3d1f0e"}}>Total Paid</p>
            <p style={{color: "#6b3a2a"}}>₹{total}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="font-bold" style={{color: "#3d1f0e"}}>Pickup Date</p>
            <p style={{color: "#6b3a2a"}}>{date}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold" style={{color: "#3d1f0e"}}>Pickup Time</p>
            <p style={{color: "#6b3a2a"}}>{time}</p>
          </div>
        </div>
        <a href="/menu" className="px-8 py-3 rounded-full font-bold hover:opacity-80" style={{backgroundColor: "#3d1f0e", color: "#ede0d4"}}>
          Order More
        </a>
      </section>
    </main>
  )
}

export default function OrderConfirmed() {
  return (
    <Suspense>
      <OrderConfirmedContent />
    </Suspense>
  )
}