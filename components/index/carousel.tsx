import { useState, useEffect } from "react";
import { config } from "react-spring";
import dynamic from "next/dynamic";

export default function CarouselSection(props: any) {
  const table = props.cards.map((element: any, index: number) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState<number | null>(0);
  const [cards] = useState(table);
  const [showNavigation, setShowNavigation] = useState(true);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  const Carousel: any = dynamic(() => import("react-spring-3d-carousel"), {
    loading: () => <div>loading...</div>,
    ssr: false,
  });

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={config.gentle}
      />
    </div>
  );
}
