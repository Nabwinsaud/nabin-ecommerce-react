import FetchData from "@pages/anime/FetchData";
import FetchWithQuery from "@pages/anime/FetchWithQuery";

export default function HomePage() {
  return (
    <div>
      HomePage
      <FetchWithQuery />
      {/* <FetchData /> */}
    </div>
  );
}
