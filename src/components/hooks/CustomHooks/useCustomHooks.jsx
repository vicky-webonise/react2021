import { useEffect, useState } from "react";

const useDocTitle = (count) => {
  useEffect(() => {
    if (count >= 1) {
      document.title = `(${count}) Count`;
    } else {
      document.title = `Count`;
    }
    console.log("hi useEffect a");
  }, [count]);
}

const useWindowWidth = (value) => {
  // cleanup function
  useEffect(() => {
    console.log("add event");
    window.addEventListener("resize", () => {
      value = window.innerWidth;
    });
    return () => {
      console.log("remove event");
      window.removeEventListener("resize", () => {
        value = window.innerWidth;
      });
    };
  });
};

export { useDocTitle, useWindowWidth };

