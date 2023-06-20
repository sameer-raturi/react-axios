import { useEffect } from 'react';
import { fetchData } from './actions';

const FirstRequest = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
