import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import InfoPost from "../components/InfoPost";
import Loading from "../components/Loading";

export default function PostIndividualScreen() {
  const { id } = useParams();

  const [data, loading, error] = useFetch(
    `https://dummyapi.io/data/v1/post/${id}`
  );

  if (loading) return <Loading />;

  return (
    <div className="container mx-auto my-12">
      {data && <InfoPost post={data} />}
    </div>
  );
}
