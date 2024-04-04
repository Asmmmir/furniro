import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navigation = () => {
    return (
        <nav>
            <div className='xl:container max-sm:flex-col items-center mx-auto flex p-4 justify-between flex-wrap'>
                <div className='flex items-center justify-center gap-1' >
                    <img src="./images/logo.png" alt="" />
                    <h3 className='font-montserrat font-bold text-3xl'>Furniro</h3>
                </div>
                <div>
                    <ul className='flex gap-3'>
                        <li className='font-poppins cursor-pointer p-2'>Home</li>
                        <li className='font-poppins cursor-pointer p-2'>Shop</li>
                        <li className='font-poppins cursor-pointer p-2'>About</li>
                        <li className='font-poppins cursor-pointer p-2'>Contact</li>
                    </ul>
                </div>
                <div className='max-md:hidden '>
                    <ul className='flex gap-3'>
                        <li className='p-2'>
                            <FaRegUser size='28px' />
                        </li>
                        <li className='p-2'>
                            <CiSearch size='28px' />
                        </li>
                        <li className='p-2'>
                            <MdFavoriteBorder size='28px' />
                        </li>
                        <li className='p-2'>
                            <IoCartOutline size='28px' />
                        </li>
                    </ul>
                </div>
                <div className="md:hidden">
                <RxHamburgerMenu />

                </div>
            </div>
        </nav>
    )
}

export default Navigation