export interface ProductsResponse {
  id: string;
  category: Category;
  creationAt: string;
  description: string;
  images: string[];
  price: number;
  title: string;
  updatedAt: string;
}

export interface Category {
  creationAt: string;
  id: number;
  image: string;
  name: string;
  updatedAt: string;
}
