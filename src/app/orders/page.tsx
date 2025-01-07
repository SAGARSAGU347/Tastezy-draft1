import Image from "next/image"
import { User, ShoppingBag, MapPin, Heart, CreditCard, Headphones, FileText } from 'lucide-react'
import { Sidebar } from "../Sidebar";

type OrderItem = {
  name: string;
  image: string;
};

type Order = {
  id: number;
  delivery: string;
  items: OrderItem[];
};

const orders: Order[] = [
  {
    id: 1,
    delivery: "delivery expected by 24 nov",
    items: [
      {
        name: "Chicken Pickle (250 g)",
        image: "/Delivery.png"
      }
    ]
  },
  {
    id: 2,
    delivery: "Order Delivered on oct 11",
    items: [
      {
        name: "Chicken Pickle (250 g)",
        image: "/Delivery.png"
      },
      {
        name: "Coffee Chicken Pickle (250 g)",
        image: "/Delivery.png"
      }
    ]
  }
];

export default function OrdersPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-8xl mx-auto space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-4">
              {order.items.map((item, index) => (
                <div key={index} className={index !== 0 ? "mt-6" : ""}>
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">Andhra pickle Store</p>
                      <h3 className="font-medium">{item.name}</h3>
                    </div>
                    {index === 0 && (
                      <div className="text-right">
                        <p className="font-medium">{order.delivery}</p>
                        <p className="text-sm text-gray-600">
                          {order.delivery.includes("expected") 
                            ? "Item yet to deliver on the way"
                            : "Item reached You"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

