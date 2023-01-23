import { useEffect, useState } from "react";
import { Card } from "./Card";
import img1 from "../styles/001.png";
import img2 from "../styles/005.png";
import img3 from "../styles/010.png";
import img4 from "../styles/012.png";
import img5 from "../styles/023.png";
import img6 from "../styles/039.png";
console.log(img1);

const CardContainer = ({ score, highScore, handleGameLogic }) => {
  const [stack, setStack] = useState([]);

  const images = [
    { src: img1, title: "Bulbasaur", id: "id12", bgcolor: "#B0E4CE" },
    { src: img2, title: "Charmeleon", id: "id22", bgcolor: "#EBD3B6" },
    { src: img3, title: "Caterpie", id: "id333", bgcolor: "#9BE689" },
    { src: img4, title: "Butterfree", id: "id235", bgcolor: "#F9F9F9" },
    { src: img5, title: "Ekans", id: "32kjd", bgcolor: "#D5B9D2" },
    { src: img6, title: "Jigglypuff", id: "kkd", bgcolor: "#F3EEF4" },
  ];

  const [arr, setArr] = useState(images);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  useEffect(() => {
    const RandomizeArr = () => {
      let newArr = shuffle(arr);
      setArr(newArr);
    };

    const squares = document.querySelectorAll(".square");
    squares.forEach((sq) => {
      sq.addEventListener("click", RandomizeArr);
    });

    return () => {
      squares.forEach((sq) => {
        sq.removeEventListener("click", RandomizeArr);
      });
    };
  }, [score, highScore]);

  return (
    <>
      <div className="card-container">
        {arr.map((i) => {
          return (
            <Card
              key={i.id}
              title={i.title}
              src={i.src}
              bgcolor={i.bgcolor}
              handleGameLogic={handleGameLogic}
            />
          );
        })}
      </div>
    </>
  );
};

export { CardContainer };
