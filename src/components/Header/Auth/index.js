import { googleLogout } from "@react-oauth/google";
import useCookies from "../../../hook/useCookies";
export default function HeaderAuth({ profile, setProfile }) {
  const [dataCookies, cookiesExiste, removeCookies] = useCookies({
    redirect: "/login",
  });

  const logOut = (e) => {
    e.preventDefault();
    googleLogout();
    setProfile([]);
    removeCookies();
  };
  return (
    <button
      onClick={(e) => logOut(e)}
      className="bg-[#F68E01] text-white px-2 py-2 rounded-lg"
    >
      Cerrar session
    </button>
  );
}
