import { ContentProps } from "./content.types";
import { priceFormatter } from "@/utils/formaters";
import { Line } from "./components/Line/line.component";

export const Content: React.FC<ContentProps> = ({
  description,
  isAdditionalInfo,
  minimumOrderQuantity,
  price,
  returnPolicy,
  shippingInformation,
  title,
  warrantyInformation,
}) => {
  const additionalInfo = [
    {
      label: "Shipping",
      value: shippingInformation,
    },
    {
      label: "Warranty",
      value: warrantyInformation,
    },
    {
      label: "Minimum quantity to order",
      value: minimumOrderQuantity.toString(),
    },
    {
      label: "Return policy",
      value: returnPolicy,
    },
  ];

  if (isAdditionalInfo) {
    return (
      <div className="p-4">
        <h2 className="text-2xl text-white font-bold">Additional Info</h2>
        {additionalInfo.map((info) => (
          <Line key={info.label} label={info.label} value={info.value} />
        ))}
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="w-full flex flex-row justify-between">
        <h1 className="text-2xl text-white font-bold">{title}</h1>
        <p className="text-lg text-gray-300">{priceFormatter.format(price)}</p>
      </div>
      <p className="text-lg text-gray-400 pt-2">{description}</p>
    </div>
  );
};
