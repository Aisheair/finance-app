import { useEffect } from "react";
import style from "./Starfield.module.css";

const Starfield = () => {
  useEffect(() => {
    (window as any).particlesJS.load('particles-js', './particles.json');
  }, []);

  return <div className={style.Startfield} id="particles-js" style={{background: "black"}} >
  
  </div>;
};

export default Starfield;
