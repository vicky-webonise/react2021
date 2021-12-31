import { useState, useEffect } from "react";
import { getUsers } from "../../config/api-endpoints";
import SubmitButtonWrapped from "../shared/SubmitButton";

import styles from "./slider.module.scss";

const Slider = () => {
  const [sliderObj, setSliderObj] = useState([]);
  const [index, setIndex] = useState(0);

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setSliderObj(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    const lastIndex = sliderObj.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, sliderObj]);

  useEffect(() => {
    let sliderInt = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(sliderInt);
  }, [index]);

  return (
    <>
      <h1>Slider</h1>
      <div className="d-flex">
        <SubmitButtonWrapped
          title="Prev"
          clsName="btn btn-danger btn-sm ml-1"
          onClick={() => setIndex(index - 1)}
        />
        <SubmitButtonWrapped
          title="Next"
          clsName="btn btn-danger btn-sm ml-1"
          onClick={() => setIndex(index + 1)}
        />
      </div>
      <div className={styles.slider}>
        {sliderObj.map((slide, slideIndex) => {
          const { id, name, email } = slide;
          let position = styles.nextSlide;
          if (slideIndex === index) {
            position = styles.activeSlide;
          }
          if (
            slideIndex === index - 1 ||
            (index === 0 && slideIndex === sliderObj.length - 1)
          ) {
            position = styles.lastSlide;
          }
          return (
            <div className={`${styles.slide} ${position}`} key={id}>
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Slider;
