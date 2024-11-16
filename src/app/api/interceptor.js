export const apiinstance=async(url,options)=>{
    const headers = {
        'Content-Type': 'application/json',
        "Authorization":process.env.NEXT_PUBLIC_SPURTCMS_NEXTJS_STARTER_THEME_TOKEN,
        // "ApiKey":process.env.NEXT_PUBLIC_SPURTCMS_NEXTJS_STARTER_APIKEY
        "ApiKey":process.env.next_public_spurtcms_nextjs_starter_apikey
      }
    
      const config = {
        method: options.method || 'GET',
        headers,
        ...options,
      }
    
      if (config.method === 'GET') {
        delete config.body
      } else {
        config.body = config.body
      }

  
        
      const res = await fetch(`${process.env.NEXT_PUBLIC_SPURTCMS_NEXTJS_STARTER_THEME_BASEURL}${url}`,config);
      if(res.ok){
            return await res.json();
        }else{
         
        }
     
}