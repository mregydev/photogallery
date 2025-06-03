


export const apiFetch = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> => {
  const res = await fetch(`${import.meta.env.VITE_PEXELS_API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: import.meta.env.VITE_PEXELS_API_KEY ?? '',
    },
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`API error (${res.status}): ${errorBody}`);
  }

  return res;
};
