export interface IDataAllMovies {
  Search: Search[];
  totalResults: string;
  Response: string;
}

export interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IDataError {
  status: number;
  data: Error;
}

export interface Error {
  Response: string;
  Error: string;
}

export interface IParams {
  debouncedValue: string;
  typeValue: string;
  yearValue:string;
  page:string
}


export interface ISingleMovie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
  user:string
}

export interface Rating {
  Source: string
  Value: string
}

