import cn from "clsx";
import { useEffect, useRef } from "react";
import Image from "next/image";
import s from "./secondFold.module.scss";

const SecondFold = () => {
  const foldRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    foldRef.current.style.width = `${contentRef.current.offsetWidth}px`;
  }, []);

  return (
    <section ref={foldRef} className={cn(s.secondFold)}>
      <div
        ref={contentRef}
        className={cn(s.presentationWrapper)}
        data-scroll-section
      >
        <div className={cn(s.nameAndPicWrapper)}>
          <h2 className={cn(s.textWrapper)}>
            <span className={cn(s.okay)}>Okay,</span>
            <span className={cn(s.name)}>I&apos;m Andrés</span>
          </h2>
          <div className={cn(s.imageWrapper)}>
            <Image
              width={862}
              height={646}
              src="/images/fold2_1.png"
              alt="Andrés"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* <img src="/images/fold2_1.png" className={cn(s.pic)} alt="Andrés" /> */}
        </div>
      </div>
    </section>
  );
};

export default SecondFold;
