export enum CategoryType {
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
}

export type ReviewProps = {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
};

export type ProductProps = {
  id: number;
  title: string;
  description: string;
  category: CategoryType;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: CategoryType[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ReviewProps[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: Date;
    updatedAt: Date;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};


export type ProductsResponse = {
  products: ProductProps[];
}

export type ProductRequestProps = {
  sortBy?: string;
  order?: string;
  search?: string;
}

export type CategoryListResponse = {
  slug: CategoryType;
  name: string;
  url: string;
}