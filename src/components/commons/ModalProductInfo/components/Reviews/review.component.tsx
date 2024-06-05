import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { ReviewProps } from "@/services/interfaces/products";
import { ReviewCard } from "./components/ReviewCard/review-card.component";

export const Review: React.FC<{ data: ReviewProps[] }> = ({ data }) => {
  const renderReviews = () => {
    return data.map((review, index) => (
      <SwiperSlide key={index}>
        <ReviewCard {...review} />
      </SwiperSlide>
    ));
  };

  return (
    <div className="w-full flex flex-col gap-1 p-4">
      <h3 className="text-2xl text-white font-bold">Reviews</h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={true}
        modules={[Pagination]}
        className="w-[280px] md1:w-full"
        style={
          {
            "--swiper-pagination-color": "#D9D9D9",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
          } as React.CSSProperties
        }
      >
        {renderReviews()}
      </Swiper>
    </div>
  );
};
