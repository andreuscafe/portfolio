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
    <section ref={foldRef} className={cn(s.secondFold)} data-scroll-section>
      <div ref={contentRef} className={cn(s.presentationWrapper)}>
        <div className={cn(s.nameAndPicWrapper)}>
          <h2 className={cn(s.nameWrapper)}>
            <span className={cn(s.okay)} data-scroll data-scroll-speed="3">
              Okay,
            </span>
            <span className={cn(s.name)} data-scroll data-scroll-speed="2">
              I&apos;m
            </span>
            <span className={cn(s.name)} data-scroll data-scroll-speed="1">
              Andrés
            </span>
          </h2>
          <div
            className={cn(s.imageWrapper)}
            data-scroll
            data-scroll-speed="-1"
          >
            <Image
              src="/images/fold2_1.png"
              alt="Andrés"
              layout="fill"
              objectFit="cover"
              priority
              data-scroll
              data-scroll-class="view"
              data-scroll-offset="20%"
              className={cn(s.image)}
            />
          </div>
        </div>

        <div className={cn(s.textWrapper)} data-scroll data-scroll-speed="1">
          <p className={cn(s.text)}>
            Your <b>creative dev</b> based on <b>Buenos Aires</b>
          </p>
          <span className={cn(s.subtext)}>La ciudad de la furia.</span>
        </div>

        <div className={cn(s.imagesWrapper)}>
          <div
            className={cn(s.image)}
            data-scroll
            data-scroll-speed="-3"
            data-scroll-delay="0.05"
            data-scroll-class="view"
            data-scroll-repeat
          >
            <Image
              priority
              src="/images/fold2_2.png"
              alt="Puente de la Mujer"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div
            className={cn(s.image)}
            data-scroll
            data-scroll-speed="-3"
            data-scroll-delay="0.04"
            data-scroll-class="view"
            data-scroll-repeat
          >
            <Image
              priority
              src="/images/fold2_3.png"
              alt="Obelisco"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div
            className={cn(s.image)}
            data-scroll
            data-scroll-speed="-3"
            data-scroll-delay="0.03"
            data-scroll-class="view"
            data-scroll-repeat
          >
            <Image
              priority
              src="/images/fold2_4.png"
              alt="Floralis Generica"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div
            className={cn(s.image)}
            data-scroll
            data-scroll-speed="-3"
            data-scroll-delay="0.02"
            data-scroll-class="view"
            data-scroll-repeat
          >
            <Image
              priority
              src="/images/fold2_5.png"
              alt="Bandera de Argentina"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </div>

        <div className={cn(s.textWrapper)} data-scroll data-scroll-speed="1">
          <p className={cn(s.text, s.small)}>
            Although I was born in <b>Tucumán</b>,
          </p>
          <span className={cn(s.subtext)}>
            a small province in the north of Argentina.
          </span>
        </div>

        <div className={cn(s.imagesWrapper, s.small)}>
          <div
            className={cn(s.image)}
            data-scroll
            data-scroll-speed="-3"
            data-scroll-delay="0.05"
            data-scroll-class="view"
            data-scroll-repeat
          >
            <Image
              priority
              src="/images/fold2_6.png"
              alt="Parque 9 de julio"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div
            className={cn(s.image)}
            data-scroll
            data-scroll-speed="-3"
            data-scroll-delay="0.04"
            data-scroll-class="view"
            data-scroll-repeat
          >
            <Image
              priority
              src="/images/fold2_7.png"
              alt="Amaicha del Valle"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div
            className={cn(s.image)}
            data-scroll
            data-scroll-speed="-3"
            data-scroll-delay="0.03"
            data-scroll-class="view"
            data-scroll-repeat
          >
            <Image
              priority
              src="/images/fold2_8.png"
              alt="Me and my friend, the donkey"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <span className={s.donkeyText}>
            Me with my donkey friend, <br /> in <b>Yerba Buena</b>.
          </span>
        </div>
      </div>
    </section>
  );
};

export default SecondFold;
