import { BsTwitter, BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const socialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a target="blank" href="https://github.com/kareraolivier">
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          target="blank"
          href="https://www.linkedin.com/in/karera-olivier-69a7971bb/"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a target="blank" href="https://twitter.com/KareraOlivier">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a target="blank" href="https://www.instagram.com/kareraoliviersd/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default socialMedia;
