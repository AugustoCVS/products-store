import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const Image: React.FC<{ productImage: string[] }> = ({
  productImage,
}) => {
  const renderImages = () => {
    return productImage.map((image, index) => (
      <SwiperSlide key={index} className="rounded-lg">
        <div className="flex items-center justify-center">
          <img src={image} className="w-[320px] h-[360px]" />;
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <Swiper
      slidesPerView={1}
      pagination={true}
      modules={[Pagination]}
      style={
        {
          "--swiper-pagination-color": "#D9D9D9",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        } as React.CSSProperties
      }
    >
      {renderImages()}
    </Swiper>
  );
};
