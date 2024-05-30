/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import { HomeResponse, ModelResponse } from "../../types/model";

class HTTPClient {
  private readonly instance: AxiosInstance;

  public constructor(baseURL?: string) {
    if (baseURL === null || baseURL === undefined) {
      throw new Error("Invalid base URL");
    }

    this.instance = axios.create({
      baseURL,
      headers: { "Content-Type": "application/json" },
    });

    this._initializeResponseReceptor();
  }

  private readonly _initializeResponseReceptor = (): void => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  // Interceptor to instead of returning all the metadata of a response,
  // it only returns the data property
  private readonly _handleResponse = ({ data }: AxiosResponse): any => data;

  private readonly _handleError = async (error: AxiosError): Promise<any> => {
    // ONLY WHEN NOT A PRODUCTION ENV!
    console.log("Error on the httpClient: ", error.response?.data);
    return Promise.reject(error);
  };
  // ADD HERE ANY ENDPOINTS

  public getHome = async (): Promise<HomeResponse> => {
    const res: HomeResponse = await this.instance.get("/score_dummy");
    return res;
  };

  public getScore = async (image: FormData): Promise<ModelResponse> => {
    const res: ModelResponse = await this.instance.post("/score", image, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  };
}

export default HTTPClient;
