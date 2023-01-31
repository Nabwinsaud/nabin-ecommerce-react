// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://gogoanime2.p.rapidapi.com/recent-release',
//   params: {type: '1', page: '1'},
//   headers: {
//     'X-RapidAPI-Key': '61d70cc4damsh24b7a18496e8666p188bf2jsn15eb42b6ea7b',
//     'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
const options = {
  "X-RapidAPI-Key": "61d70cc4damsh24b7a18496e8666p188bf2jsn15eb42b6ea7b",
  "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
};

export interface IAnime {
  animeId: string;
  animeImg: string;
  animeTitle: string;
  animeUrl: string;
  episodeId: string;
  subOrDub: string;
}
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function FetchData() {
  const [data, setData] = useState<IAnime[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  console.log("data is", data);
  let url = `https://gogoanime2.p.rapidapi.com/recent-release?type=1&page=${page}}`;
  const getData = async (): Promise<void> => {
    setIsloading(true);
    const respone = await axios.get(url, { headers: options });
    setIsloading(false);
    setData(respone.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((anime) => (
        <div key={anime.animeId}>
          <p>{anime.animeTitle}</p>
        </div>
      ))}
    </div>
  );
}
