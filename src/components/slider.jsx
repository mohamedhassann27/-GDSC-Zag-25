import img1 from"../assets/img1.jpg"
import img2 from"../assets/img2.jpg"
import img3 from"../assets/img3.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Slider(){
    return(
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-150">
            <SwiperSlide><img className="h-150 w-full bg-center bg-cover" src={img1} alt="1" /></SwiperSlide>
            <SwiperSlide><img className="h-150 w-full bg-center bg-cover"src={img2} alt="2" /></SwiperSlide>
            <SwiperSlide><img className="h-150 w-full bg-center bg-cover"src={img3} alt="3" /></SwiperSlide>
        </Swiper>
    )
}

export default Slider;
