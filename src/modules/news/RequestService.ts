export const fetchNews = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) return [null, 'Invalid response'];
    const data = await response.json();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};
