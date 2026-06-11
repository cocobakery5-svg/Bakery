'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Admin() {
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [orders, setOrders] = useState<any[]>([])
  const [products, setProducts] = useState<any[]>([])
  const [tab, setTab] = useState('orders')

  function handleLogin() {
    if (password === 'Wallflower2301!!') {
      setLoggedIn(true)
      loadData()
    } else {
      alert('Wrong password!')
    }
  }

  async function loadData() {
    const { data: o } = await supabase.from('orders').select('*').order('created_at', { ascending: false })
    const { data: p } = await supabase.from('products').select('*')
    setOrders(o || [])
    setProducts(p || [])
  }

  async function updateOrderStatus(id: number, status: string) {
    await supabase.from('orders').update({ status }).eq('id', id)
    loadData()
  }

  async function toggleAvailable(id: number, available: boolean) {
    await supabase.from('products').update({ available: !available }).eq('id', id)
    loadData()
  }

  if (!loggedIn) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{backgroundColor: "#ede0d4"}}>
        <div className="rounded-2xl p-8 w-80" style={{backgroundColor: "#e8d5c4"}}>
          <h1 className="text-2xl font-bold mb-6 text-center" style={{color: "#3d1f0e"}}>Admin Login</h1>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            className="w-full p-3 rounded-xl mb-4"
            style={{backgroundColor: "#ede0d4", color: "#3d1f0e", border: "none", outline: "none"}}
            placeholder="Enter password"
          />
          <button onClick={handleLogin} className="w-full py-3 rounded-full font-bold hover:opacity-80" style={{backgroundColor: "#3d1f0e", color: "#ede0d4"}}>
            Login
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen" style={{backgroundColor: "#ede0d4"}}>
      <nav className="px-8 py-4 flex justify-between items-center" style={{backgroundColor: "#e8d5c4"}}>
        <h1 className="text-2xl font-bold" style={{color: "#3d1f0e"}}>coco bakery — admin</h1>
        <a href="/" style={{color: "#3d1f0e"}} className="hover:opacity-70">Back to site</a>
      </nav>
      <section className="max-w-4xl mx-auto py-12 px-8">
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setTab('orders')}
            className="px-6 py-2 rounded-full font-bold"
            style={{backgroundColor: tab === 'orders' ? '#3d1f0e' : '#e8d5c4', color: tab === 'orders' ? '#ede0d4' : '#3d1f0e'}}
          >
            Orders
          </button>
          <button
            onClick={() => setTab('menu')}
            className="px-6 py-2 rounded-full font-bold"
            style={{backgroundColor: tab === 'menu' ? '#3d1f0e' : '#e8d5c4', color: tab === 'menu' ? '#ede0d4' : '#3d1f0e'}}
          >
            Menu Items
          </button>
        </div>

        {tab === 'orders' && (
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{color: "#3d1f0e"}}>All Orders</h2>
            {orders.length === 0 ? (
              <p style={{color: "#6b3a2a"}}>No orders yet!</p>
            ) : (
              orders.map(order => (
                <div key={order.id} className="rounded-2xl p-6 mb-4" style={{backgroundColor: "#e8d5c4"}}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-bold text-lg" style={{color: "#3d1f0e"}}>{order.customer_name}</p>
                      <p style={{color: "#6b3a2a"}}>📞 {order.phone}</p>
                      <p style={{color: "#6b3a2a"}}>📅 {order.pickup_date} at {order.pickup_time}</p>
                      {order.notes && <p style={{color: "#6b3a2a"}}>📝 {order.notes}</p>}
                      <p className="font-bold mt-2" style={{color: "#3d1f0e"}}>₹{order.total}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="px-3 py-1 rounded-full text-sm font-bold text-center" style={{backgroundColor: order.status === 'pending' ? '#f59e0b' : order.status === 'ready' ? '#10b981' : '#6b7280', color: 'white'}}>
                        {order.status}
                      </span>
                      {order.status === 'pending' && (
                        <button onClick={() => updateOrderStatus(order.id, 'ready')} className="px-3 py-1 rounded-full text-sm font-bold hover:opacity-80" style={{backgroundColor: "#3d1f0e", color: "#ede0d4"}}>
                          Mark Ready
                        </button>
                      )}
                      {order.status === 'ready' && (
                        <button onClick={() => updateOrderStatus(order.id, 'collected')} className="px-3 py-1 rounded-full text-sm font-bold hover:opacity-80" style={{backgroundColor: "#3d1f0e", color: "#ede0d4"}}>
                          Mark Collected
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {tab === 'menu' && (
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{color: "#3d1f0e"}}>Menu Items</h2>
            {products.map(product => (
              <div key={product.id} className="rounded-2xl p-6 mb-4 flex justify-between items-center" style={{backgroundColor: "#e8d5c4"}}>
                <div>
                  <p className="font-bold text-lg" style={{color: "#3d1f0e"}}>{product.name}</p>
                  <p style={{color: "#6b3a2a"}}>{product.description}</p>
                  <p className="font-bold mt-1" style={{color: "#3d1f0e"}}>₹{product.price}</p>
                </div>
                <button
                  onClick={() => toggleAvailable(product.id, product.available)}
                  className="px-4 py-2 rounded-full font-bold hover:opacity-80"
                  style={{backgroundColor: product.available ? '#10b981' : '#6b7280', color: 'white'}}
                >
                  {product.available ? 'Available' : 'Unavailable'}
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}