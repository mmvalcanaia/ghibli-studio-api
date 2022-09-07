export type Movie = {
  id: number;
  title: string;
  original_title: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: number;
  running_time: number;
  rt_score: number;
  people: string[];
};

export type People = {
  id: string;
  name: string;
  age: string;
  films: Movie[];
};

export type YearFilterOption = {
  value: number;
  label: string;
};
