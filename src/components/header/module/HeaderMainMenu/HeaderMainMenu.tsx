import Link from "next/link";
import { BsTools } from "react-icons/bs";
import { FaBars, FaCcAmazonPay } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import "./HeaderMainMenu.css";

type Props = {};

const HeaderMainMenu = (props: Props) => {
    return (
        <div className="container mx-auto mb-2 flex items-center">
            <span className="flex w-[223px] cursor-pointer select-none items-center rounded-md border-[1px] border-neutral-700 bg-neutral-700 py-1 pl-2 text-white">
                <FaBars className="mr-2" />
                Danh mục sản phẩm
            </span>
            <div className="header__main__right__menu">
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
