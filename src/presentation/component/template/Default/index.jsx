// style
import style from "./style.module.scss";

// --- component

import Header from "presentation/component/organism/Header";
import Footer from "presentation/component/organism/Footer";

// --- start default
const Default = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <div className={style.default}>{children}</div>
      <Footer />
    </>
  );
};

export default Default;
