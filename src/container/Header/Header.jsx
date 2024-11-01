import { motion } from "framer-motion";
import { AppWrapp, MotionWrapp } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge tag-cmp">
            <div className="badge-cmp app__flex">
              <span>👨🏿</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello i am a software developer</p>
                <h3 className="head-text">karera olivier</h3>
              </div>
            </div>
            <div className="tag-cmp app__fles">
              <p className="p-text">
                I am very passionate in programming and I am here to share my
                experience with you. I am experienced in HTML, CSS, JavaScripts,
                Nodejs, Reactjs, Express js, MongoDB, PostgresDB.
              </p>
              <p className="p-text">
                I am ready and capable of working and contribute to make world a
                better place by sharing my knowledge with you and gain more
                experience in industry that will help me to grow and improve.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[
            images.node,
            images.react,
            images.redux,
            images.graphql,
            images.sass,
          ].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          ))}
        </motion.div>
      </>
    </div>
  );
};

const WrappedHeader = AppWrapp(MotionWrapp(Header), "home");
export default WrappedHeader;
