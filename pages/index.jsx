import clsx from "clsx";
import Head from "next/head";
import { useEffect } from "react";
import FirstFold from "../components/FirstFold";
import Marquee from "../components/Marquee";
import s from "../styles/Home.module.scss";

export default function Home() {
  useEffect(() => {
    let scroll = {};
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        mobile: {
          smooth: true
        },
        tablet: {
          breakpoint: 0,
          smooth: true
        },
        resetNativeScroll: true,
        reloadOnContextChange: true,
        direction: "horizontal",
        lerp: 0.1
      });
    });

    setTimeout(() => {
      scroll.update();
    }, 600);

    // `useEffect`'s cleanup phase
    return () => scroll.destroy();
  });

  return (
    <div className={s.home}>
      <Head>
        <title>AndreusCafe</title>
        <meta name="description" content="AndreusCafe portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
        <Marquee text="andreuscafe" fixed />
        <section className={clsx(s.foldsWrapper)}>
          <div className={clsx(s.scrollContainer)} data-scroll-container>
            <FirstFold />
          </div>
        </section>
      </main>
    </div>
  );
}
