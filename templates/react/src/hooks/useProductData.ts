import { useProduct } from '@/contexts/ProductContext';
import { useEffect, useState } from 'react';

export const useProductData = () => {
  const { setProduct } = useProduct();
  const [sessionData, setSessionData] = useState<any>(null);

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session) {
      try {
        const parsedSession = JSON.parse(session);
        setSessionData(parsedSession);
      } catch (error) {
        console.error('Erro ao analisar dados da sessão:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (sessionData) {
      const productKey = window.location.pathname.split('/')[1];
      const productData =
        sessionData.payload?.tenantPermissions?.accessControl?.products?.find(
          (p: any) => p.key === productKey
        );
      if (productData) {
        setProduct(productData);
      } else {
        window.location.href = '/';
      }
    }
  }, [sessionData, setProduct]);
};
