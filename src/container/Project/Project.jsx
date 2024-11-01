import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AppWrapp, MotionWrapp } from "../../wrapper";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { client, urlFor } from "../../client";
import "./Project.scss";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProject] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "projects"]';
    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterProject(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 100 }]);

      if (item === "All") {
        setFilterProject(projects);
      } else {
        setFilterProject(
          projects.filter((project) => project.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <div className="app__projects">
      <h2 className="head-text">
        My project
        <span> Portfolio </span>
      </h2>
      <div className="app__project-filter">
        {["UI/UX", "WebDev App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div key={index} onClick={() => handleWorkFilter(item)}>
              <div
                className={`app__project-filter-item app__flex p-text ${
                  activeFilter === item ? "item-active" : " "
                }`}
              >
                {item}
              </div>
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delaychildren: 0.5 }}
        className="app__project-portfolio"
      >
        {filterProjects.map((project, index) => (
          <div className="app__project-item app__flex" key={index}>
            <div className="app__project-img app__flex">
              <img src={urlFor(project.imgUrl)} alt={project.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__project-hover app__flex"
              >
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    whileHover={{ opacity: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    whileHover={{ opacity: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__project-content app_flex">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {project.description}
              </p>
              <div className="app__project-tag app__flex">
                <p className="p-text">{project.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const WrappedProject = AppWrapp(
  MotionWrapp(Project),
  "project",
  "app__primarybg"
);
export default WrappedProject;
