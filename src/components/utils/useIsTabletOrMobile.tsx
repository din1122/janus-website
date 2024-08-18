import { useMediaQuery } from 'react-responsive';

const useIsTabletOrMobile = () => {
  return useMediaQuery({ query: '(max-width: 1224px)' });
};

export default useIsTabletOrMobile;
