import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddFood = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.foodName.value;
        const image = form.image.value;
        const category=form.category.value;
        const quantity = form.quantity.value;
        const pickupLocation = form.pickupLocation.value;
        const city=form.city.value;
        const pickupTime=form.pickupTime.value;
        const expireDate = form.expireDate.value;
        const notes = form.notes.value;

        const foodData = {
            name,
            image,
            category,
            quantity,
            pickupLocation,
            city,
            expireDate,
            pickupTime,
            notes,
            donorName: user.displayName,
            donorEmail: user.email,
            donorImage:user.photoURL,
            status: 'available',
        };

        try {
            const token = await user.getIdToken();
            const res = await fetch('https://food-sharing-platform-server.vercel.app/foods', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(foodData),
            });

            if (res.ok) {
                form.reset();
                navigate('/availableFood');
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error adding food:', error);
        }
    };

    return (   
         <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md my-4 lg:my-10">
            <h2 className="text-3xl font-bold text-center text-black mb-1">Add Food</h2>
            <p className="text-center text-gray-500 mb-6">Your extra meal could be someone's only meal today.</p>

            <form onSubmit={handleAddFood} className="space-y-6">

                {/* Food Information */}
                <div>
                    <h3 className="text-sm font-semibold text-black  tracking-wide mb-3 border-b pb-1">Food Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label text-xs font-medium">Food Name</label>
                            <input type="text" name="foodName" placeholder="Food name" className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <label className="label text-xs font-medium">Food Image URL</label>
                            <input type="url" name="image" placeholder="https://..." className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <label className="label text-xs font-medium">Category</label>
                            <select name="category" className="select select-bordered w-full" required>
                                <option value="">Select category</option>
                                <option value="cooked">Cooked Meal</option>
                                <option value="raw">Raw Ingredients</option>
                                <option value="bakery">Bakery</option>
                                <option value="fruits">Fruits & Vegetables</option>
                                <option value="drinks">Drinks</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="label text-xs font-medium">Quantity</label>
                            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" required />
                        </div>
                    </div>
                </div>

                {/* Location Information */}
                <div>
                    <h3 className="text-sm font-semibold text-black tracking-wide mb-3 border-b pb-1">Location Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label text-xs font-medium">Pickup Location</label>
                            <input type="text" name="pickupLocation" placeholder="e.g. 12 Main Street" className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <label className="label text-xs font-medium">City / Area</label>
                            <input type="text" name="city" placeholder="e.g. Dhaka, Mirpur" className="input input-bordered w-full" required />
                        </div>
                    </div>
                </div>

                {/* Time Information */}
                <div>
                    <h3 className="text-sm font-semibold text-black  tracking-wide mb-3 border-b pb-1">Time Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label text-xs font-medium">Expire Date</label>
                            <input type="date" name="expireDate" className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <label className="label text-xs font-medium">Pickup Time Slot</label>
                            <select name="pickupTimeSlot" className="select select-bordered w-full" required>
                                <option value="">Select time slot</option>
                                <option value="morning">Morning (6AM - 12PM)</option>
                                <option value="afternoon">Afternoon (12PM - 5PM)</option>
                                <option value="evening">Evening (5PM - 9PM)</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <h3 className="text-sm font-semibold text-black tracking-wide mb-3 border-b pb-1">Description</h3>
                    <textarea
                        name="notes"
                        placeholder="Details of the Food"
                        className="textarea textarea-bordered w-full"
                        rows={3}
                    ></textarea>
                </div>

                {/* Donor Info */}
                <div>
                    <h3 className="text-sm font-semibold text-black tracking-wide mb-3 border-b pb-1">Donor Info</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label text-xs font-medium">Donor Name</label>
                            <input type="text" value={user?.displayName || 'User'} readOnly className="input input-bordered w-full bg-gray-100 text-gray-500" />
                        </div>
                        <div>
                            <label className="label text-xs font-medium">Donor Email</label>
                            <input type="email" value={user?.email || ''} readOnly className="input input-bordered w-full bg-gray-100 text-gray-500" />
                        </div>
                    </div>
                </div>

                {/* Food Status */}
                <div>
                    <h3 className="text-sm font-semibold text-black tracking-wide mb-3 border-b pb-1">Food Status</h3>
                    <input type="text" value="Available" readOnly className="input input-bordered w-full bg-gray-100 text-gray-500" />
                </div>

                <button type="submit" className="btn bg-[#1d4757] hover:bg-[#163545] text-white w-full text-base">
                    Add Food
                </button>

            </form>
        </div>
    );
};

export default AddFood;

