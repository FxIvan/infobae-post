import { useState } from "react";
import PostCard from "../components/PostCard";
import useFetch from "../hook/useFetch";
import collectTags from "../util/collectTags";
import FilterTag from "../components/FilterTag";

export default function MainScreen() {
  const [data, loading, error] = useFetch("https://dummyapi.io/data/v1/post");
  const [dataFilterTag, setDataFilterTag] = useState([]);
  if (!data) return <p>Loading...</p>;
  const allTags = collectTags(data?.data);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center border-b-2 border-gray-300 pb-4">
        <h3 className="me-5">Filtros:</h3>
        <FilterTag
          allTags={allTags}
          data={data.data}
          setDataFilterTag={setDataFilterTag}
        />
      </div>
      <div className="flex flex-wrap">
        {dataFilterTag.length > 0
          ? dataFilterTag.map((post) => <PostCard key={post.id} post={post} />)
          : data.data.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  );
}
