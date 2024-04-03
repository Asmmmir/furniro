

const Footer = () => {
    return (
        <footer className='mt-12'>
            <div className="xl:container mx-auto p-5 border-t-2 font-poppins grid grid-cols-footer gap-14 ">
                <div className='flex flex-col gap-14 max-sm:gap-5'>
                    <h3 className='text-2xl font-bold'>Funiro.</h3>
                    <address className='text-description max-w-[285px]'>400 University Drive Suite 200 Coral Gables, <br />
                    FL 33134 USA</address>
                </div>
                <div className='flex flex-col gap-14 max-sm:gap-5'>
                    <h3 className='text-description'>Links</h3>
                    <ul className='flex flex-col gap-11 font-semibold max-sm:gap-5'>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Shop</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
            
                    </ul>
                </div>
                <div className='flex flex-col gap-14 max-sm:gap-5'>
                    <h3 className='text-description'>Help</h3>
                    <ul className='flex flex-col gap-11  font-semibold max-sm:gap-5'>
                        <li>
                            <a href="#">Payment Options</a>
                        </li>
                        <li>
                            <a href="#">Returns</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policies</a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-14 max-sm:gap-5'>
                    <h3>Newsletter</h3>
                    <form className='flex items-center gap-9'>
                    <input className='border-b-[1px] border-black focus:outline-none' type="text" placeholder='Enter Your Email Address' />
                    <button className='uppercase font-semibold border-b-[1px] border-black ' type='submit'>Subscribe</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer