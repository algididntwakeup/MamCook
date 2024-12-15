import { Swiper,SwiperSlide } from "swiper/react";
import FeaturedRecipe from "../components/FeaturedRecipe";

export default function BrowseFeaturedRecipesWrapper() {
  return (
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
            <Swiper
        className="w-full mt-3"
        direction='horizontal'
        spaceBetween={16}
        slidesPerView="auto"
        slidesOffsetBefore={20}
        slidesOffsetAfter={20}
        >
                <SwiperSlide className=" !w-fit">
                <FeaturedRecipe/>
                </SwiperSlide>
                <SwiperSlide className=" !w-fit">
                <FeaturedRecipe/>
                </SwiperSlide>
                <SwiperSlide className=" !w-fit">
                <FeaturedRecipe/>
                </SwiperSlide>
                <SwiperSlide className=" !w-fit">
                <FeaturedRecipe/>
                </SwiperSlide>
               
            </Swiper>
            </div>
        </section>
  )
}
