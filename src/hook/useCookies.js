import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { decryptData } from "../util/encrypt";

function useCookies({ redirect }) {
  const [dataCookies, setDataCookies] = useState(null);
  const [cookiesExist, setCookiesExist] = useState(false);

  useEffect(() => {
    const infoCookies = Cookies.get("accessToken");
    if (infoCookies) {
      const infoUser = decryptData(infoCookies);
      setDataCookies(infoUser);
      setCookiesExist(true);
    } else {
      setCookiesExist(false);
    }
  }, []);

  function removeCookies() {
    Cookies.remove("accessToken");
    setDataCookies(null);
    setCookiesExist(false);
    window.location.reload();
    return <Navigate to={redirect} />;
  }

  return [dataCookies, cookiesExist, removeCookies];
}

export default useCookies;
