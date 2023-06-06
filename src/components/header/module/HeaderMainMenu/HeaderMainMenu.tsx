import Link from "next/link";
import { BsTools } from "react-icons/bs";
import { FaBars, FaCcAmazonPay } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import "./HeaderMainMenu.css";

type Props = {};

const HeaderMainMenu = (props: Props) => {
    return (
        <div className="container mx-auto mb-2 hidden items-center lg:flex">
            <div className="flex h-full w-[14%] select-none items-center whitespace-nowrap rounded-md border-none bg-neutral-700 py-2 text-[12px] font-medium text-white">
                <FaBars className="mx-2" />
                <p className="">Danh mục sản phẩm</p>
            </div>
            <div className="header__main__right__menu ">
                <Link className="header__main__right__menu--item" href="/">
                    <FaCcAmazonPay className="header__main__right__menu--item-icon" />
                    Hướng dẫn thanh toán
                </Link>
                <Link className="header__main__right__menu--item" href="/">
                    <GiTakeMyMoney className="header__main__right__menu--item-icon" />
                    Hướng dẫn trả góp
                </Link>
                <Link className="header__main__right__menu--item" href="/">
                    <BsTools className="header__main__right__menu--item-icon" />
                    Chính sách bảo hành
                </Link>
                <Link className="header__main__right__menu--item" href="/">
                    <TbTruckDelivery className="header__main__right__menu--item-icon" />
                    Chính sách vận chuyển
                </Link>
            </div>
        </div>
    );
};

export default HeaderMainMenu;
