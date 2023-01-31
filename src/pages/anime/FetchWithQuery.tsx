import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IAnime } from "./FetchData";
const options = {
  "X-RapidAPI-Key": "61d70cc4damsh24b7a18496e8666p188bf2jsn15eb42b6ea7b",
  "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
};

let url = `https://gogoanime2.p.rapidapi.com/recent-release?type=1&page=1}`;
const getDataWithQuery = async (): Promise<IAnime[]> => {
  const respone = await axios.get(url, { headers: options });
  return respone.data;
};

export default function FetchWithQuery() {
  // query, mutations
  const { data, error, isLoading, isFetched, isFetching, isInitialLoading } =
    useQuery({ queryKey: ["anime"], queryFn: getDataWithQuery });
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      {data?.map((a) => (
        <p key={a.animeId}>{a.animeTitle}</p>
      ))}
    </div>
  );
}
