import axiosInstance from "./axios";


async function fetchGraphQLData(GET_POSTS_QUERY,varia) {
  let obj=varia
  // slug?{ "limit": 10, "offset": 0,channelEntryId:slug }:{ "limit": 10, "offset": 0,channelId:102}
  try {
    const response = await axiosInstance.post('', {
      query: GET_POSTS_QUERY,
      variables: obj
    });
// console.log(response,'34343434');
    return response.data; 
  } catch (error) {
    console.error('Error fetching GraphQL data:', error);
    throw error; // Re-throw the error for handling elsewhere if needed
  }
}

export const fetchGraphQl = async (GET_POSTS_QUERY,varia,setPostes) => {

  try {
    const entries = await fetchGraphQLData(GET_POSTS_QUERY,varia);
    // console.log(entries, 'entries');
    // return entries;
    // console.log(entries?.data?.channelEntriesList?.channelEntryList?.channelEntryList,'4334343');
    
    // entries?.data?.channelEntriesList?.channelEntryList?.channelEntryList.sort((a,b)=>{
    //       return new Date(a.createdOn)-new Date(b.createdOn)
    // })
    setPostes(entries.data)
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error; // Re-throw the error for handling elsewhere if needed
  }
};
