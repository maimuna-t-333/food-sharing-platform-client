import React, { use } from 'react';
import { Link } from 'react-router'; 

const FeaturedFood = ({ foodPromise }) => {
  const foods = use(foodPromise); 

  return (
    <div className="bg-gray-300">
      <section className="max-w-7xl mx-auto my-10 px-4">
        <h2 className="text-4xl font-bold text-center text-[#8b50a4] mb-10 transition duration-300 hover:scale-105">
          Featured Foods
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foods.map((food) => (
            <div
              key={food.id}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-48 object-cover transition duration-300 hover:brightness-90"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">{food.name}</h3>
                <p><strong>Quantity:</strong> {food.quantity}</p>
                <p><strong>Pickup:</strong> {food.pickupLocation}</p>
                <p><strong>Expires:</strong> {food.expireDate}</p>
                <p><strong>Donor:</strong> {food.donorName}</p>
                {food.notes && (
                  <p className="text-sm italic text-gray-600">"{food.notes}"</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/availableFood">
            <button className="btn px-6 py-3 text-white border-none bg-[#ecb99f] rounded-lg hover:bg-[#ca957b] transition duration-300 transform hover:scale-105">
              Show All Foods
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturedFood;
