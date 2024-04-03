import { useRef, useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { slideImages } from "../data";

const RoomSlider  = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (sliderRef.current) {
                setShowLeftButton(sliderRef.current.scrollLeft > 0);
                setShowRightButton(sliderRef.current.scrollLeft < (sliderRef.current.scrollWidth - sliderRef.current.clientWidth));
            }
        };

        if (sliderRef.current) {
            sliderRef.current.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (sliderRef.current) {
                sliderRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -100, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 100, behavior: "smooth" });
        }
    };

    return (
        <section className="bg-[#FCF8F3] mt-20">
            <div className="relative max-w-[1440px] mx-auto p-5 flex max-md:flex-col items-center justify-center gap-[42px] overflow-hidden font-poppins">
                <div className="text-poppins max-w-[422px]">
                    <h3 className="text-[40px] font-bold text-title">50+ Beautiful rooms inspiration</h3>
                    <p className="mb-[25px] text-description">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                    <button className="bg-gold text-white px-[36px] py-[12px] ">Explore Menu</button>
                </div>
                <div className="flex flex-col flex-1">
                <div className="flex items-center justify-start gap-3 snap-mandatory snap-x overflow-x-scroll" ref={sliderRef}>
                    {showLeftButton && (
                        <button className="absolute w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center text-gold shadow-lg" onClick={scrollLeft}>
                            <MdOutlineKeyboardArrowLeft size={24} />
                        </button>
                    )}
                   {
                    slideImages.map(image => (
                        <img className="snap-center" src={image.imgURL} alt="" />
                    ))
                   }
                    {showRightButton && (
                        <button className="absolute w-[48px] h-[48px] bg-white rounded-full right-1 flex justify-center items-center text-gold shadow-lg" onClick={scrollRight}>
                            <MdOutlineKeyboardArrowRight size={24} />
                        </button>
                    )}
                </div>
                <div>
                
                </div>
                </div>
            </div>
        </section>
    );
};

export default RoomSlider;
