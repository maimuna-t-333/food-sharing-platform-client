import { use, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { useNavigate } from 'react-router';


const ManageFood = () => {
  const { user } = use(AuthContext);
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-foods?email=${user.email}`)
        .then(res => res.json())
        .then(data => setFoods(data));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will delete your food item permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e3342f',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/foods/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your food item has been deleted.', 'success');
              setFoods(foods.filter(food => food._id !== id));
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/availableFood/${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Manage My Foods</h2>
      <div className="overflow-x-auto">
        <table className="table w-full bg-white rounded-lg shadow-md">
          <thead className="bg-[#7BB661] text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Pickup</th>
              <th>Expires</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food, index) => (
              <tr key={food._id}>
                <td>{index + 1}</td>
                <td>{food.name}</td>
                <td>{food.quantity}</td>
                <td>{food.pickupLocation}</td>
                <td>{food.expireDate}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleUpdate(food._id)}
                    className="btn btn-sm bg-blue-500 text-white hover:bg-blue-700"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {foods.length === 0 && (
          <p className="text-center mt-8 text-gray-600">No foods added yet.</p>
        )}
      </div>
    </div>
  );
};

export default ManageFood;
