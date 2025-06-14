import { use } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const AddFood = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleAddFood = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.foodName.value;
    const image = form.image.value;
    const quantity = form.quantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expireDate = form.expireDate.value;
    const notes = form.notes.value;

    const foodData = {
      name,
      image,
      quantity,
      pickupLocation,
      expireDate,
      notes,
      donorName: user.displayName,
      donorEmail: user.email,
      donorImage: user.photoURL,
      status: 'available',
    };

    const res = await fetch('http://localhost:3000/foods', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(foodData),
    });

    if (res.ok) {
      form.reset();
      navigate('/availableFood');
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow my-10 border">
      <h2 className="text-2xl font-bold text-center mb-6">Add Food</h2>
      <form onSubmit={handleAddFood} className="space-y-4">
        <input type="text" name="foodName" placeholder="Food Name" className="input input-bordered w-full" required />
        <input type="url" name="image" placeholder="Image URL" className="input input-bordered w-full" required />
        <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" required />
        <input type="text" name="pickupLocation" placeholder="Pickup Location" className="input input-bordered w-full" required />
        <input type="date" name="expireDate" className="input input-bordered w-full" required />
        <textarea name="notes" placeholder="Additional Notes" className="textarea textarea-bordered w-full"></textarea>
        <button type="submit" className="btn bg-[#e76c6a] w-full">Add Food</button>
      </form>
    </div>
  );
};

export default AddFood;
