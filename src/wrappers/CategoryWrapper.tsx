import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "../components/CategoryCard";

export default function CategoryWrapper() {
    return (
    <section id="Categories" className="mt-[30px]">
            <div className="flex items-center justify-between px-5">
            <h2 className="font-bold">kategori</h2>
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
                <SwiperSlide className=" !w-fit pb-[30px]">
                    <CategoryCard/>
                </SwiperSlide>
                <SwiperSlide className=" !w-fit pb-[30px]">
                    <CategoryCard/>
                </SwiperSlide>
                <SwiperSlide className=" !w-fit pb-[30px]">
                    <CategoryCard/>
                </SwiperSlide>
                <SwiperSlide className=" !w-fit pb-[30px]">
                    <CategoryCard/>
                </SwiperSlide>
                

            </Swiper>
            </div>
        </section>
    );
}