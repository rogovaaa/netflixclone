import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import Row from "../components/Row/Row";
import { requests } from "../utils/constants";

const Main: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#141414" }}>
      <NavBar isScrolled={isScrolled} />

      <Banner />

      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Uncoming" fetchUrl={requests.fetchUncoming} />
    </div>
  );
};

export default Main;
