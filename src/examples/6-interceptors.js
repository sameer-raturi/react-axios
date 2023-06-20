import { useEffect } from 'react';
import { fetchProductUsingCustomInstanceAndInterceptors } from './actions';

const Interceptors = () => {
  useEffect(() => {
    fetchProductUsingCustomInstanceAndInterceptors();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
