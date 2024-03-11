import axiosInstance from "./axios";


const GET_POSTS_QUERY = `query($channelId: Int,$channelEntryId: Int,$categoryId: Int,$limit: Int,$offset: Int){
    channelEntriesList(channelId: $channelId,channelEntryId: $channelEntryId,categoryId: $categoryId, limit: $limit,offset: $offset){
      channelEntryList{
        channelEntryList{
          id
          title
          slug
          description
          userId
          channelId
          status
          isActive
          isDeleted
          deletedBy
          deletedOn
          createdOn
          createdBy
          modifiedBy
          modifiedOn
          coverImage
          thumbnailImage
          metaTitle
          metaDescription
          keyword
          categoriesId
          relatedArticles
          categories{
            id
            categoryName
            parentId
            modifiedOn
          }
        }
        count
      }
      channelEntry{
        id
        title
        slug
        description
        userId
        channelId
        status
        isActive
        isDeleted
        deletedBy
        deletedOn
        createdOn
        createdBy
        modifiedBy
        modifiedBy
        modifiedOn
        coverImage
        thumbnailImage
        metaTitle
        metaDescription
        keyword
        categoriesId
        relatedArticles
        categories{
            id
            categoryName
            parentId
            modifiedOn
          }
      }
    }
  }
`;

async function fetchGraphQLData(slug) {
  let obj=slug?{ "limit": 10, "offset": 0,channelEntryId:slug }:{ "limit": 10, "offset": 0}
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

export const fetchGraphQl = async (setPostes,slug) => {

  try {
    const entries = await fetchGraphQLData(slug?slug:"");
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
