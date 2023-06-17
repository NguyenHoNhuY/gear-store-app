"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiCart, BiHeadphone, BiMapPin, BiUser } from "react-icons/bi";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import "./HeaderContent.css";
import Drawer from "./components/Drawer";
import Search from "./components/Search";

type Props = {};

type MenuItem = {
    name: JSX.Element;
    icon: JSX.Element;
    href: string;
};

const HeaderContent = (props: Props) => {
    const [visible, setVisible] = useState<boolean>(false);

    const menuTopItem: MenuItem[] = [
        {
            name: (
                <>
                    <p className="text__top">Hotline</p>
                    <p className="text__bottom">12391</p>
                </>
            ),
            icon: (
                <BiHeadphone className="header__right__top__menu--item-icon" />
            ),
            href: "/",
        },
        {
            name: (
                <>
                    <p className="text__top">Hệ thống</p>
                    <p className="text__bottom">showroom</p>
                </>
            ),
            icon: <BiMapPin className="header__right__top__menu--item-icon" />,
            href: "/",
        },
        {
            name: (
                <>
                    <p className="text__top">Tra cứu</p>
                    <p className="text__bottom">đơn hàng</p>
                </>
            ),
            icon: (
                <TbReportSearch className="header__right__top__menu--item-icon" />
            ),
            href: "/",
        },
        {
            name: (
                <>
                    <p className="text__top">Giỏ</p>
                    <p className="text__bottom">hàng</p>
                </>
            ),
            icon: <BiCart className="header__right__top__menu--item-icon" />,
            href: "/",
        },
    ];

    return (
        <div className="border__bottom  w-full">
            <div className="header__content  ">
                {/* logo */}
                <span className="header__content--left col__left ">
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

                <div className="header__content--right col__right ">
                    <div className="header__content--right-search ">
                        <Search />

                        <Link
                            href={menuTopItem[menuTopItem.length - 1].href}
                            className="lg:hidden"
                        >
                            <FaShoppingCart className="ml-2 h-6 w-6" />
                        </Link>
                    </div>

                    {/* right top feature menu */}
                    <div className="header__right__top__menu ">
                        {menuTopItem?.map((item, index) => (
                            <Link
                                href={item.href}
                                className="header__right__top__menu--item"
                                key={index + 100}
                            >
                                {item.icon}
                                <span className="header__right__top__menu--item-text">
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                        <Link
                            href={"/"}
                            className="header__right__top__menu--item rounded-md bg-main-color px-2 py-1 !text-white"
                        >
                            <BiUser className="header__right__top__menu--item-icon" />
                            <span className="header__right__top__menu--item-text">
                                <p className="text__top">Đăng</p>
                                <p className="text__bottom">nhập</p>
                            </span>
                        </Link>
                    </div>
                </div>

                <Drawer visible={visible} setVisible={setVisible} />
            </div>
        </div>
    );
};

export default HeaderContent;
