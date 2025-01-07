import Image from "next/image"
import { User, ShoppingBag, MapPin, Heart, CreditCard, Headphones, FileText } from 'lucide-react'

export default function OrdersPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r">
        <nav className="flex flex-col">
          <div className="flex items-center gap-3 p-4 hover:bg-gray-50 border-b">
            <User className="w-5 h-5" />
            <span>Profile</span>
          </div>
          <div className="flex items-center gap-3 p-4 hover:bg-gray-50 border-b bg-orange-100">
            <ShoppingBag className="w-5 h-5" />
            <span>Orders</span>
          </div>
          <div className="flex items-center gap-3 p-4 hover:bg-gray-50 border-b">
            <MapPin className="w-5 h-5" />
            <span>Address</span>
          </div>
          <div className="flex items-center gap-3 p-4 hover:bg-gray-50 border-b">
            <Heart className="w-5 h-5" />
            <span>favorite</span>
          </div>
          <div className="flex items-center gap-3 p-4 hover:bg-gray-50 border-b">
            <CreditCard className="w-5 h-5" />
            <span>Saved Payments</span>
          </div>
          <div className="flex items-center gap-3 p-4 hover:bg-gray-50 border-b">
            <Headphones className="w-5 h-5" />
            <span>Customer Care</span>
          </div>
          <div className="flex items-center gap-3 p-4 hover:bg-gray-50 border-b">
            <FileText className="w-5 h-5" />
            <span>General terms</span>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Order Card 1 */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/placeholder.svg?height=250&width=250"
                  alt="Chicken Pickle"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Andhra pickle Store</p>
                <h3 className="font-medium">Chicken Pickle(250 g)</h3>
              </div>
              <div className="text-right">
                <p className="font-medium">delivery expected by 24 nov</p>
                <p className="text-sm text-gray-600">Item yet to deliver on the way</p>
              </div>
            </div>
          </div>

          {/* Order Card 2 */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/placeholder.svg?height=250&width=250"
                  alt="Chicken Pickle"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Andhra pickle Store</p>
                <h3 className="font-medium">Chicken Pickle(250 g)</h3>
              </div>
              <div className="text-right">
                <p className="font-medium">Order Delivered on oct 11</p>
                <p className="text-sm text-gray-600">Item reched You</p>
              </div>
            </div>
          </div>

          {/* Order Card 3 */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/placeholder.svg?height=250&width=250"
                  alt="Chicken Pickle"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Andhra pickle Store</p>
                <h3 className="font-medium">Chicken Pickle(250 g)</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

