import { useRef, useState } from "react";
import useWindowSize from "./useWindowSize";
import useElementSize from "./useElementSize";

const CustomHook = () => {
  const size = useWindowSize();
  const componentRef = useRef();
  const [hide, setHide] = useState(true);
  const { width, height } = useElementSize(componentRef, hide);
  console.log(componentRef);
  return (
    <main className="App">
      <header className="App-header" ref={componentRef}>
        {hide && <h1>Header</h1>}
      </header>
      <button
        onClick={() => {
          setHide((prevState) => !prevState);
        }}
      >
        Test
      </button>
      <section className="courseTakingContainer hasLeftRail hasRightRail">
        <aside className="leftSideWrap">left rail</aside>
        <div className="mainWrap">
          main rail {size.width}px / {size.height}px main rail
        </div>
        <aside className="rightSideWrap" style={{ height: size.height }}>
          right rail
          <p>width: {width}px</p>
          <p>height: {height}px</p>
        </aside>
      </section>
    </main>
  );
};

export default CustomHook;
