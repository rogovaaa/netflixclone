import { ReactNode, useRef } from "react";
import SwiperClass, { Navigation } from "swiper";
import { Swiper } from "swiper/react";
import "./swiper.scss";
import SliderButton from "./btn";

const breakpoints = {
  // when window width is >= 600px
  600: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 5,
    centeredSlides: true,
  },
  // when window width is >= 900px
  900: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 5,
    centeredSlides: false,
  },
  // when window width is >= 1200px
  1200: {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 5,
    centeredSlides: false,
  },

  // when window width is >= 1500px
  1500: {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 5,
    centeredSlides: false,
  },

  // when window width is >= 1800px
  1800: {
    slidesPerView: 6,
    slidesPerGroup: 6,
    spaceBetween: 5,
    centeredSlides: false,
  },
};

interface ISlider {
  children: ReactNode;
  title?: string;
}

const Slider = ({ children, title }: ISlider) => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const navigation = {
    prevEl: navigationPrevRef.current,
    nextEl: navigationNextRef.current,
  };
  const onSwiper = (swiper: SwiperClass) => {
    // @ts-ignore
    swiper.params.navigation.prevEl = navigationPrevRef.current;
    // @ts-ignore
    swiper.params.navigation.nextEl = navigationNextRef.current;

    //   Re-init navigation
    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  };
  return (
    <>
      <h2 style={{ position: "relative", top: "70px" }}>{title}</h2>
      <div className="swiper-buttons">
        <SliderButton dir="left" ref={navigationPrevRef} />
        <SliderButton dir="right" ref={navigationNextRef} />
      </div>
      <Swiper
        centeredSlides={true}
        loop={true}
        className="swiper-wrapper"
        modules={[Navigation]}
        slidesPerView={2}
        slidesPerGroup={1}
        spaceBetween={20}
        navigation={navigation}
        onSwiper={onSwiper}
        breakpoints={breakpoints}
      >
        {children}
      </Swiper>
    </>
  );
};

export default Slider;
