import clsx from "clsx";
import Head from "next/head";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Marquee from "../components/Marquee";
import FirstFold from "../components/FirstFold";
import SecondFold from "../components/SecondFold";
import s from "../styles/Home.module.scss";
import { useEffect } from "react";
import useStore from "../utils/store";

export default function Home() {
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", (args) => {
        const { limit, scroll } = args;
        const progress = (scroll.x / limit.x) * 100;

        useStore.setState({ scrollProgress: progress });

        // Get all current elements : args.currentElements
        if (typeof args.currentElements["firstAndSecond"] === "object") {
          let progress = args.currentElements["firstAndSecond"].progress;

          console.log(progress);

          if (progress > 0.5) {
            document.documentElement.style.setProperty("--bg", "var(--black)");
            document.documentElement.style.setProperty("--fg", "var(--white)");
          } else {
            document.documentElement.style.setProperty("--bg", "var(--white)");
            document.documentElement.style.setProperty("--fg", "var(--black)");
          }
        }
      });
    }
  }, [scroll]);

  return (
    <div className={s.home}>
      <Head>
        <title>AndreusCafe</title>
        <meta name="description" content="AndreusCafe portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
        <Marquee text="andreuscafe" fixed stopped />
        <section className={clsx(s.foldsWrapper)}>
          <div className={clsx(s.scrollContainer)}>
            <FirstFold />
            <SecondFold scroll={scroll} />
          </div>
        </section>
      </main>
    </div>
  );
}
