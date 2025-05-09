import IslandContainer from "./IslandContainer";
import { ProductViewOptions } from "../_types/Products";
import { LayoutList, LayoutGrid } from "lucide-react";

export default function ProductViewActions({
  productView,
  setProductView,
}: {
  productView: ProductViewOptions;
  setProductView: (view: ProductViewOptions) => void;
}) {
  return (
    <ul className="flex gap-4 justify-end">
      <li>
        <button
          type="button"
          onClick={() => setProductView("list")}
          className={`${
            productView === "list" ? "text-indigo-500" : ""
          } hover:cursor-pointer hover:text-indigo-700`}
        >
          <IslandContainer
            className={`flex ${
              productView === "list" ? "shadow-indigo-500" : ""
            }`}
          >
            <span className="sr-only">List Layout</span>
            <LayoutList />
          </IslandContainer>
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => setProductView("grid")}
          className={`${
            productView === "grid" ? "text-indigo-500" : ""
          } hover:cursor-pointer hover:text-indigo-700`}
        >
          <IslandContainer
            className={`flex ${
              productView === "grid" ? "shadow-indigo-500" : ""
            }`}
          >
            <span className="sr-only">Grid Layout</span>
            <LayoutGrid />
          </IslandContainer>
        </button>
      </li>
    </ul>
  );
}
