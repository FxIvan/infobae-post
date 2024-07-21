import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { decryptData } from "../../util/encrypt";
import HeaderAuth from "../Header/Auth";
import HeaderNoAuth from "../Header/NoAuth";

export const Layout = ({ children }) => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const infoCookies = Cookies.get("accessToken");
    if (!infoCookies) return;
    const infoUser = decryptData(infoCookies);
    setProfile(infoUser);
  }, []);

  return (
    <div className="">
      <header className="w-full flex justify-between px-4 py-8 items-center">
        <div className="landing-icon">
          <h1
            className="text-[#F68E01] font-bold text-4xl cusour-pointer"
            onClick={() => (window.location.href = "/")}
          >
            INFO | <span className="font-bold text-black">POST</span>
          </h1>
        </div>
        {Cookies.get("accessToken") ? (
          <HeaderAuth profile={profile} setProfile={setProfile} />
        ) : (
          <HeaderNoAuth />
        )}
      </header>
      {children}
      <footer className="text-center"></footer>
    </div>
  );
};
