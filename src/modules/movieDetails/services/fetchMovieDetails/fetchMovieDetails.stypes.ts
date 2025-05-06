type BelongsToCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

type MovieGenres = {
  id: number;
  name: string;
};

type OriginCountry = Array<string>;

type ProductionCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type ProductionCountries = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type MovieDetailsAPIResponse = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Array<MovieGenres>;
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: OriginCountry;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<ProductionCompanies>;
  production_countries: Array<ProductionCountries>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<SpokenLanguages>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
