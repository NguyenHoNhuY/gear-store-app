import Link from "next/link";
import { FaBars, FaCcAmazonPay, FaGifts } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { VscTools } from "react-icons/vsc";
import "./HeaderMainMenu.css";

type Props = {};

const HeaderMainMenu = (props: Props) => {
    return (
        <div className="w-full bg-main-color py-1">
            <div className="container mx-auto hidden items-center lg:flex">
                <div className="flex h-full w-[14%] cursor-pointer select-none items-center whitespace-nowrap rounded-md border-none bg-main-color-100 py-2 text-[12px] font-medium text-white">
                    <FaBars className="mx-2" />
                    <p className="">Danh mục sản phẩm</p>
                </div>
                <div className="header__main__right__menu ">
                    <Link className="header__main__right__menu--item" href="/">
                        <FaGifts className="header__main__right__menu--item-icon" />
                        Tổng hợp khuyến mãi
                    </Link>
                    <Link className="header__main__right__menu--item" href="/">
                        <FaCcAmazonPay className="header__main__right__menu--item-icon" />
                        Hướng dẫn thanh toán
                    </Link>
                    <Link className="header__main__right__menu--item" href="/">
                        <GiTakeMyMoney className="header__main__right__menu--item-icon" />
                        Hướng dẫn trả góp
                    </Link>
                    <Link className="header__main__right__menu--item" href="/">
                        <VscTools className="header__main__right__menu--item-icon" />
                        Chính sách bảo hành
                    </Link>
                    <Link className="header__main__right__menu--item" href="/">
                        <HiOutlineNewspaper className="header__main__right__menu--item-icon" />
                        Tin công nghệ
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderMainMenu;
