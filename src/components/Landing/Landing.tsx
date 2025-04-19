import Starfield from "../BackGround/Starfield";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.landing}>
      <Starfield />
      <div className={style.container}>
        <h1>Hello World</h1>
        
      </div>
    </div>
  );
};

export default Landing;
