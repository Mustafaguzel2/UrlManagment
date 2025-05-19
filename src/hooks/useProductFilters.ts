import {
  useQueryStates,
  parseAsString,
  parseAsInteger,
  parseAsArrayOf,
} from "nuqs";

export function useProductFilters() {
  return useQueryStates({
    category: parseAsString.withDefault("all"),
    minPrice: parseAsInteger.withDefault(0),
    maxPrice: parseAsInteger.withDefault(1000),
    page: parseAsInteger.withDefault(1),
    tags: parseAsArrayOf(parseAsString).withDefault([]),
  });
}
