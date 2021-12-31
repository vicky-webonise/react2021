import { useEffect, useState } from "react";

const useElementSize = (myRef, ...changeTrigger) => {
  console.log(...changeTrigger);
  console.log(myRef);
  const [elementSize, setElementSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (myRef.current) {
      const handleElementResize = () => {
        setElementSize({
          width: myRef.current.offsetWidth,
          height: myRef.current.offsetHeight,
        });
      };

      myRef.current &&
        myRef.current.addEventListener("resize", handleElementResize);
      handleElementResize();

      return () => {
        window.removeEventListener("resize", handleElementResize);
      };
    }
  }, changeTrigger);

  return elementSize;
};

export default useElementSize;
