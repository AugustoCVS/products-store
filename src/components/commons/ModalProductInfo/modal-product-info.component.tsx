import { Modal } from "react-responsive-modal";
import { X } from "lucide-react";

import { ModalProductInfoProps } from "./modal-product-info.types";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import { Divider } from "./components/Divider/divider.component";
import { Image } from "./components/Image/image.component";
import { Content } from "./components/Content/content.component";
import { Review } from "./components/Reviews/review.component";

export const ModalProductInfo: React.FC<ModalProductInfoProps> = ({
  isOpen,
  onClose,
}) => {
  const product = useSelector((state: RootState) => state.products.product);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      closeIcon={<X size={24} color="white" className="z-10" />}
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
        <Image productImage={product.images} />

        <Content {...product} />

        <Divider />

        <Content {...product} isAdditionalInfo />

        <Divider />

        <Review data={product.reviews} />
      </div>
    </Modal>
  );
};
