import useFetch from "../../hook/useFetch";
import ImgDefault from "../../images/imgDefault.png";

const BoxComment = ({ comment }) => {
  return (
    <div className="border-b-2 border-gray-300 my-8 ">
      <div className="flex flex-row items-start ">
        <div>
          <img
            src={comment.owner.picture || ImgDefault}
            alt="Profile"
            className="me-2 max-w-12 rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <div>
            <span>{comment.owner.firstName}</span>
            <span className="ms-2">{comment.owner.lastName}</span>
          </div>
          <div>
            {" "}
            <span className="text-sm">
              {comment.publishDate.substring(0, 10) || 0}
            </span>
          </div>
        </div>
      </div>
      <div className="ms-4 my-8 pb-2">
        <p>{comment.message}</p>
      </div>
    </div>
  );
};

export default function InfoPost({ post }) {
  const [data, loading, error] = useFetch(
    `https://dummyapi.io/data/v1/post/${post.id}/comment`
  );

  return (
    <>
      {data && (
        <div>
          <div className="object-cover">
            <img
              src={post.image || ImgDefault}
              alt="Post"
              className="w-full max-h-[70vh] object-cover"
            />
          </div>
          <div className="my-4">
            <span className="text-sm text-gray-500">
              {post.publishDate.replace("T", " / ").substring(0, 21) || 0}
            </span>
          </div>
          <div className="my-8">
            <h2 className="text-4xl font-bold">Titutlo</h2>
          </div>
          <div className="my-24">
            <h2>{post.text}</h2>
          </div>
          <div>
            <div className="font-bold">
              <h3>Comentarios:</h3>
            </div>
            <div className="my-8">
              {data?.data?.length != 0 ? (
                data.data.map((comment, index) => (
                  <BoxComment key={index} comment={comment} />
                ))
              ) : (
                <div className="my-8 underline">
                  <p>No hay comentarios</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
