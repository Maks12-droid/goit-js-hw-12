export async function fetchImg(query, page = 1) {
  const BASE_URL = "https://pixabay.com/api/";
  const searchParams = new URLSearchParams({
    key: '22926721-5d20aa08498ffd1ff2f906542',
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: page // Додано параметр сторінки
  });
  const url = `${BASE_URL}?${searchParams}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

