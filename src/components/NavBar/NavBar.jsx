import { useState } from "react";
import { images } from "../../constants";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./NavBar.scss";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar" id="Home">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "project", "skills", "testimonials", "contact"].map(
          (item) => (
            <li key={`link-${item}`} className="app__flex p-text">
              <a href={`#${item}`}>{item}</a>
              <div />
            </li>
          )
        )}
      </ul>

      <div className="app__navbar-menu">
        <HiMenu onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "project",
                "skills",
                "testimonials",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
