import cn from "clsx";
import { useEffect, useRef } from "react";
import Image from "next/image";
import s from "./firstFold.module.scss";
import TypeIt from "typeit-react";

const FirstFold = () => {
  const foldRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    foldRef.current.style.width = `${contentRef.current.offsetWidth}px`;
  }, []);

  return (
    <section ref={foldRef} className={cn(s.firstFold)} data-scroll-section>
      <div ref={contentRef} className={cn(s.presentationWrapper)}>
        <div className={cn(s.textPage)}>
          <div
            className={cn(s.textWrapper)}
            data-scroll
            data-scroll-speed="-0.5"
            data-scroll-delay="0.08"
            data-scroll-class="view"
          >
            <p className={cn(s.text)}>
              <TypeIt options={{ waitUntilVisible: true, speed: 80 }}>
                Look, another <strike>nerd</strike> dev with black & white stock
                pics...
              </TypeIt>
            </p>
            <span className={cn(s.subtext)}>What a surprise.</span>
          </div>
        </div>

        <div className={cn(s.imagePage)}>
          <Image
            src="/images/fold1_1.png"
            priority
            alt="AndreusCafe"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            data-scroll
            data-scroll-class="view"
            className={cn(s.image)}
          />
          {/* <img
            src="/images/fold1_1.png"
            className={cn(s.image)}
            alt="AndreusCafe"
          /> */}
        </div>

        <div className={cn(s.textPage)}>
          <div
            className={cn(s.textWrapper)}
            data-scroll
            data-scroll-speed="-0.5"
            data-scroll-delay="0.08"
            data-scroll-class="view"
          >
            <p className={cn(s.text)}>
              <TypeIt options={{ waitUntilVisible: true, speed: 80 }}>
                Horizontal scroll? Pfft!
              </TypeIt>
            </p>
            <span className={cn(s.subtext)}>
              I’ve seen that like 999999 times.
            </span>
          </div>
        </div>

        <div className={cn(s.imagePage)}>
          <Image
            src="/images/fold1_2.png"
            alt="Mountains"
            layout="fill"
            objectFit="cover"
            priority
            data-scroll
            data-scroll-class="view"
            data-scroll-offset="20%"
            className={cn(s.image)}
          />
          {/* <img
            src="/images/fold1_2.png"
            className={cn(s.image)}
            alt="Mountains"
          /> */}
        </div>

        <div className={cn(s.textPage)}>
          <div
            className={cn(s.textWrapper)}
            data-scroll
            data-scroll-speed="-0.5"
            data-scroll-delay="0.08"
            data-scroll-class="view"
          >
            <p className={cn(s.text)}>
              <TypeIt options={{ waitUntilVisible: true, speed: 80 }}>
                Man, they told me you knew your shit.
              </TypeIt>
            </p>
            <span className={cn(s.subtext)}>Mountains? Seriously?</span>
          </div>
        </div>

        <div className={cn(s.imagePage)}>
          <Image
            src="/images/fold1_3.png"
            alt="Coding"
            layout="fill"
            objectFit="cover"
            priority
            data-scroll
            data-scroll-class="view"
            data-scroll-offset="20%"
            className={cn(s.image)}
          />
          {/* <img src="/images/fold1_3.png" className={cn(s.image)} alt="Coding" /> */}
        </div>

        <div className={cn(s.textPage)}>
          <div
            className={cn(s.textWrapper)}
            data-scroll
            data-scroll-speed="-0.5"
            data-scroll-delay="0.08"
            data-scroll-class="view"
          >
            <p className={cn(s.text)}>
              <TypeIt options={{ waitUntilVisible: true, speed: 80 }}>
                Anyways. Since I’m already here
              </TypeIt>
            </p>
            <span className={cn(s.subtext)}>Wasting my time...</span>
          </div>
        </div>

        <div className={cn(s.textPage, s.giantText, s.noBorder)}>
          <div
            className={cn(s.textWrapper)}
            data-scroll
            data-scroll-class="view"
          >
            <p
              className={cn(s.text)}
              data-scroll
              data-scroll-speed="-0.5"
              data-scroll-delay="0.08"
            >
              <TypeIt options={{ waitUntilVisible: true, speed: 80 }}>
                Why don’t you tell me <br /> something about you?
              </TypeIt>
            </p>
          </div>
        </div>

        <div
          className={cn(s.transitionBlock)}
          data-scroll
          data-scroll-id="firstAndSecond"
          data-scroll-repeat
        ></div>
      </div>
    </section>
  );
};

export default FirstFold;
