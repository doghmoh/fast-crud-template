import React from "react";

const Home = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-md border">
          <h2 className="text-gray-600">Total Products</h2>
          <p className="text-2xl font-bold text-blue-600">128</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md border">
          <h2 className="text-gray-600">Orders Today</h2>
          <p className="text-2xl font-bold text-green-600">24</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md border">
          <h2 className="text-gray-600">New Customers</h2>
          <p className="text-2xl font-bold text-purple-600">8</p>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 border border-blue-300 p-5 rounded-xl hover:bg-blue-100 transition">
          <h3 className="text-xl font-semibold text-blue-800">Manage Products</h3>
          <p className="text-gray-700">Create, edit, or remove products from your inventory.</p>
        </div>
        <div className="bg-green-50 border border-green-300 p-5 rounded-xl hover:bg-green-100 transition">
          <h3 className="text-xl font-semibold text-green-800">View Orders</h3>
          <p className="text-gray-700">Track order status and manage fulfillment.</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-4 rounded-xl shadow-md border">
        <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
        <ul className="text-gray-700 list-disc list-inside space-y-1">
          <li>Added new product “Wireless Headphones”.</li>
          <li>Order #3245 marked as shipped.</li>
          <li>New customer registered: John Doe.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
