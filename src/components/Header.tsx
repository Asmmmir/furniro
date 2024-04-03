

const Header = () => {
  return (
    <div className='w-full'>
       <div className="xl:container grid mx-auto bg-[url(./images/header-bg.jpg)] bg-cover bg-no-repeat min-h-[716px]">
            <div className='bg-amber-100 flex-col max-w-[643px] max-sm:p-[2em] p-[3em] md:mr-14 self-center justify-self-end rounded-xl  '>
                    <h3 className='font-poppins font-bold tracking-[0.2em]'> New Arrival </h3>
                    <h3  className='font-poppins text-[52px] text-gold font-bold leading-[1.2em]'> Discover Our <br /> New Collection</h3>
                    <p  className='font-poppins text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
                    <button  className='font-poppins font-bold bg-gold px-[72px] text-white py-[25px] mt-[46px]'>Buy now</button>
            </div>
       </div>
    </div>
  )
}

export default Header