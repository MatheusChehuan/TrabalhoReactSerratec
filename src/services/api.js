//precisei porque o genius só aceita com autenticação via token
const API_URL = "https://api.genius.com";
const TOKEN = "I14qVyQRS2Y-F7FpIIMbbpxL8ZqybuTsr94lolvmwzdmE-4ECQzlSyoA8TGGfhN2";

export async function buscarMusicas(termo) {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const res = await fetch(`${proxy}${API_URL}/search?q=${encodeURIComponent(termo)}`, {
    headers: {Authorization: `Bearer ${TOKEN}`,},
  });

  if (!res.ok) throw new Error("Erro ao buscar músicas");
  const data = await res.json();
  return data.response.hits;
}
