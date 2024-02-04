import { useState } from "react";
import { AppWrapp, MotionWrapp } from "../../wrapper";
import { images } from "../../constants";
import { client } from "../../client";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <div>
      <h2 className="head-text">Contact me</h2>
      <div className="app__contact-cards">
        <div className="app__contact-card">
          <img src={images.email} alt="email" />
          <a href="mailto:kareraolivier@gmail.com" className="p-text">
            kareraolivier@gmail.com
          </a>
        </div>
        <div className="app__contact-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+250 (785) 535 541" className="p-text">
            +250 (785) 535 541
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__contact-form app__flex">
          <div className=" app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className=" app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className=" app__flex">
            <textarea
              className="p-text"
              type="email"
              placeholder="Your message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <button className="p-text" type="button" onClick={handleSubmit}>
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      ) : (
        <div className="submitted">
          <h3 className="head-text">Thank you for getting in touch with me</h3>
        </div>
      )}
    </div>
  );
};

const WrappedContact = AppWrapp(
  MotionWrapp(Contact),
  "contact",
  "app__whitebg"
);
export default WrappedContact;
