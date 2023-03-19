export interface Product {
  id: string;
  title: string;
  description: string;
  category: Category;
  price: number;
  images: string[];
}

export interface Category {
  creationAt: string;
  id: number;
  image: string;
  name: string;
  updatedAt: string;
}
