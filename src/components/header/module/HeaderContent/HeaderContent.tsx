"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    FaAddressCard,
    FaBars,
    FaGifts,
    FaListAlt,
    FaNewspaper,
    FaPhone,
    FaShoppingCart,
    FaStore,
    FaUserCircle,
    FaYoutube,
} from "react-icons/fa";
import "./HeaderContent.css";
import Drawer from "./components/Drawer";
import Search from "./components/Search";

type Props = {};

type MenuItem = {
    name: string;
    icon: JSX.Element;
    href: string;
};

const HeaderContent = (props: Props) => {
    const [visible, setVisible] = useState<boolean>(false);

    const menuTopItem: MenuItem[] = [
        {
            name: "Đăng ký",
            icon: (
                <FaAddressCard className="header__right__top__menu--item-icon" />
            ),
            href: "/",
        },
        {
            name: "Đăng nhập",
            icon: (
                <FaUserCircle className="header__right__top__menu--item-icon" />
            ),
            href: "/",
        },
        {
            name: "Khuyến mãi",
            icon: <FaGifts className="header__right__top__menu--item-icon" />,
            href: "/",
        },
        {
            name: "Giỏ hàng",
            icon: (
                <FaShoppingCart className="header__right__top__menu--item-icon" />
            ),
            href: "/",
        },
    ];

    const menuBottomItem: MenuItem[] = [
        {
            name: "tổng đài",
            icon: (
                <FaPhone className="header__right__bottom__menu--item-icon" />
            ),
            href: "/",
        },
        {
            name: "videos",
            icon: (
                <FaYoutube className="header__right__bottom__menu--item-icon" />
            ),
            href: "/",
        },
        {
            name: "tin tức",
            icon: (
                <FaNewspaper className="header__right__bottom__menu--item-icon" />
            ),
            href: "/",
        },
        {
            name: "tuyển dụng",
            icon: (
                <FaListAlt className="header__right__bottom__menu--item-icon" />
            ),
            href: "/",
        },
        {
            name: "hệ thống",
            icon: (
                <FaStore className="header__right__bottom__menu--item-icon" />
            ),
            href: "/",
        },
    ];

    return (
        <div className="border__bottom w-full">
            <div className="container mx-auto flex items-center lg:py-2 ">
                {/* logo */}
                <span className="logo relative h-[65px]">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        fill
                        className="hidden lg:block"
                    />
                </span>

                <div className="flex lg:hidden">
                    <div
                        onClick={() => setVisible(true)}
                        className="flex h-[50px] w-[50px] items-center justify-center"
                    >
                        <FaBars className="h-6 w-6" />
                    </div>
                    <Image
                        src="/favicon.png"
                        alt="logo"
                        priority={true}
                        width={50}
                        height={50}
                    />
                </div>

                {/* header - right top block content */}

                <div className="ml-2 mr-2 flex w-[86%] items-center justify-center lg:ml-4 lg:mr-0 lg:grid lg:auto-rows-auto lg:grid-cols-5 lg:grid-rows-2 lg:gap-y-0.5">
                    <div className="col-span-2 flex w-full items-center">
                        <Search />

                        <Link
                            href={menuTopItem[menuTopItem.length - 1].href}
                            className="lg:hidden"
                        >
                            <FaShoppingCart className="ml-2 h-6 w-6" />
                        </Link>
                    </div>

                    <>
                        {/* right top feature menu */}
                        <div className="header__right__top__menu ">
                            {menuTopItem?.map((item, index) => (
                                <div
                                    className="header__right__top__menu--item"
                                    key={index + 100}
                                >
                                    {item.icon}
                                    <Link
                                        href={item.href}
                                        className="header__right__top__menu--item-text"
                                    >
                                        {item.name}
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* right bottom feature menu */}
                        <div className="header__right__bottom__menu h-full">
                            {menuBottomItem?.map((item, index) => (
                                <div
                                    className="header__right__bottom__menu--item"
                                    key={index}
                                >
                                    <span className="flex h-fit w-full items-center justify-center">
                                        {item.icon}
                                        <Link
                                            href={item.href}
                                            className="header__right__bottom__menu--item-text"
                                        >
                                            {item.name}
                                        </Link>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </>
                </div>

                <Drawer visible={visible} setVisible={setVisible} />
            </div>
        </div>
    );
};

export default HeaderContent;
