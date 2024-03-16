export const exerciseOptions = {
  
    method: 'GET',
      headers: {
          'X-RapidAPI-Key': '164db19805msh2a8546d00f5a996p1b929bjsn5752ade4b0dc',
          'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
  
  }
  
  export const fetchData = async (url, options) => {
  
    // fetch data from the url
    const response = await fetch(url, options);
  
    // extract the data from the response (done auto with axios)
    const data = await response.json();
  
    return data;
  }
  
  //4bBrO1C1UFHJMuGU3YbxIw==Zy9TL4dWKJyixHCq