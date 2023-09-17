// --- component

import Header from "presentation/component/organism/Header";
import Footer from "presentation/component/organism/Footer";

// --- start default
const Default = (props) => {
  const { subscription = true, children } = props;

  return (
    <>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </>
  );
};

export default Default;
