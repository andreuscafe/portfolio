import cn from "clsx";
import s from "./marquee.module.scss";

const Marquee = ({ text = "ANDREUSCAFE", fixed = false }) => {
  return (
    <div className={cn(s.marquee, s.container, { [s.fixed]: fixed })}>
      <div className={s.wrapper}>
        {[...Array(4)].map((item, i) => {
          return (
            <span className={cn(s.text)} key={i}>
              {text}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;
