import { products } from "../mock/products";

export type Product = (typeof products)[number];

export type ProductFilters = {
  category: string;
  minPrice: number;
  maxPrice: number;
  page: number;
  tags: string[];
};

const PAGE_SIZE = 10;

export async function fetchProducts(filters: ProductFilters) {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 500));

  const filtered = products.filter(
    (p) =>
      (filters.category === "all" || p.category === filters.category) &&
      p.price >= filters.minPrice &&
      p.price <= filters.maxPrice &&
      (filters.tags.length === 0 ||
        filters.tags.every((tag) => p.tags.includes(tag)))
  );

  const total = filtered.length;
  const paginated = filtered.slice(
    (filters.page - 1) * PAGE_SIZE,
    filters.page * PAGE_SIZE
  );

  return { products: paginated, total };
}
