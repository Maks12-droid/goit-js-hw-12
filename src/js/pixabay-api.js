let currentPage = 1;

export function fetchImg(query, page) {
  const BASE_URL = "https://pixabay.com/api/";
  const searchParams = new URLSearchParams({
    key: '22926721-5d20aa08498ffd1ff2f906542',
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: page || currentPage
  });
  const url = `${BASE_URL}?${searchParams}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      currentPage++;
      return data;
    });
}

