import cn from "clsx";
import { useEffect, useRef } from "react";
import useStore from "../../utils/store";
import s from "./cursor.module.scss";

const Cursor = () => {
  const cursorRef = useRef(null);

  const { mouse } = useStore();

  useEffect(() => {
    cursorRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px) scale(${mouse.scale})`;
  }, [mouse]);

  return <div ref={cursorRef} className={cn(s.cursor)}></div>;
};

export default Cursor;
