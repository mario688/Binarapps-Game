import { useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import Style from "./HomePage.module.scss";
import Button from "../components/UI/Button";
const HomePage = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wordsArry = [
    "hole",
    "sofa",
    "pear",
    "tiger",
    "oatmeal",
    "square",
    "nut",
    "cub",
    "shirt",
    "tub",
    "passenger",
    " cow",
  ];
  window.addEventListener("resize", () => {});
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const drawBackgournd = () => {
      context.fillStyle = "rgba(183, 183, 183, 0.239)";
      for (let i = 0; i < 80; i++) {
        const fontSize = Math.floor(Math.random() * 30) + 10;
        context.font = `${fontSize}px Comic Sans MS`;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const randomIndex = Math.floor(Math.random() * wordsArry.length);
        const word = wordsArry[randomIndex];
        context.fillText(word, x, y);
      }
    };
    drawBackgournd();
    const handleResize = () => {
      context.canvas.height = window.innerHeight;
      context.canvas.width = window.innerWidth;
      drawBackgournd();
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className={Style.homePageContainer}>
      <canvas
        width={window.innerWidth}
        height={window.innerHeight}
        ref={canvasRef}
      />
      <div className={Style.title}>Wordcloud game</div>
      <div className={Style.textContainer}>
        <ul>
          <li>Take the quiz</li>
          <li>Compare score with other players</li>
          <li>Create your own quiz</li>
        </ul>
      </div>
      <div className={Style.btnContainer}>
        <Button
          onClickHandler={() => {
            navigate("/play");
          }}
        >
          PLAY !
        </Button>
      </div>
    </div>
  );
};
export default HomePage;
