export type ContentProps = {
  title: string;
  description: string;
  price: number;
  shippingInformation: string;
  warrantyInformation: string;
  minimumOrderQuantity: number;
  returnPolicy: string;
  isAdditionalInfo?: boolean;
}