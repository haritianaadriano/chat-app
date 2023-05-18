import { useRouter } from "next/router";
import React, { MouseEvent } from "react";

const Nav: React.FC = () => {
  const router = useRouter();

  const home = () => router.push("/landing");
  const channel = () => router.push("/landing/channel");
  const chat = () => router.push("/chat");

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    if (href === "#") {
      return;
    }

    if (href === "/landing") {
      home();
    } else if (href === "/landing/channel") {
      channel();
    } else if (href === "/landing/chat") {
      chat();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleLinkClick}>
                Channel
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleLinkClick}>
                Chat
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
