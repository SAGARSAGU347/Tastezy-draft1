

import { MapPin, PenSquare } from 'lucide-react'


type Address = {
  id: number;
  name: string;
  delivery: string;
  images: string[];
  pincode: string;
  phone: string;
  address: string;
  city?: string;
  postalCode?: string;
  isSelected?: boolean;
};

const addresses: Address[] = [
  {
    id: 1,
    name: "Home",
    delivery: "Delivering to",
    images: [],
    pincode: "507303",
    phone: "7780417876",
    address: "mig - 85, Sathpally, khammam,",
    city: "Hyderabad, telengana",
    postalCode: "500072",
    isSelected: true
  },
  {
    id: 2,
    name: "Work",
    delivery: "Delivering to",
    images: [],
    pincode: "507303",
    phone: "7757473773",
    address: "mig - 85, Sathpally, khamm...",
  }
];

function AddressCard({ isSelected, pincode, phone, address, city, postalCode }: Address) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 ${isSelected ? 'bg-black-600 border-black-600' : 'border-gray-300'}`}></div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <span>Delivering to -</span>
                <span className="font-medium">{pincode}</span>
                <span className="text-gray-400">|</span>
                <span className="font-medium">{phone}</span>
              </div>
              <p className="text-gray-600">{address}</p>
              {city && postalCode && <p className="text-gray-600">{city}, {postalCode}</p>}
            </div>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <span>edit</span>
              <PenSquare className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <main className="flex-1 p-6">
        <div className="bg-green-600 text-white p-4 rounded-lg mb-6 flex items-center gap-3">
          <MapPin className="w-6 h-6" />
          <h1 className="text-xl font-semibold">Saved addresses</h1>
        </div>

        <div className="space-y-4">
          {addresses.map((address) => (
            <AddressCard key={address.id} {...address} />
          ))}

          <button className="w-full bg-white rounded-lg p-4 text-gray-600 flex items-center gap-3 hover:bg-gray-50 transition-colors border">
            <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
            Add new delivery Address
          </button>
        </div>
      </main>
    </div>
  )
}

