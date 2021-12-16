import cn from "clsx";
import Image from "next/image";
import { useEffect, useRef } from "react";
import s from "./firstFold.module.scss";

const FirstFold = () => {
  const foldRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    console.log(contentRef.current.offsetWidth);
    foldRef.current.style.width = `${contentRef.current.offsetWidth}px`;
  }, []);

  return (
    <section ref={foldRef} className={cn(s.firstFold)} data-scroll-section>
      <div ref={contentRef} className={cn(s.presentationWrapper)}>
        <div className={cn(s.textPage)}>
          <div
            className={cn(s.textWrapper)}
            data-scroll
            data-scroll-speed="-0.8"
          >
            <p className={cn(s.text)}>
              Look, another <strike>cool</strike> dev with black & white stock
              pics...
            </p>
            <span className={cn(s.subtext)}>What a surprise.</span>
          </div>
        </div>

        <div className={cn(s.imagePage)}>
          <img src="/images/fold1_1.png" className={cn(s.image)} />
        </div>

        <div className={cn(s.textPage)}>
          <div
            className={cn(s.textWrapper)}
            data-scroll
            data-scroll-speed="-0.8"
          >
            <p className={cn(s.text)}>Horizontal scroll? Pfft!</p>
            <span className={cn(s.subtext)}>
              I’ve seen that like 999999 times.
            </span>
          </div>
        </div>

        <div className={cn(s.imagePage)}>
          <img src="/images/fold1_2.png" className={cn(s.image)} />
        </div>

        <div className={cn(s.textPage)}>
          <div
            className={cn(s.textWrapper)}
            data-scroll
            data-scroll-speed="-0.8"
          >
            <p className={cn(s.text)}>Man, they told me you knew your shit.</p>
            <span className={cn(s.subtext)}>Mountains? Seriously?</span>
          </div>
        </div>

        <div className={cn(s.imagePage)}>
          <img src="/images/fold1_3.png" className={cn(s.image)} />
        </div>

        <div className={cn(s.textPage)}>
          <div
            className={cn(s.textWrapper)}
            data-scroll
            data-scroll-speed="-0.8"
          >
            <p className={cn(s.text)}>Anyways. Since I’m already here</p>
            <span className={cn(s.subtext)}>Wasting my time...</span>
          </div>
        </div>

        <div className={cn(s.textPage, s.giantText)}>
          <div
            className={cn(s.textWrapper)}
            data-scroll
            data-scroll-speed="-0.8"
          >
            <p className={cn(s.text)}>
              Why don’t you tell me <br /> something about you?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstFold;