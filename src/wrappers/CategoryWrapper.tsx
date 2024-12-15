import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "../components/CategoryCard";
import { useEffect, useState } from "react";
import axios from "axios";


export default function CategoryWrapper() {

    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
      axios.get('')
        .then(response => {
          setCategories(response.data.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }, []);
    


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
                {categories.map((category) => ( 
                <SwiperSlide className=" !w-fit pb-[30px]">
                    <CategoryCard/>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </section>
    );
}