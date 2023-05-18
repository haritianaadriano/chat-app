import { useRouter } from "next/router";
import React, { MouseEvent } from "react";

const Nav: React.FC = () => {
  const router = useRouter();

  const home = () => router.push("/landing");
  const channel = () => router.push("/landing/channel");
  const chat = () => router.push("/landing/chat");
  const profil = () => router.push("/landing/profil");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={home}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={channel}>
                Channel
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={chat}>
                Chat
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={profil}>
                Profil
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
