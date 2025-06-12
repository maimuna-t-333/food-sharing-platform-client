import React from 'react';
import banner1 from '../../assets/banner-1.jpg'
import banner2 from '../../assets/banner-2.jpg'
import banner3 from '../../assets/banner-3.jpg'



const Banner = () => {
    return (
        <div>
            <div className="carousel w-11/12 ml-20 h-[600px] my-10 rounded-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={banner1}
                        className="w-full" />
                    <div className="absolute  flex items-center justify-center">
                        <h2 className="text-white text-2xl md:text-4xl font-bold text-center mb-16 px-4 ml-84 mt-70">
                            “Share the Flavor. Savor the Moment.”
                        </h2>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={banner2}
                        className="w-full" />
                    <div className="absolute  flex items-center justify-center">
                        <h2 className="text-white text-2xl md:text-4xl font-bold text-center mb-16 px-4 ml-110 mt-70">
                            “Tradition Served Fresh.”
                        </h2>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={banner3}
                        className="w-full" />
                    <div className="absolute  flex items-center justify-center">
                        <h2 className="text-white text-2xl md:text-4xl font-bold text-center mb-16 px-4 ml-88 mt-60">
                            “Because Joy Is Best When Shared.”
                        </h2>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;