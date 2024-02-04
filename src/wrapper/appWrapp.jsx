import { SocialMedia, NavigationDots } from "../components";

const appWrapp = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@{new Date().getFullYear()} karera</p>
            <p className="p-text">All right reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default appWrapp;
