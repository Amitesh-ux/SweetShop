import React from 'react';

interface Sweet {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Props {
  sweets: Sweet[];
}

export const SweetsList: React.FC<Props> = ({ sweets }) => {
  const handleBuy = (sweetId: string, sweetName: string) => {
    alert(`You bought ${sweetName}! 🍬 (This will be real later)`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sweets.map(sweet => (
        <div key={sweet.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{sweet.name}</h3>
          <p className="text-2xl font-bold text-purple-600 mb-4">${sweet.price.toFixed(2)}</p>
          
          <div className="flex items-center justify-between">
            <span className={`text-sm font-medium ${
              sweet.quantity > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {sweet.quantity > 0 ? `${sweet.quantity} in stock` : 'Out of stock'}
            </span>
            
            <button 
              onClick={() => handleBuy(sweet.id, sweet.name)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                sweet.quantity > 0 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={sweet.quantity === 0}
            >
              {sweet.quantity > 0 ? 'Buy Now' : 'Sold Out'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};