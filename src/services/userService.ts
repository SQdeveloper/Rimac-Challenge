type api = 'user' | 'plans';

export const fetchData = async (api: api) => {  
    const response = await fetch(`https://rimac-front-end-challenge.netlify.app/api/${api}.json`);
    if (!response.ok) {
      throw new Error('Error fetching user data');
    }
    return response.json();
  };