import { Movie } from "./Movie";

export interface MovieSearchResponse {
  Response: string;
  Search: Movie[];
  Error: string;
}
