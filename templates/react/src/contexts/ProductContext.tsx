import { ProductSchema } from '@/interfaces/productInterface';
import { createContext, ReactNode, useContext, useState } from 'react';

type ProductContextType = {
  product: ProductSchema | null;
  setProduct: (product: ProductSchema) => void;
  currentModule: string | null;
  setCurrentModule: (moduleKey: string) => void;
  currentSubmodule: string | null;
  setCurrentSubmodule: (submoduleKey: string | null) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};

type ProductProviderProps = {
  children: ReactNode;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [product, setProduct] = useState<ProductSchema | null>(null);
  const [currentModule, setCurrentModule] = useState<string | null>(null);
  const [currentSubmodule, setCurrentSubmodule] = useState<string | null>(null);

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        currentModule,
        setCurrentModule,
        currentSubmodule,
        setCurrentSubmodule,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
