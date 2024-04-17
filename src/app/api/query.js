
export const GET_POSTS_LIST_QUERY = `query($channelId: Int,$categoryId: Int,$limit: Int!,$offset: Int!){
    channelEntriesList(channelId:$channelId,categoryId:$categoryId,limit:$limit,offset:$offset){
      channelEntriesList{
        id
        title
        metaTitle
        metaDescription
        slug
        description
        createdOn
        userId
        channelId
        status
        isActive
        coverImage
        categoriesId
        featuredEntry
        authorDetails{
          FirstName
          LastName
          Email
          MobileNo
          ProfileImagePath
        }
      }
      count
    }
  }
  `;

  export const GET_POSTS_CATEGORYLIST_QUERY = `query($hierarchylevel: Int!){
    categoriesList(hierarchyLevel: $hierarchylevel){
      categories{
        id
        categoryName
        categorySlug
        parentId
      }
    }
  }
  `;

  
export const GET_POSTS_SLUG_QUERY = `query($slug: String!){
    channelEntryDetail(slug:$slug){
        id
        title
        slug
        description
        userId
        channelId
        status
        isActive
        coverImage
        createdOn
        categoriesId
        authorDetails{
          FirstName
          LastName
          Email
          MobileNo
          ProfileImagePath
        }
      }
    }
  `