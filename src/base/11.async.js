// async

export const getImage = async () => {
    // return "https://asdfsdfsafasdf.com";
 
   try {
      const apiKey = "nUDrsixtSc5jOEuCN5e1EzZrzEeXdmAw";
      const response = await fetch(
         `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
      );
      const { data } = await response.json();
      const { url } = data.images.original;
        
      return url;
   } catch (error) {
      return 'No existe';

   }
 };
 
 getImage();
 
 