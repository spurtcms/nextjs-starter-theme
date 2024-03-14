
import axiosInstance from "./axios";


async function fetchGraphQLData(GET_POSTS_QUERY,varia) {
  let obj=varia
  try {
    const response = await axiosInstance.post('', {
      query: GET_POSTS_QUERY,
      variables: obj
    });
    return response.data; 
  } catch (error) {
    throw error;
  }
}

export const fetchGraphQl = async (GET_POSTS_QUERY,varia,setPostes) => {

  try {
    const entries = await fetchGraphQLData(GET_POSTS_QUERY,varia);
    
    setPostes(entries.data)
  } catch (error) {
    throw error;
  }
};
