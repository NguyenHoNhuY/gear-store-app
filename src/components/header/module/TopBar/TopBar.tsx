"use client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FaFacebook, FaHandsHelping, FaYoutube } from "react-icons/fa";

type Props = {};

const TopBar = (props: Props) => {
    const [y, setY] = useState<number>();
    const [displayClass, setDisplayClass] = useState<string>("");

    useEffect(() => {
        if (window.scrollY) setY(window.scrollY);
    }, []);

    const handleNavigation = useCallback(
        (e: Event) => {
            if (y && y < window.scrollY) {
                setDisplayClass("mt-[-41px]");
            } else if (window.scrollY === 0) {
                setDisplayClass("");
            }
            setY(window.scrollY);
        },
        [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return (
        <div
            className={
                "container relative top-0 mx-auto flex items-center justify-center pt-1 transition-all duration-500 ease-out lg:justify-between " +
                displayClass
            }
        >
            <p className="text-sm font-light">
                Chào mừng bạn đến với Gear Store
            </p>
            <div className="hidden items-center justify-center lg:flex">
                <Link
                    className="mr-2 flex items-center text-sm font-light"
                    title="Tuyển dụng"
                    href="/"
                >
                    <FaHandsHelping className="mr-2 text-slate-400" />
                    Tuyển dụng
                </Link>
                <span className="border-l border-r px-2  text-blue-600">
                    <FaFacebook className="h-6 w-6" />
                </span>
                <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-white p-1 text-red-600">
                    <FaYoutube className="h-4 w-4" />
                </span>
            </div>
        </div>
    );
};

export default TopBar;
