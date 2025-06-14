import React from 'react';
import Banner from './Banner';
import Review from './Review';
import HowItWorks from './HowItWorks';
import FeaturedFood from './FeaturedFood';

    const foodPromise = fetch('http://localhost:3000/foods').then(res => res.json())

    // console.log(foodPromise)

const Home = () => {



    return (
        <div className='bg-gray-300'>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
        <FeaturedFood foodPromise={foodPromise}></FeaturedFood>
            <Review></Review>
        </div>
    );
};

export default Home;