import "../styles/globals.scss";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import useStore from "../utils/store";
import Cursor from "../components/Cursor";
import { debounce } from "../utils/utils";

function MyApp({ Component, pageProps }) {
  const containerRef = useRef();
  const router = useRouter();
  const [resizeCounter, setResizeCounter] = useState(0);

  const handleMouseMove = (e) => {
    useStore.setState((state) => {
      return {
        mouse: { x: e.clientX, y: e.clientY, scale: state.mouse.scale }
      };
    });
  };

  useEffect(() => {
    const updateLoco = debounce(() => {
      console.log("SE UPDATEA EL LOCO");

      return setResizeCounter((c) => c + 1);
    });

    window.addEventListener("resize", updateLoco);
  }, []);

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          scrollFromAnywhere: true,
          tablet: {
            smooth: true,
            breakpoint: 0
          },
          resetNativeScroll: true,
          reloadOnContextChange: true,
          direction: "horizontal",
          lerp: 0.02,
          gestureDirection: "both"
        }}
        watch={[
          router.asPath,
          resizeCounter
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]}
        containerRef={containerRef}
      >
        <main
          data-scroll-container
          ref={containerRef}
          onMouseMove={handleMouseMove}
        >
          <Component {...pageProps} />
        </main>
      </LocomotiveScrollProvider>
      <Cursor />
    </>
  );
}

export default MyApp;
