import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const AvailableFood = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState('asc');
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:3000/foods?sort=${sortOrder}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [sortOrder]);


    if (loading) {
        return <span className="loading loading-ring loading-xl"></span>
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-[#dd882e]">Available Foods</h2>
            <div className="mb-6 text-right flex justify-between ">
                <div>
                    <button onClick={() => setToggle(!toggle)} className='btn text-white bg-[#6285c6]'>Change Layout</button>
                </div>
                <div>
                    <label className="font-medium mr-2">Sort by Expire Date:</label>
                    <select
                        value={sortOrder}
                        onChange={(e) => {
                            console.log("New sortOrder:", e.target.value);
                            setSortOrder(e.target.value);
                        }}
                        className="border px-3 py-1 rounded">
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>

            <div className={`grid gap-6 ${toggle ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                {foods.map((food) => (
                    <div
                        key={food._id}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                    >
                        <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
                        <div className="p-4 space-y-1">
                            <h3 className="text-xl font-semibold">{food.name}</h3>
                            <p><strong>Quantity:</strong> {food.quantity}</p>
                            <p><strong>Expires:</strong> {food.expireDate}</p>
                            <p><strong>Pickup:</strong> {food.pickupLocation}</p>
                            <p><strong>Donor:</strong> {food.donorName}</p>

                            <div className="mt-3">
                                <Link to={`/foods/${food._id}`}>
                                    <button className="bg-[#d0807f] hover:bg-[#d0807f] cursor-pointer text-white py-1 px-4 rounded">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailableFood;



