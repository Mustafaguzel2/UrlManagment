import { useProductFilters } from "../hooks/useProductFilters";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../lib/fetchProducts";
import type { ProductFilters } from "../lib/fetchProducts";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "./ui/dropdown-menu";

const PAGE_SIZE = 10;
const categories = [
  { label: "All", value: "all" },
  { label: "Clothing", value: "clothing" },
  { label: "Electronics", value: "electronics" },
];

export default function ProductList() {
  const [urlFilters, setUrlFilters] = useProductFilters();
  const [form, setForm] = useState(urlFilters);

  // Sync form state with URL filters (e.g., on browser nav)
  useEffect(() => {
    setForm(urlFilters);
  }, [urlFilters]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", urlFilters],
    queryFn: () => fetchProducts(urlFilters as ProductFilters),
    staleTime: 1000 * 60,
  });

  const totalPages = data ? Math.ceil(data.total / PAGE_SIZE) : 1;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="bg-card rounded-lg shadow p-4 mb-6 flex flex-col gap-4">
        <div className="flex flex-wrap gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-40 justify-between">
                  {categories.find(c => c.value === form.category)?.label || "Select"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuRadioGroup
                  value={form.category}
                  onValueChange={val => setForm(f => ({ ...f, category: val, page: 1 }))}
                >
                  {categories.map(cat => (
                    <DropdownMenuRadioItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Min Price</label>
            <input
              type="number"
              className="input input-bordered w-28 px-2 py-1 rounded border"
              value={form.minPrice}
              onChange={e => setForm(f => ({ ...f, minPrice: Number(e.target.value), page: 1 }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Max Price</label>
            <input
              type="number"
              className="input input-bordered w-28 px-2 py-1 rounded border"
              value={form.maxPrice}
              onChange={e => setForm(f => ({ ...f, maxPrice: Number(e.target.value), page: 1 }))}
            />
          </div>
          <div className="flex-1 min-w-[180px]">
            <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
            <input
              type="text"
              className="input input-bordered w-full px-2 py-1 rounded border"
              value={form.tags.join(",")}
              onChange={e =>
                setForm(f => ({
                  ...f,
                  tags: e.target.value.split(",").map(t => t.trim()),
                  page: 1,
                }))
              }
            />
          </div>
          <Button
            onClick={() => setUrlFilters(form)}
            className="h-10"
          >
            Apply
          </Button>
        </div>
      </div>
      {isLoading && <div className="text-center py-8">Loading...</div>}
      {isError && <div className="text-center text-destructive py-8">Error loading products.</div>}
      {data && (
        <>
          <ul className="grid gap-3 mb-6">
            {data.products.map((p: { id: number; name: string; price: number }) => (
              <li
                key={p.id}
                className="bg-muted rounded-lg p-4 flex justify-between items-center shadow-sm"
              >
                <span className="font-medium">{p.name}</span>
                <span className="text-primary font-semibold">${p.price}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-muted-foreground">
              Page: {urlFilters.page} / {totalPages}
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={urlFilters.page <= 1}
                onClick={() => setUrlFilters({ ...urlFilters, page: urlFilters.page - 1 })}
              >
                Prev
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={urlFilters.page >= totalPages}
                onClick={() => setUrlFilters({ ...urlFilters, page: urlFilters.page + 1 })}
              >
                Next
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
