import Nav from "@/utils/ui/layout/navbar";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  if (Cookies.get("token") == null) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const moveToChannel = () => {
    router.push("/channel");
  };
  const moveToProfil = () => {
    router.push("/profil");
  };
  console.log(Cookies.get("token"));

  return (
    <div>
      <header>
        <Nav />
      </header>
      <div>
        <div className="welcoming">
          <h1>Welcome to Chat-tsik {`"${Cookies.get("username")}"`}</h1>
          <p>Getting started with ...</p>
        </div>
        <div className="container-prime">
          <div className="cookieCard" onClick={moveToProfil}>
            <p className="cookieHeading">View profile.</p>
            <p className="cookieDescription">Let people know who you are ...</p>
          </div>
          <div className="cookieCard" onClick={moveToChannel}>
            <p className="cookieHeading">Go to channel.</p>
            <p className="cookieDescription">Share your activity ...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
