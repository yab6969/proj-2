const API_URL = "http://localhost:1337/api";

export async function getBoards() {
  const res = await fetch(`${API_URL}/boards`);
  if (!res.ok) throw new Error();
  return res.json();
}