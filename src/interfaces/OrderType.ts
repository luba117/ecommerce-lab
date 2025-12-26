import type { Product } from "./Product";

export interface OrderType {
  id: number;
  items: Product[]; 
  total: number;
  createdAt: string;
}