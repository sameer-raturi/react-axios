import { useEffect } from 'react';
// import './axios/global';
import { fetchProductUsingGlobal } from './actions';

const GlobalInstance = () => {
  useEffect(() => {
    fetchProductUsingGlobal();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
