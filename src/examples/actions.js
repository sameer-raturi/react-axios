import axios from "axios";
import authFetch from "./axios/custom";
import authFetchInterceptor from "./axios/interceptors";

export const fetchData = async () => {
  try {
    const url = "https://course-api.com/react-store-products";
    // if we don't specify the request type it will automatically be the get request
    const response = await axios(url);
    console.log({ response });
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchDadJoke = async () => {
  try {
    const url = "https://icanhazdadjoke.com/";
    const { data } = await axios(url, {
      headers: {
        accept: "application/json",
      },
    });
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

export const postData = async (payload) => {
  try {
    const url =  'https://course-api.com/axios-tutorial-post';
    const { data } = await axios.post(url, payload,  {
      headers: {
        accept: "application/json",
      },
    });
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchProductUsingGlobal = async () => {
  try {
    const productsUrl = 'https://course-api.com/react-store-products';
    const { data } = await axios(productsUrl);
    return data;
  } catch (error) {
    console.log(error.response);
  }
};


export const fetchProductUsingCustomInstance= async () => {
  try {
    const { data } = await authFetch('/react-store-products');
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchProductUsingCustomInstanceAndInterceptors= async () => {
  try {
    const { data } = await authFetchInterceptor('/react-store-products');
    return data;
  } catch (error) {
    console.log(error.response);
  }
};