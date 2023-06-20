import { useEffect } from 'react';
import { fetchProductUsingCustomInstance } from './actions';

const CustomInstance = () => {
  useEffect(() => {
    fetchProductUsingCustomInstance();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
