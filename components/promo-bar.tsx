export default function PromoBar() {
  return (
    <div className="bg-yellow-300 text-black text-sm font-bold">
      <div className="container mx-auto grid grid-cols-3">
        <div className="py-2.5 text-center border-r border-yellow-400">
          <div>CALLING ALL STUDENTS!</div>
          <div>GET 10% OFF</div>
        </div>
        <div className="py-2.5 text-center border-r border-yellow-400">
          <div>FREE STANDARD DELIVERY</div>
          <div>ON ORDERS OVER €75</div>
        </div>
        <div className="py-2.5 text-center">
          <div>UPDATE YOUR OFF-DUTY STYLE!</div>
          <div>SHOP MONTREX</div>
        </div>
      </div>
    </div>
  )
}
