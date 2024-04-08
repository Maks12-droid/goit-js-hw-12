import axios from 'axios';

export async function fetchImg(query, page = 1) {
  const BASE_URL = "https://pixabay.com/api/";
  const searchParams = new URLSearchParams({
    key: '22926721-5d20aa08498ffd1ff2f906542',
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: page, 
    per_page: 15 
  });

  const url = `${BASE_URL}?${searchParams}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error; 
  }
}



