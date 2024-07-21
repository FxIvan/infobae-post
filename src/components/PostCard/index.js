import { Link } from "react-router-dom";
import ImgDefault from "../../images/imgDefault.png";
import useCookies from "../../hook/useCookies";
import ModalNotAllowed from "../ModalNotAllowed";
import { useState } from "react";

const Tags = ({ tags }) => {
  return (
    <div className="flex flex-row">
      {tags.map((tag, index) => (
        <span
          className="bg-gray-200 rounded-full px-2 py-1 text-sm me-2"
          key={index}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default function PostCard({ post }) {
  const [data, cookiesExiste, removeCookies] = useCookies({
    redirect: "/login",
  });

  const [open, setOpen] = useState(false);

  const redirectToPost = (id, e) => {
    e.preventDefault();

    if (!cookiesExiste) return setOpen(true);
    window.location.href = `/post/${id}`;
    setOpen(false);
  };

  return (
    <div className="my-6 flex w-full sm:w-2/4 xl:w-1/3 justify-center">
      <ModalNotAllowed open={open} setOpen={setOpen} />
      <button
        onClick={(e) => redirectToPost(post.id, e)}
        className="cursor-pointer"
      >
        <div>
          <div className="flex flex-row">
            <div className="w-auto me-4">
              <img
                src={post.owner.picture || ImgDefault}
                alt="Profile"
                className="max-w-5 rounded-full"
              />
            </div>
            <div className="text-sm truncate">
              <span>{post.owner.firstName}</span>
              <span className="ms-2">{post.owner.lastName}</span>
            </div>
          </div>
          <div className="my-4">
            <img
              src={post.image || ImgDefault}
              alt="Post"
              className="w-60 h-60 object-cover rounded-md"
            />{" "}
          </div>
          <div className="my-4 h-12 line-clamp-2 text-wrap max-w-60">
            <span>{post.text}</span>
          </div>
          <div>
            <Tags tags={post.tags} />
          </div>
        </div>
      </button>
    </div>
  );
}
