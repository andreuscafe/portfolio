import "../styles/globals.scss";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const containerRef = useRef();
  const router = useRouter();

  return (
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
        router.asPath
        //..all the dependencies you want to watch to update the scroll.
        //  Basicaly, you would want to watch page/location changes
        //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
      ]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Component {...pageProps} />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default MyApp;
