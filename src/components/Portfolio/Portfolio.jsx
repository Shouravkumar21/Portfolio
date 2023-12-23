import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/Movi-List Generators .png";
import Ecommerce from "../../img/Explore hobby.png";
import HOC from "../../img/techno.png";
import MusicApp from "../../img/Aldeno (1).png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const projects = [
    { id: "sidebar", img: Sidebar, title: "Sidebar Project", link: "https://shouravkumar21.github.io/harperdb-movies-generator/" },
    { id: "ecommerce", img: Ecommerce, title: "Ecommerce Project", link: "https://banao-assignment2.vercel.app" },
    { id: "musicapp", img: MusicApp, title: "Music App Project", link: "https://aldeno.vercel.app" },
    { id: "hoc", img: HOC, title: "HOC Project", link: "https://techie-nine.vercel.app/buy" },
  ];

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="portfolio-slider">
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            {/* Anchor tag around the image with dummy link */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.img} alt={project.title} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
