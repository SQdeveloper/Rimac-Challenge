export const fetchUserData = async () => {
    const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/user.json');
    if (!response.ok) {
      throw new Error('Error fetching user data');
    }
    return response.json();
  };