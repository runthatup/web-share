import axios, { AxiosInstance } from "axios";
import config from "../config";

export class BaseService {
  protected client: AxiosInstance;

  constructor(baseUrl?: string) {
    this.client = axios.create({
      baseURL: baseUrl ?? config.apiUrl,
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
    });
  }
}