import React from 'react'

const ArtCard = ({ image, name }) => {
    return (
        <div className='mx-8 my-4 rounded-md'>
            <img
                loading=''
                className='lg:h-72 md:h-60 sm:h-48 w-full bg-gray-200 object-contain object-center rounded-md shadow-md'
                src={image}
                alt="blog"
            />
            <p className='mt-4'>{name}</p>
        </div>
    )
}

export default ArtCard
