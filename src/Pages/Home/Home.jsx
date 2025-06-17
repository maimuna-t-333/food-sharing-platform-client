import React, { use } from 'react';
import Banner from './Banner';
import Review from './Review';
import HowItWorks from './HowItWorks';
import FeaturedFood from './FeaturedFood';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

    const foodPromise = fetch('http://localhost:3000/foods').then(res => res.json())

const Home = () => {
    const {user}=use(AuthContext);
    console.log('user access token',user?.accessToken)
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