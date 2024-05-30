import HTTPClient from "./httpClient";

const useClient = (): HTTPClient => {
  const client = new HTTPClient(import.meta.env.VITE_API_URL);

  return client;
};

export default useClient;
