const Rooms = () => {
    return (
        <section>
            <div className="xl:container px-5 mx-auto flex-col flex items-center justify-center">
                <div className="my-12">
                    <h3 className="text-poppins text-[32px] font-bold text-center text-title">Browse The Range</h3>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-5">
                            <div className="flex-col flex items-center justify-center">
                                <img src="./images/rooms/dining.jpg" alt="dining room"  />
                                <h3 className="font-poppins font-semibold">Dining</h3>
                            </div>
                            <div className="flex-col flex items-center justify-center">
                                <img src="./images/rooms/living.jpg" alt="dining room"  />
                                <h3 className="font-poppins font-semibold">Living</h3>
                            </div>
                            <div className="flex-col flex items-center justify-center">
                                <img src="./images/rooms/bedroom.jpg" alt="dining room"  />
                                <h3 className="font-poppins font-semibold">Bedroom</h3>
                            </div>
                </div>

            </div>
        </section>
    )
}

export default Rooms