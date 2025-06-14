
import React, { useState } from 'react';
import { useLoaderData } from 'react-router'; 

const FoodDetails = () => {
  const food = useLoaderData(); 
  const [showModal, setShowModal] = useState(false);

  return (

    <div className='bg-gray-300 '>

            <div className="max-w-4xl mx-auto  bg-white py-10 rounded-2xl  ">
      <img src={food.image} alt={food.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <div className='text-center'>
         <h2 className="text-3xl font-bold mb-2">{food.name}</h2>
      <p>Quantity: {food.quantity}</p>
      <p>Pickup: {food.pickupLocation}</p>
      <p>Expires: {food.expireDate}</p>
      <p>Donor: {food.donorName}</p>
      <p>Donor Email:{food.donorEmail}</p>
      <p className="text-gray-600 italic">{food.notes}</p>
      <button
        onClick={() => setShowModal(true)}
        className="mt-6 btn bg-[#7BB661] text-white px-6 py-2  rounded hover:bg-green-700"
      >
        Request
      </button>
      </div>
     



      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg relative">
            <h2 className="text-2xl font-semibold mb-4 text-center">Request Food</h2>

            <input type="text" value={food.name} disabled className="input input-bordered w-full mb-2" />
            
            <textarea className="textarea textarea-bordered w-full" placeholder="Additional Notes"></textarea>

            <div className="mt-4 flex justify-end gap-4">
              <button className="btn btn-success">Request</button>
              <button className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>

    </div>
    

  );
};

export default FoodDetails;
