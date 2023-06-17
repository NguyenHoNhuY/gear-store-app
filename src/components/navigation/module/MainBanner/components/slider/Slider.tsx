"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { sliderImages } from "src/utils";
import "./Slider.css";

type Props = {
    className: string;
};

const Slider = (props: Props) => {
    const { className } = props;

    const [defaultSlide, setDefaultSlide] = useState<number>(0);
    const [activeSlide, setActiveSlide] = useState<number>(-1);
    const [preActiveSlide, setPreActiveSlide] = useState<number>();

    const [activeSlideAction, setActiveSlideAction] = useState<string>("");
    const [preActiveSlideAction, setPreActiveSlideAction] =
        useState<string>("");

    useEffect(() => {
        let loopSlider = setInterval(() => {
            handleControlSlide("right");
        }, 2500);
        return () => clearInterval(loopSlider);
    });

    const handleControlSlide = (position: "left" | "right"): void => {
        setDefaultSlide(-1);

        activeSlide === -1
            ? setPreActiveSlide(0)
            : setPreActiveSlide(activeSlide);

        if (position === "left") {
            activeSlide === 0 || activeSlide === -1
                ? setActiveSlide(sliderImages.length - 1)
                : setActiveSlide((preState) => preState - 1);

            setActiveSlideAction(" left__action--in");
            setPreActiveSlideAction(" left__action--out");
        } else {
            if (activeSlide === -1) {
                setActiveSlide(1);
            } else {
                activeSlide === sliderImages.length - 1
                    ? setActiveSlide(0)
                    : setActiveSlide((preState) => preState + 1);
            }

            setActiveSlideAction(" right__action--in");
            setPreActiveSlideAction(" right__action--out");
        }
    };

    const handleClickChangeSlide = (index: number) => {
        if (index === activeSlide) return;
        setPreActiveSlide(activeSlide);
        setActiveSlide(index);
        if (index < activeSlide) {
            setActiveSlideAction(" left__action--in");
            setPreActiveSlideAction(" left__action--out");
        } else {
            setActiveSlideAction(" right__action--in");
            setPreActiveSlideAction(" right__action--out");
        }
    };

    return (
        <div className={className + " " + "slider-wrap"}>
            <div className="carousel">
                <ol className="carousel__indicators">
                    {sliderImages?.map((_, index) => (
                        <li
                            key={index}
                            className={
                                "carousel__indicators--item" +
                                (activeSlide === index ? " bg-white" : "")
                            }
                            onClick={() => handleClickChangeSlide(index)}
                        />
                    ))}
                </ol>

                <div className="carousel__control">
                    <div className="carousel__control--button carousel__control--left">
                        <FaAngleLeft
                            className="carousel__control--icon"
                            onClick={() => {
                                handleControlSlide("left");
                            }}
                        />
                    </div>
                    <div className="carousel__control--button carousel__control--right">
                        <FaAngleRight
                            className="carousel__control--icon"
                            onClick={() => {
                                handleControlSlide("right");
                            }}
                        />
                    </div>
                </div>

                <div className="carousel__inner">
                    {sliderImages.map((item, index) => (
                        <div
                            key={index}
                            className={
                                "carousel__inner--item" +
                                (defaultSlide === index
                                    ? " left-0 block"
                                    : "") +
                                (activeSlide === index
                                    ? activeSlideAction + " left-0 block"
                                    : "") +
                                (preActiveSlide === index
                                    ? preActiveSlideAction
                                    : "")
                            }
                        >
                            <Link href={item.href} className="h-full w-full">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    style={{
                                        objectFit: "fill",
                                    }}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
