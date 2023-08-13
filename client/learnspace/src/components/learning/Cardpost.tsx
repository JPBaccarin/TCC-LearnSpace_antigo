// src/Card.tsx
import React from 'react';

interface CardpostProps {
    title: string;
    description: string;
    linkUrl: string;
    imageUrl: string;
    imageAlt: string;
}

const Cardpost: React.FC<CardpostProps> = ({ title, description, linkUrl, imageUrl, imageAlt }) => {
    return (
        <div className="bg-gray-700 w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 justify-around shadow-md text-white rounded-lg relative">
            <div
                className="h-40 rounded-t-lg"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${imageUrl})`,
                }}
            ></div>

            <div className="absolute top-0 left-0 m-2">
                <div className="bg-yellow-500 rounded-md text-sm p-1">teste</div>
            </div>


            <div className="bg-black h-44 p-4 text-sm">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="">{description}</p>
                <a
                    href={linkUrl}
                    className="text-blue-600 mt-2 inline-block hover:text-blue-500 transition-all hover:underline"
                >
                    Leia mais
                </a>
            </div>

        </div>
    );
};

export default Cardpost;