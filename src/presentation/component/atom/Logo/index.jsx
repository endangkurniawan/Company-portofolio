const Logo = (props) => {
  const { fileName, name } = props;
  return <img src={`./asset/img/logo/${fileName}`} alt={name} />;
};

export default Logo;
