'use client'

import { createContext } from "react";

type ProductViewOptions = "grid" | "list"

export const ProductViewContext = createContext<ProductViewOptions>('grid');