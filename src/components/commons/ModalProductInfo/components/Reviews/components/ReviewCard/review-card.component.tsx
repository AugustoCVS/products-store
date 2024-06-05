import { Stars } from "@/components/commons/Stars/stars.component";
import { ReviewProps } from "@/services/interfaces/products";
import { Divider } from "@/components/commons/ModalProductInfo/components/Divider/divider.component";

export const ReviewCard: React.FC<ReviewProps> = ({
  comment,
  rating,
  reviewerEmail,
  reviewerName,
}) => {
  return (
    <div className="w-full bg-gray-800 flex flex-col items-center p-4 py-6 gap-2 rounded-lg text-white">
      <div className="w-full flex flex-col gap-1">
        <Stars rating={rating} />
        <h3>{reviewerName}</h3>
        <p>{reviewerEmail}</p>
      </div>

      <Divider />
      <div className="w-full">
        <p>{comment}</p>
      </div>
    </div>
  );
};
