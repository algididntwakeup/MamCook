export default function Browse() {
    return(
        <>
            <nav className="flex items-center justify-between px-5 mt-[30px]">
            <a href="index.html" className="flex shrink-0">
            <img src="/assets/images/logos/logo.svg" alt="logo" />
            </a>
            <a href="#">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_10px_20px_0_#D6D6D6AB] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80]">
                <img
                src="/assets/images/icons/notification.svg"
                className="w-5 h-5 object-contain"
                alt="icon"
                />
            </div>
            </a>
        </nav>
        <div id="SearchForm" className="px-5 mt-[30px]">
            <form
            action="search.html"
            className="flex items-center rounded-full p-[5px_14px] pr-[5px] gap-[10px] bg-white shadow-[0_12px_30px_0_#D6D6D652] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#FF4C1C]"
            >
            <img
                src="/assets/images/icons/note-favorite.svg"
                className="w-6 h-6"
                alt="icon"
            />
            <input
                type="text"
                name="search"
                id="search"
                className="appearance-none outline-none w-full font-semibold placeholder:font-normal placeholder:text-black"
                placeholder="Find our best food recipes"
            />
            <button type="submit" className=" flex shrink-0 w-[42px] h-[42px]">
                <img src="/assets/images/icons/search.svg" alt="icon" />
            </button>
            </form>
        </div>
        <section id="kategori" className="mt-[30px]">
            <div className="flex items-center justify-between px-5">
            <h2 className="font-bold">kategori</h2>
            </div>
            <div className="swiper w-full mt-3">
            <div className="swiper-wrapper">
                <div className="swiper-slide !w-fit pb-[30px]">
                <a href="category.html" className="card">
                    <div className="flex flex-col w-fit min-w-[90px] rounded-[31px] p-[10px] pb-5 gap-[10px] text-center bg-white shadow-[0_12px_30px_0_#D6D6D680] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:bg-[#FF4C1C] hover:text-white">
                    <div className="flex shrink-0 w-[70px] h-[70px] rounded-full bg-white">
                        <img
                        src="/assets/images/icons/bakery.png"
                        className="object-cover w-full h-full object-top"
                        alt="icon"
                        />
                    </div>
                    <h3 className="font-semibold text-sm leading-[21px]">Bakery</h3>
                    </div>
                </a>
                </div>
                <div className="swiper-slide !w-fit pb-[30px]">
                <a href="category.html" className="card">
                    <div className="flex flex-col w-fit min-w-[90px] rounded-[31px] p-[10px] pb-5 gap-[10px] text-center transition-all duration-300 shadow-[0_10px_20px_0_#FF4C1C80] bg-[#FF4C1C] text-white">
                    <div className="flex shrink-0 w-[70px] h-[70px] rounded-full bg-white">
                        <img
                        src="/assets/images/icons/healthy.png"
                        className="object-contain w-full h-full"
                        alt="icon"
                        />
                    </div>
                    <h3 className="font-semibold text-sm leading-[21px]">Healthy</h3>
                    </div>
                </a>
                </div>
                <div className="swiper-slide !w-fit pb-[30px]">
                <a href="category.html" className="card">
                    <div className="flex flex-col w-fit min-w-[90px] rounded-[31px] p-[10px] pb-5 gap-[10px] text-center bg-white shadow-[0_12px_30px_0_#D6D6D680] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:bg-[#FF4C1C] hover:text-white">
                    <div className="flex shrink-0 w-[70px] h-[70px] rounded-full bg-white">
                        <img
                        src="/assets/images/icons/sweet.png"
                        className="object-contain w-full h-full"
                        alt="icon"
                        />
                    </div>
                    <h3 className="font-semibold text-sm leading-[21px]">Sweet</h3>
                    </div>
                </a>
                </div>
                <div className="swiper-slide !w-fit pb-[30px]">
                <a href="category.html" className="card">
                    <div className="flex flex-col w-fit min-w-[90px] rounded-[31px] p-[10px] pb-5 gap-[10px] text-center bg-white shadow-[0_12px_30px_0_#D6D6D680] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:bg-[#FF4C1C] hover:text-white">
                    <div className="flex shrink-0 w-[70px] h-[70px] rounded-full bg-white">
                        <img
                        src="/assets/images/icons/steam.png"
                        className="object-contain w-full h-full"
                        alt="icon"
                        />
                    </div>
                    <h3 className="font-semibold text-sm leading-[21px]">Steam</h3>
                    </div>
                </a>
                </div>
                <div className="swiper-slide !w-fit pb-[30px]">
                <a href="category.html" className="card">
                    <div className="flex flex-col w-fit min-w-[90px] rounded-[31px] p-[10px] pb-5 gap-[10px] text-center bg-white shadow-[0_12px_30px_0_#D6D6D680] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:bg-[#FF4C1C] hover:text-white">
                    <div className="flex shrink-0 w-[70px] h-[70px] rounded-full bg-white">
                        <img
                        src="/assets/images/icons/grill.png"
                        className="object-contain w-full h-full"
                        alt="icon"
                        />
                    </div>
                    <h3 className="font-semibold text-sm leading-[21px]">Grill</h3>
                    </div>
                </a>
                </div>
            </div>
            </div>
        </section>
        <section id="MadeByPeople">
            <div className="flex items-center justify-between px-5">
            <h2 className="font-bold">Made by People</h2>
            <a
                href="#"
                className="font-semibold text-sm leading-[21px] text-[#FF4C1C]"
            >
                Explore All
            </a>
            </div>
            <div className="swiper w-full mt-3">
            <div className="swiper-wrapper">
                <div className="swiper-slide !w-fit">
                <a href="details.html" className="card">
                    <div className="relative w-[200px] h-[280px] rounded-[30px] bg-white overflow-hidden">
                    <img
                        src="/assets/images/thumbnails/thumbnail-1.png"
                        className="absolute w-full h-full object-cover"
                        alt="thumbnails"
                    />
                    <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10" />
                    <div className="relative flex flex-col h-full justify-between p-5 z-20">
                        <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-white/20 backdrop-blur">
                        <img
                            src="/assets/images/icons/Star 1.svg"
                            className="w-4 h-4"
                            alt="star"
                        />
                        <span className="font-semibold text-xs leading-[18px] text-white">
                            4.5
                        </span>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                        <h3 className="font-bold text-xl leading-[28px] text-white">
                            Orange Cake Masterpieces
                        </h3>
                        <p className="font-semibold text-xs leading-[18px] text-[#FF4C1C]">
                            Sweet
                        </p>
                        </div>
                    </div>
                    </div>
                </a>
                </div>
                <div className="swiper-slide !w-fit">
                <a href="details.html" className="card">
                    <div className="relative w-[200px] h-[280px] rounded-[30px] bg-white overflow-hidden">
                    <img
                        src="/assets/images/thumbnails/thumbnail-2.png"
                        className="absolute w-full h-full object-cover"
                        alt="thumbnails"
                    />
                    <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10" />
                    <div className="relative flex flex-col h-full justify-between p-5 z-20">
                        <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-white/20 backdrop-blur">
                        <img
                            src="/assets/images/icons/Star 1.svg"
                            className="w-4 h-4"
                            alt="star"
                        />
                        <span className="font-semibold text-xs leading-[18px] text-white">
                            4.8
                        </span>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                        <h3 className="font-bold text-xl leading-[28px] text-white">
                            Burger Tebal Makin Hot
                        </h3>
                        <p className="font-semibold text-xs leading-[18px] text-[#FF4C1C]">
                            Bakery
                        </p>
                        </div>
                    </div>
                    </div>
                </a>
                </div>
                <div className="swiper-slide !w-fit">
                <a href="details.html" className="card">
                    <div className="relative w-[200px] h-[280px] rounded-[30px] bg-white overflow-hidden">
                    <img
                        src="/assets/images/thumbnails/thumbnail-3.png"
                        className="absolute w-full h-full object-cover"
                        alt="thumbnails"
                    />
                    <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10" />
                    <div className="relative flex flex-col h-full justify-between p-5 z-20">
                        <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-white/20 backdrop-blur">
                        <img
                            src="/assets/images/icons/Star 1.svg"
                            className="w-4 h-4"
                            alt="star"
                        />
                        <span className="font-semibold text-xs leading-[18px] text-white">
                            4.3
                        </span>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                        <h3 className="font-bold text-xl leading-[28px] text-white">
                            French Toast Blueberries
                        </h3>
                        <p className="font-semibold text-xs leading-[18px] text-[#FF4C1C]">
                            by Masa
                        </p>
                        </div>
                    </div>
                    </div>
                </a>
                </div>
            </div>
            </div>
        </section>
        <div
            id="BottomNav"
            className="fixed z-50 bottom-0 w-full max-w-[640px] mx-auto border-t border-[#E7E7E7] py-4 px-5 bg-white/70 backdrop-blur"
        >
            <div className="flex items-center justify-evenly ">
            <a href="#" className="nav-items">
                <div className="flex flex-col items-center text-center gap-[7px] text-sm leading-[21px] font-semibold">
                <img
                    src="/assets/images/icons/note-favorite-orange.svg"
                    className="w-6 h-6"
                    alt="icon"
                />
                <span>Browse</span>
                </div>
            </a>
            <a href="#" className="nav-items">
                <div className="flex flex-col items-center text-center gap-[7px] text-sm leading-[21px]">
                <img
                    src="/assets/images/icons/crown-grey.svg"
                    className="w-6 h-6"
                    alt="icon"
                />
                <span>Featured</span>
                </div>
            </a>
            <a href="#" className="nav-items">
                <div className="flex flex-col items-center text-center gap-[7px] text-sm leading-[21px]">
                <img
                    src="/assets/images/icons/receipt-item-grey.svg"
                    className="w-6 h-6"
                    alt="icon"
                />
                <span>Pricing</span>
                </div>
            </a>
            <a href="#" className="nav-items">
                <div className="flex flex-col items-center text-center gap-[7px] text-sm leading-[21px]">
                <img
                    src="/assets/images/icons/setting-2-grey.svg"
                    className="w-6 h-6"
                    alt="icon"
                />
                <span>Settings</span>
                </div>
            </a>
            </div>
        </div>


        </>
    );
}