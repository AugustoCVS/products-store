export enum OrderOptions {
  ASC = "asc",
  DESC = "desc"
}

export type filterProps = {
  sortBy: string;
  order: OrderOptions; 
  category: string;
}