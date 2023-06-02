import Image from "next/image";
import {
    FaAddressCard,
    FaGifts,
    FaListAlt,
    FaNewspaper,
    FaPhone,
    FaShoppingCart,
    FaStore,
    FaUserCircle,
    FaYoutube,
} from "react-icons/fa";
import Search from "./components/Search";

import Link from "next/link";
import "./HeaderContent.css";
type Props = {};

type MenuItem = {
    name: string;
    icon: JSX.Element;
    href: string;
};

const HeaderContent = (props: Props) => {
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
        <div className="container mx-auto flex md:h-20">
            {/* logo */}
            <Image
                src="/logo.png"
                alt="logo"
                priority={true}
                width={256}
                height={92}
            />
            {/* header - right top block content */}
            <div className="ml-4 grid w-full auto-rows-auto md:grid-cols-5 md:grid-rows-2">
                <div className="col-span-2 flex items-center">
                    <Search />
                </div>
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
                <div className="header__right__bottom__menu ">
                    {menuBottomItem?.map((item, index) => (
                        <div
                            className="header__right__bottom__menu--item"
                            key={index}
                        >
                            {item.icon}
                            <Link
                                href={item.href}
                                className="header__right__bottom__menu--item-text"
                            >
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;
