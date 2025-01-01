// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useGetCategories } from "../../api/Categories";
import { Category } from "../../types/item";
import { useNavigate } from "react-router-dom";
import { addBaseUrlToSrc } from "../../utils/addBaseUrlToSrc";
import { languageObject } from "../../utils/languageObject";
import Loading from "../Utils/Loading/Loading";

const CategoriesSlider = () => {
  const { data , isLoading} = useGetCategories();
  const categories = (data?.categories as Category[]) || ([] as []);
  const navigate = useNavigate();
  const handelNavigate = (data: Category) => {
    navigate(`/categories?category=${data?.id}`);
  };
  console.log(categories);
  

  return (
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
export default CategoriesSlider;



// // import Swiper core and required modules
// import { Navigation, A11y } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import { useGetCategories } from "../../api/Categories";
// import { Category } from "../../types/item";
// import { useNavigate } from "react-router-dom";
// import { addBaseUrlToSrc } from "../../utils/addBaseUrlToSrc";
// import { languageObject } from "../../utils/languageObject";
// import Loading from "../Utils/Loading/Loading";

// const CategoriesSlider = () => {
//   const { data , isLoading} = useGetCategories();
//   const categories = (data?.categories as Category[]) || ([] as []);
//   const navigate = useNavigate();
//   const handelNavigate = (data: Category) => {
//     navigate(`/categories?category=${data?.id}`);
//   };
//   console.log(categories);
  

//   return (
//     <div className="CategoriesSlider">
//       <Swiper
//         modules={[Navigation, A11y]}
//         spaceBetween={10}
//         // slidesPerView={5}
//         navigation
//         breakpoints={{
//           320: {
//             slidesPerView: 2,
//           },
//           480: {
//             slidesPerView: 3,
//           },
//           640: {
//             slidesPerView: 3,
//           },
//           768: {
//             slidesPerView: 4,
//           },
//           1024: {
//             slidesPerView: 5,
//           },
//         }}
//       >
//         {isLoading ?<Loading/> :
//         categories?.map((item: Category, index: number) => {
//           return (
//             <SwiperSlide key={index}>
//               <div className="CategoriesSlider_image">
//                 <img
//                   onClick={() => handelNavigate(item)}
//                   // src={addBaseUrlToSrc(item?.photo)}
//                   src={'Noise_Cancellation.png'}
//                   alt={`category ${index + 1}`}
//                 />
//                 <p className="truncate-text">{languageObject(item?.name)}</p>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// };
// export default CategoriesSlider;
