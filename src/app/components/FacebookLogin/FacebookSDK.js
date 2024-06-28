export const initFacebookSdk = () => {
    return new Promise((resolve, reject) => {
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: '382265371068923',
          cookie: true,
          xfbml: true,
          version: 'v16.0',
        });
        resolve();
      };
    });
  };
  
  export const getFacebookLoginStatus = () => {
    return new Promise((resolve, reject) => {
      window.FB.getLoginStatus((response) => {
        resolve(response);
      });
    });
  };
  
  export const fbLogin = () => {
    console.log('bala');
    return new Promise((resolve, reject) => {
      window.FB.login((response) => {
        resolve(response);
      });
    });
  };