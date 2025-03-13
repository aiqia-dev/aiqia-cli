import { useContext } from 'react';

import { AppStateContext } from '@/contexts/AppStateContext';

const useAppStateContext = () => {
  return useContext(AppStateContext);
};

export default useAppStateContext;
