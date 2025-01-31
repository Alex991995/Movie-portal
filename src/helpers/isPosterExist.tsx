import { ISingleMovie } from "src/types";

export function isPosterExist(data:ISingleMovie | undefined) {

  const isPoster = /https/g.test(data?.Poster || '');
  return isPoster ? <img className="h-full object-contain" src={data?.Poster} alt="" /> : <div>No poster</div>;
}

