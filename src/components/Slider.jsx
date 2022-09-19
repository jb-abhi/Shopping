import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState, useRef, useEffect } from "react";
import classes from "./Slider.module.css";
import styled from "styled-components";
import { sliderItems } from "../data";

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Slide = styled.div`
  width: 99vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color:#${(props)=>props.bg};
`


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const ref = useRef(null);

  const clickHandler = (direction) => {
    if (direction === "LEFT") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    ref.current.style.transform = `translateX(${slideIndex * -99}vw)`;
    ref.current.style.transition = `all 1.5s ease`;
    console.log(slideIndex);
  }, [slideIndex]);


  return (
    <div className={classes.container}>
      <Arrow direction="left" onClick={() => clickHandler("LEFT")}>
        <ArrowLeftOutlined />
      </Arrow>
      <div ref={ref} className={classes.wrapper}>
        {sliderItems.map((el) => {
          return (
            <Slide
              key={el.id}
              bg = {el.bg}
            >
              <div className={classes.imgContainer}>
                <img className={classes.image} src={el.img} alt="img-1"></img>
              </div>
              <div className={classes.infoContainer}>
                <h1 className={classes.title}>{el.title}</h1>
                <p className={classes.desc}>{el.desc}</p>
                <button className={classes.button}>SHOP NOW</button>
              </div>
            </Slide>
          );
        })}
      </div>
      <Arrow direction="right" onClick={() => clickHandler("RIGHT")}>
        <ArrowRightOutlined />
      </Arrow>
    </div>
  );
};

export default Slider;

// switch (direction) {
//   case "LEFT":
//     setSlideIndex(slideIndex>0 ? slideIndex-1 : 2);
//     console.log(slideIndex);
//     ref.current.style.transform = `translateX(${slideIndex* -100}vw)`
//     break;
//   case "RIGHT":
//     setSlideIndex(slideIndex<2 ?slideIndex+1:0);
//     console.log(slideIndex);
//     ref.current.style.transform = `translateX(${slideIndex* 100}vw)`
//     break;
//   default:
//   return;
// }
