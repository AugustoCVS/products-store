import { Stars } from "@/components/commons/Stars/stars.component";
import { priceFormatter } from "@/utils/formaters";
import { ContentProps } from "./content.types";

export const Content: React.FC<ContentProps> = ({ price, rating, title }) => {
  return (
    <div className="w-full flex flex-col gap-2 p-2">
      <Stars rating={rating} />

      <div className="flex flex-row items-center justify-between">
        <h2 className="flex-1 text-white font-semibold text-lg">{title}</h2>

        <p className="flex items-center justify-center text-white rounded-lg  p-1.5 bg-gray-900">
          {priceFormatter.format(price)}
        </p>
      </div>
    </div>
  );
};
