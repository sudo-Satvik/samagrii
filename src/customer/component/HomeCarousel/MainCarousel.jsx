import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CarouselData } from "./CarouselData";

export const MainCarousel = () => {
const carousel = useRef<AliceCarousel>(null);
  const items = CarouselData.map((e) => (
    <img
      className="cursor-pointer z-10 w-full"
      src={e.image}
      alt={e.alt}
    />
  ));
  return [
    <AliceCarousel
    mouseTracking
    items={items}
    controlsStrategy="alternate"
    disableButtonsControls
    autoPlay
    autoPlayInterval={3000}
    infinite
    />,
    <nav key="nav" className="b-refs-navs">
      {items.map((item, i) => {
        return <span key={i} onClick={() => carousel?.current?.slideTo(i)} />;
      })}
    </nav>,
    // <div key="btns" className="b-refs-buttons">
    //   <button
    //     onClick={(e) => carousel?.current?.slidePrev(e)}
    //     className="bg-primary-500 p-2 rounded font-body m-4 text-white"
    //   >
    //     <ArrowBackIosIcon />
    //   </button>
    //   <button
    //     onClick={(e) => carousel?.current?.slideNext(e)}
    //     className="bg-primary-500 p-2 rounded font-body text-white"
    //   >
    //     <ArrowForwardIosIcon />
    //   </button>
    // </div>
  ];
};
