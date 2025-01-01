// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CustomImage from "../../ui/CustomImage";
import React, { Key } from "react";

interface ProductSliderProps {
  data: any;
  onImageClick: (imagePath: string) => void;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ data, onImageClick }) => {
  return (
    <div className="product_images_swiper">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 4,
          },
        }}
        navigation
      >
        {/* main image */}
        <SwiperSlide>
          <span onClick={() => onImageClick(data.main_photo)}>
            <CustomImage
              className="product_multi_image main_image"
              src={data.main_photo}
              alt="Main Image"
            />
          </span>
        </SwiperSlide>
        {data?.images?.map((item: { path: string; },index: Key | null | undefined)=>{    
          return (
            <SwiperSlide key={index}>
              <span key={index}  onClick={() => onImageClick(item.path)} >
                <CustomImage
                  className="product_multi_image"
                  src={item?.path}
                  alt=""
                />
            </span>
          </SwiperSlide>
          )
          })}
      </Swiper>
    </div>
  );
};
export default ProductSlider;
