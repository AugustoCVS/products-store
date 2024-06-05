import { Modal } from "react-responsive-modal";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { ModalProductInfoProps } from "./modal-product-info.types";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Image } from "./components/Image/image.component";

export const ModalProductInfo: React.FC<ModalProductInfoProps> = ({
  isOpen,
  onClose,
}) => {
  const product = useSelector((state: RootState) => state.products.product);

  const renderImages = () => {
    return product.images.map((image, index) => (
      <SwiperSlide
        key={index}
        className="w-full flex items-center justify-center bg-black rounded-lg"
      >
        <Image key={index} src={image} alt={product.title} />
      </SwiperSlide>
    ));
  };

  const renderSlide = () => {
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

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      closeIcon={<X size={24} color="white" />}
      styles={{
        modal: {
          padding: 8,
          borderRadius: "10px",
          background: "#323238",
          overflow: "hidden",
        },
      }}
    >
      <div>
        {renderSlide()}
        <div className="p-4">
          <h1 className="text-2xl text-white font-semibold">{product.title}</h1>
          <p className="text-lg text-gray-500">{product.description}</p>
          <p className="text-lg text-gray-500">Price: {product.price}</p>
        </div>
      </div>
    </Modal>
  );
};
