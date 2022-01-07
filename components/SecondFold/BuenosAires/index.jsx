const BuenosAires = () => {
  return (
    <>
      <div
        className={cn(s.textWrapper, "pointerEventsNone")}
        data-scroll
        data-scroll-speed="2"
      >
        <p className={cn(s.text)}>
          Your <b>creative dev</b> based in <br />
          <span className={cn(s.giantText, "exclusion")}>Buenos Aires</span>
        </p>
        <span className={cn(s.subtext)}>La ciudad de la furia.</span>
      </div>

      <div className={cn(s.imagesWrapper)} data-scroll data-scroll-speed="-1">
        <div
          className={cn(s.image)}
          data-scroll
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
    </>
  );
};

export default BuenosAires;
