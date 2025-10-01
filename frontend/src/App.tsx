import React from 'react';
import { SweetsList } from './components/SweetsList';
import { AddSweetForm } from './components/AddSweetForm';

// Start with mock data - we'll replace with real API calls later!
const mockSweets = [
  { id: '1', name: 'Chocolate Truffle', price: 2.50, quantity: 15, createdAt: new Date() },
  { id: '2', name: 'Gummy Bears', price: 1.80, quantity: 0, createdAt: new Date() },
  { id: '3', name: 'Rainbow Lollipops', price: 1.00, quantity: 8, createdAt: new Date() },
  { id: '4', name: 'Mint Chocolates', price: 3.25, quantity: 12, createdAt: new Date() }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-purple-800">
          🍬 Sweet Shop
        </h1>
        
        <div className="mb-8">
          <AddSweetForm />
        </div>
        
        <SweetsList sweets={mockSweets} />
      </div>
    </div>
  );
}

export default App;