import { ModeToggle } from "./components/themeToggle";
import ProductList from "./components/ProductList";
export default function Home() {
  return (
    <div>
      <header>
        <ModeToggle />
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}
