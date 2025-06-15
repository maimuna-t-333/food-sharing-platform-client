import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';


const RequestFood = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (!user) return; 
    fetch(`http://localhost:3000/myRequests?email=${user.email}`)
      .then(res => res.json())
      .then(data => setRequests(data));
  }, [user]);

  if (!user) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-semibold text-gray-600">Please log in to view your requested foods.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl text-center font-bold mb-4 text-[#79b85d]">My Requested Foods</h2>
      {requests.length === 0 ? (
        <p>No requested foods yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((item) => (
            <div key={item._id} className="p-4 bg-white shadow rounded">
              <img src={item.foodImage} alt={item.foodName} className="h-40 w-full object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">{item.foodName}</h3>
              <p><strong>Status:</strong> {item.status}</p>
              <p><strong>Pickup Location:</strong> {item.pickupLocation}</p>
              <p><strong>Expires:</strong> {item.expireDate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RequestFood;

