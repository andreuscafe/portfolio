import clsx from "clsx";
import Head from "next/head";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Marquee from "../components/Marquee";
import FirstFold from "../components/FirstFold";
import SecondFold from "../components/SecondFold";
import s from "../styles/Home.module.scss";
import { useEffect } from "react";
import useStore from "../utils/store";
import { lerpColor } from "../utils/utils";

export default function Home() {
  const { scroll: loco } = useLocomotiveScroll();

  useEffect(() => {
    if (loco) {
      setTimeout(() => {
        loco.update();
      }, 1000);

      loco.on("scroll", (args) => {
        const { limit, scroll } = args;
        const progress = (scroll.x / limit.x) * 100;
        const preDelta = (args.delta.x - args.scroll.x) / 100;
        const delta = preDelta > 10 ? 10 : preDelta;

        useStore.setState({ scrollProgress: progress, delta });

        // Get all current elements : args.currentElements
        if (typeof args.currentElements["firstAndSecond"] === "object") {
          let progress = args.currentElements["firstAndSecond"].progress;

          if (progress > 0.5) {
            if (!useStore.getState().isDark) {
              useStore.setState({ isDark: true });

              document.documentElement.style.setProperty(
                "--bg",
                "var(--black)"
              );
              document.documentElement.style.setProperty(
                "--fg",
                "var(--white)"
              );
            }
          } else {
            if (useStore.getState().isDark) {
              useStore.setState({ isDark: false });

              document.documentElement.style.setProperty(
                "--bg",
                "var(--white)"
              );
              document.documentElement.style.setProperty(
                "--fg",
                "var(--black)"
              );
            }
          }
        }
      });
    }
  }, [loco]);

  return (
    <div className={s.home}>
      <Head>
        <title>AndreusCafe</title>
        <meta name="description" content="AndreusCafe portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
        <Marquee text="andreuscafe•" stopped />
        <section className={clsx(s.foldsWrapper)}>
          <div className={clsx(s.scrollContainer)}>
            <FirstFold />
            <SecondFold />
          </div>
        </section>
      </main>
    </div>
  );
}
