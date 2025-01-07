import { Sidebar } from "../Sidebar";
import { Trash2 } from 'lucide-react';

type UpiId = {
  id: string;
  upiId: string;
};

type Card = {
  id: string;
  bankName: string;
  cardNumber: string;
};

const upiIds: UpiId[] = [
  { id: "1", upiId: "jagadeesh@ybl" },
  { id: "2", upiId: "jagadeesh@oksbi" }
];

const savedCards: Card[] = [
  { id: "1", bankName: "HDFC Bank", cardNumber: "**** **** **** 1234" },
  { id: "2", bankName: "HDFC Bank", cardNumber: "**** **** **** 4321" }
];

export default function UpiPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
     

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 bg-gray-50">
        {/* Saved UPI IDs Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Saved UPI IDs</h2>
          <div className="space-y-4">
            {upiIds.map((upi) => (
              <div key={upi.id} className="flex items-center justify-between bg-white p-3 rounded shadow-md">
                <span>{upi.upiId}</span>
                <button className="text-gray-400 hover:text-red-500">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Saved Cards Section */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Saved Cards</h2>
          <div className="space-y-4">
            {savedCards.map((card) => (
              <div key={card.id} className="flex items-center justify-between bg-white p-3 rounded shadow-md">
                <div>
                  <p className="font-medium">{card.bankName}</p>
                  <p className="text-sm text-gray-600">{card.cardNumber}</p>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
