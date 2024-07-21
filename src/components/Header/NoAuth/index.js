import { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { encryptData } from "../../../util/encrypt";
import iconoGoogle from "../../../images/GoogleIcon.webp";

export default function HeaderNoAuth() {
  const [user, setUser] = useState([]);

  const loginGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      user == [] ? console.log(user) : console.log("Empty user");
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          encryptData(res.data);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  if (Cookies.get("accessToken")) {
    return <Navigate to="/" />;
  }

  return (
    <button
      onClick={() => loginGoogle()}
      className="bg-[#F68E01] text-white px-2 py-2 rounded-lg flex flex-row"
    >
      <img
        src={iconoGoogle}
        alt="iconoGoogle"
        className="w-6 h-6 rounded-full me-2"
      />
      Iniciar session
    </button>
  );
}
