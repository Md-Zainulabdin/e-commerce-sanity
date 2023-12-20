export interface IProduct {
  name: string;
  description: string;
  slug: string;
  price: string;
  imageUrl: string;
}

export interface fullProduct {
  _id: string;
  name: string;
  description: string;
  slug: string;
  price: string;
  images: any;
  categoryName: string;
  instock: boolean;
}
