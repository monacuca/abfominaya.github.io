"use client"
import React, { MutableRefObject } from "react"
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


import "./styles.css";
import { CarrouselImage } from "@/interfaces/carrousel_image";

type Props = {
  carrouselImages: CarrouselImage[];
};


function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main : any) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export function ImageCarrousel ({ carrouselImages }: Props) {
  const [loaded, setLoaded] = React.useState<boolean[]>([])
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    animationEnded(s) {
      setCurrentSlide(s.track.details.rel)
    },
    loop: true,
    initial: 0,
  })

  React.useEffect(() => {
    const new_loaded = [...loaded]
    new_loaded[currentSlide] = true
    setLoaded(new_loaded)
  }, [currentSlide])  

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 10,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <div className="carrousal-container">
    <div ref={sliderRef} className="keen-slider">
      {carrouselImages.map((carrouselImage, index) => (
        <div key={index} className="keen-slider__slide lazy__slide">
          <img src={loaded[index] ? carrouselImage.url : ""} />
        </div>
      ))}
    </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
      {carrouselImages.map((carrouselImage, index) => (
        <div key={index} className="keen-slider__slide">
          <img src={carrouselImage.url} />
        </div>
      ))}
    </div>
    </div>
  )
}

export const Carrousel = ({ carrouselImages }: Props) => {
  return (
    <>
      <ImageCarrousel carrouselImages={carrouselImages}/>
    </>
  );
}