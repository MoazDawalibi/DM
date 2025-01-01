export interface Translation {
  split(arg0: string): unknown;
  en: string;
  ar: string;
  de: string;
}

export interface Category {
  id: number;
  name: Translation;
  parent_id: number | null;
  parent: Category | null;
  photo: string;
  product_count: number;
}

export interface BaseProduct {
  id: number;
  category_id: number;
  category: Category;
  name: Translation;
  info: string | null;
  product_count: number;
}

export interface ProductImage {
  id: number;
  path: string;
  product_id: number;
  created_at: string;
  updated_at: string;
}

export interface ProductAttributeValue {
  id: number;
  attribute_id: number;
  value: Translation;
  image: string | null;
}

export interface Attribute {
  id: number;
  name: Translation;
  type: string;
  icon: string | null;
  category_id: number;
  Attribute_values: ProductAttributeValue[];
}

export interface ProductAttribute {
  attribute: Attribute;
  value: ProductAttributeValue;
}

export interface Product {
  id: number;
  name: Translation;
  price: number;
  main_photo: string;
  images: ProductImage[];
  category: Category;
  description: Translation;
  info: any | null; // Adjust this type based on the actual structure if available
  video: string | null;
  base_product_id: number;
  favorite: boolean;
  count_of_favorites: number;
  total_quantity_ordered: number;
  attributes: ProductAttribute[];
  other_attributes: any | null; // Adjust this type based on the actual structure if available
  quantity:number
}

export interface MainData {
  id: number;
  category: Category;
  product: Product;
  name: Translation;
  info: any | null; // Adjust this type based on the actual structure if available
  products: Product[];
}
