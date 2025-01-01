import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import ProductCard from './ProductCard';
import { Product } from '../../types/item';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Spin } from 'antd';

const ProductSwiper = ({ data, isLoading }: any) => {


  const BaseProducts = (data?.products as Product[]) || ([] as []);
  console.log(BaseProducts);
  
  return (
    // <div className='productSwiper'>
    //   <Swiper
    //     dir={"ltr"}
    //     slidesPerView={5}
    //     spaceBetween={20}
    //     breakpoints={{
    //       0: { slidesPerView: 1 },
    //       400: { slidesPerView: 1 },
    //       600: { slidesPerView: 2 },
    //       900: { slidesPerView: 4 },
    //       1200: { slidesPerView: 4 },
    //       1500: { slidesPerView: 4 },
    //     }}
    //     modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    //     pagination={{ clickable: true }}
    //     className="mySwiper"
    //   >
    //     {
    //       isLoading ? <Spin /> :
    //       BaseProducts?.map((item: Product, index: number) => (
    //         <SwiperSlide key={index}>
    //           <ProductCard key={index} item={item} />
    //         </SwiperSlide>
    //       ))
    //     }
    //   </Swiper>
    // </div>

    <div className="CategoriesSlider">
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={10}
      // slidesPerView={5}
      navigation
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
    >
      {/* {isLoading ?<Loading/> : */}
      {/* categories?.map((item: Category, index: number) => { */}
        {/* return ( */}
          <SwiperSlide >
            <div className="CategoriesSlider_image">
              <img
                // onClick={() => handelNavigate(item)}
                // src={addBaseUrlToSrc(item?.photo)}
                src={'/Home/Noise_Cancellation.png'}
                // alt={`category ${index + 1}`}
              />
              {/* <p className="truncate-text">{languageObject(item?.name)}</p> */}
              <p className="truncate-text">test headphone</p>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="CategoriesSlider_image">
              <img
                // onClick={() => handelNavigate(item)}
                // src={addBaseUrlToSrc(item?.photo)}
                src={'/Home/Noise_Cancellation.png'}
                // alt={`category ${index + 1}`}
              />
              {/* <p className="truncate-text">{languageObject(item?.name)}</p> */}
              <p className="truncate-text">test headphone</p>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="CategoriesSlider_image">
              <img
                // onClick={() => handelNavigate(item)}
                // src={addBaseUrlToSrc(item?.photo)}
                src={'/Home/Noise_Cancellation.png'}
                // alt={`category ${index + 1}`}
              />
              {/* <p className="truncate-text">{languageObject(item?.name)}</p> */}
              <p className="truncate-text">test headphone</p>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="CategoriesSlider_image">
              <img
                // onClick={() => handelNavigate(item)}
                // src={addBaseUrlToSrc(item?.photo)}
                src={'/Home/Noise_Cancellation.png'}
                // alt={`category ${index + 1}`}
              />
              {/* <p className="truncate-text">{languageObject(item?.name)}</p> */}
              <p className="truncate-text">test headphone</p>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="CategoriesSlider_image">
              <img
                // onClick={() => handelNavigate(item)}
                // src={addBaseUrlToSrc(item?.photo)}
                src={'/Home/Noise_Cancellation.png'}
                // alt={`category ${index + 1}`}
              />
              {/* <p className="truncate-text">{languageObject(item?.name)}</p> */}
              <p className="truncate-text">test headphone</p>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="CategoriesSlider_image">
              <img
                // onClick={() => handelNavigate(item)}
                // src={addBaseUrlToSrc(item?.photo)}
                src={'/Home/Noise_Cancellation.png'}
                // alt={`category ${index + 1}`}
              />
              {/* <p className="truncate-text">{languageObject(item?.name)}</p> */}
              <p className="truncate-text">test headphone</p>
            </div>
          </SwiperSlide>
        {/* ); */}
      {/* }) */}
      {/* } */}
    </Swiper>
  </div>
  );
};

export default ProductSwiper;