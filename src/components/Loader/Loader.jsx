import { Sloader, Sspan } from "./Loader.styled";

const Loader = () => {
  return (
    <Sloader>
      <Sspan></Sspan>
      <Sspan $delay="0.15s"></Sspan>
      <Sspan $delay="0.3s"></Sspan>
      <Sspan $delay="0.45s"></Sspan>
    </Sloader>
  );
};

export default Loader;
