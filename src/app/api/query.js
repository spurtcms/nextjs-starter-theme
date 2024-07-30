
export const GET_POSTS_LIST_QUERY = `query channelEntryList($limit: Int!
  $offset: Int!,$req:RequireData,$tit:String,$categoryId: Int){
    channelEntriesList(limit:$limit,offset:$offset,
      requireData:$req,title:$tit,categoryId:$categoryId){
      channelEntriesList{
        id
        title
        slug
        description
        userId
        channelId
        status
        isActive
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
        featuredEntry
        viewCount
        categories{
          id
          categoryName
          categorySlug
          description
          imagePath
          createdOn
          createdBy
          modifiedOn
          modifiedBy
          parentId
        }
        additionalFields{
          sections{
            sectionId
            sectionName
            sectionTypeId
            createdOn
            createdBy
            modifiedOn
            modifiedBY
            orderIndex
          }
        }
        authorDetails{
          AuthorId
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

  export const GET_POSTS_CATEGORYLIST_QUERY = `query categoryList($limit: Int
    $offset: Int $categoryGroupId: Int $categoryGroupSlug: String
    $hierarchyLevel: Int $checkEntriesPresence: Int ){
      categoriesList(limit:$limit,offset:$offset,
        categoryGroupId:$categoryGroupId,
        categoryGroupSlug:$categoryGroupSlug, 
        hierarchyLevel:$hierarchyLevel,
        checkEntriesPresence:$checkEntriesPresence){
        categories{
          id
          categoryName
          categorySlug
          description
          imagePath
          createdOn
          createdBy
          modifiedOn
          modifiedBy
          parentId
        }
        count
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