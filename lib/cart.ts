export type CartItem = {
  id: number
  name: string
  price: number
  qty: number
}

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : []
}

export function addToCart(item: CartItem) {
  const cart = getCart()
  const existing = cart.find(i => i.id === item.id)
  if (existing) {
    existing.qty += 1
  } else {
    cart.push({...item, qty: 1})
  }
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function removeFromCart(id: number) {
  const cart = getCart().filter(i => i.id !== id)
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function clearCart() {
  localStorage.setItem('cart', JSON.stringify([]))
}