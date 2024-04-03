import { ProductItem } from '../data'
import { useState } from 'react';
import { IoShareSocialSharp } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";


const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU');
}


const Product = ({ name, description, price, imageURL, newProduct, discount }: ProductItem) => {

    const [isHovered, setIsHovered] = useState(false);


    return (
        <div className='relative flex flex-col max-w-[285px] max-h-[446px] font-poppins gap-1 bg-[#F4F5F7]' onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img src={imageURL} alt="" />
            <div className='p-3 flex flex-col gap-1'>
                <h3 className='font-bold text-title text-[24px]'>{name}</h3>
                <p className='text-description'>{description}</p>
                <p className='font-bold'>{formatPrice(Number(price))} тг</p>
            </div>

            {isHovered && (
                <div className='absolute z-10 inset-0 flex flex-col gap-5 justify-center items-center bg-black bg-opacity-40'>
                    <button className='text-gold font-bold bg-white px-[52px] py-[12px]'>Add to cart</button>
                    <div className='flex justify-center gap-5 text-white font-bold'>
                        <button className='inline-flex items-center gap-[4px]'>
                            <IoShareSocialSharp size='16px' />
                            Share
                        </button>
                        <button className='inline-flex items-center gap-[4px]'>
                            <MdCompareArrows size='16px' />
                            Compare
                        </button>
                        <button className='inline-flex items-center gap-[4px]'>
                            <MdFavoriteBorder size='16px' />
                            Like

                        </button>
                    </div>
                </div>
            )}

            {newProduct && (
                <div className='absolute flex justify-center items-center bg-green-500 rounded-full w-[48px] h-[48px] text-white right-5 top-5  '>New</div>

            )}
            {discount && (
                <div className='absolute flex justify-center items-center bg-red-400 rounded-full w-[48px] h-[48px] text-white right-5 top-5  '>{discount}%</div>

            )}
        </div>
    )
}

export default Product