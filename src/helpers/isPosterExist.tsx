import { ISingleMovie } from "src/types";

export function isPosterExist(data:ISingleMovie, sizePx:string) {
  const isPoster = /https/g.test(data?.Poster || '');
  return isPoster ? <img className={`w-[${sizePx}]`} src={data?.Poster} alt="" /> : <div>No poster</div>;
}

