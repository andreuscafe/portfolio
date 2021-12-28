import cn from "clsx";
import { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import useStore from "../../utils/store";
import s from "./marquee.module.scss";

const Marquee = ({ text = "ANDREUSCAFE", fixed = false, stopped = false }) => {
  const { scrollProgress } = useStore();
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.style.transform = `translateX(-${scrollProgress / 3}%)`;
  }, [scrollProgress]);

  return (
    <div
      className={cn(s.marquee, s.container, {
        [s.fixed]: fixed,
        [s.stopped]: stopped
      })}
    >
      <div className={s.wrapper}>
        <span className={cn(s.text)} ref={textRef}>
          {[...Array(4)].map((item, i) => {
            return <span key={i}>{text}</span>;
          })}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
