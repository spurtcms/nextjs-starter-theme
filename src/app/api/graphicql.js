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

async function fetchGraphQLData() {
  try {
    const response = await axiosInstance.post('', {
      query: GET_POSTS_QUERY,
      variables: { "limit": 10, "offset": 0 }
    });
// console.log(response,'34343434');
    return response.data; 
  } catch (error) {
    console.error('Error fetching GraphQL data:', error);
    throw error; // Re-throw the error for handling elsewhere if needed
  }
}

export const fetchGraphQl = async (setPostes) => {
  try {
    const entries = await fetchGraphQLData();
    // console.log(entries, 'entries');
    // return entries;
    setPostes(entries.data)
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error; // Re-throw the error for handling elsewhere if needed
  }
};
