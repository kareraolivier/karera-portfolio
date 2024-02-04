import { useEffect, useState } from "react";
import { AppWrapp, MotionWrapp } from "../../wrapper";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Testimonial.scss";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const hundleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);
  const testimonial = testimonials[currentIndex];
  return (
    <div className="app__testimonial">
      <h1 className="head-text">Testimonials</h1>
      {testimonials.length != 0 && (
        <>
          <div className="app__flex app__testimonial-item">
            <img src={urlFor(testimonial.imgurl)} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p__text">{testimonial.feedback}</p>
              <div>
                <h4 className="bold__text">{testimonial.name}</h4>
                <h5 className="p__text">{testimonial.company}</h5>
              </div>
            </div>
          </div>
          <div className="app__flex app__testimonial-btns">
            <div
              className="app__flex"
              onClick={() =>
                hundleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                hundleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app__flex app__testimonial-brands">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const WrappedWrappedAbout = AppWrapp(MotionWrapp(Testimonial), "testimonials");
export default WrappedWrappedAbout;
