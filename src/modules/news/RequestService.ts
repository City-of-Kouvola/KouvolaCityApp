export const fetchNews = async (url: string, page: number) => {
  try {
    const fullUrl = `${url}&page=${page}`;
    const response = await fetch(fullUrl);

    if (!response.ok) return [null, 'Invalid response'];
    const data = await response.json();

    return [data, null];
  } catch (error) {
    return [null, error];
  }
};
