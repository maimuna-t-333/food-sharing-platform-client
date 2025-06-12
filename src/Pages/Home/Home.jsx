import React from 'react';
import Banner from './Banner';
import Review from './Review';

const Home = () => {
    return (
        <div className='bg-gray-300'>
            <Banner></Banner>
            <Review></Review>
        </div>
    );
};

export default Home;