import { motion } from "framer-motion";
import { AppWrapp, MotionWrapp } from "../../wrapper";
import "./About.scss";
import { useEffect, useState } from "react";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type =="abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div className="app__about">
      <h2 className="head-text">
        i am
        <span> Nkurunziza karera olivier</span>
        <br />
        <span>A fullstack developer</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const WrappedAbout = AppWrapp(MotionWrapp(About), "about", "app__whitebg");
export default WrappedAbout;
