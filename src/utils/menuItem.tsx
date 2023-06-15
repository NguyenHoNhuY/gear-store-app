import { AiOutlineApple } from "react-icons/ai";
import {
    BsGpuCard,
    BsHeadphones,
    BsKeyboard,
    BsLaptop,
    BsMouse,
    BsRouter,
    BsUsbDrive,
} from "react-icons/bs";
import { GiOfficeChair } from "react-icons/gi";
import { GrCloudComputer } from "react-icons/gr";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuMonitorSpeaker } from "react-icons/lu";

export type MenuItem = {
    label: string;
    icon: JSX.Element;
    menuItemHref: string;
    subItem: {
        subItemLabel: string;
        subItemHref: string;
        subItemFilter: {
            subItemFilterLabel: string;
            subItemFilterHref: string;
        }[];
    }[];
};

export const mainMenuItems: MenuItem[] = [
    {
        label: "Laptop",
        icon: <BsLaptop className="main__menu--item-link--icon" />,
        menuItemHref: "/",
        subItem: [
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ACER",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "MSI",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "LENOVO",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "HP",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "DELL",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "LG",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Giá bán",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Dưới 15 triệu",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Từ 15 đến 20 triệu",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Trên 20 triệu",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "CPU Intel - AMD",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Intel Core i3",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Intel Core i5",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Intel Core i7",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "AMD Ryzen",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Intel Gen 13",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Nhu cầu sử dụng",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Đồ họa - Studio",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Học sinh - Sinh viên",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Mỏng nhẹ cao cấp",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Studio RTX 40 Series",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Linh kiện Laptop",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Ram Laptop",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "SSD Laptop",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Ổ cứng di động",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Phụ kiện Laptop",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Balo - Túi chống sốc",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Đế tản nhiệt Laptop",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Laptop ASUS",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS OLED Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "VivoBook Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "VivoBook Pro Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ZenBook Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ExpertBook Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ProArt StudioBook Series",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Laptop ACER",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Aspire Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Swift Series",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Laptop MSI",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Modern Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Prestige Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Summit Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "CREATOR Series",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Laptop LENOVO",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ThinkBook Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Ideapad Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Ideapad Pro Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ThinkPad Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Yoga Series",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Laptop DELL",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Inspiron Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Vostro Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Latitude Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "XPS Series",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Laptop HP",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Pavilion Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Envy Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ProBook Series",
                        subItemFilterHref: "/",
                    },
                ],
            },
        ],
    },
    {
        label: "Laptop Gaming",
        icon: <BsLaptop className="main__menu--item-link--icon" />,
        menuItemHref: "/",
        subItem: [
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ACER / PREDATOR",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS / ROG",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "MSI",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "LENOVO",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "DELL",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "GIGABYTE / AORUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "HP",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Giá bán",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Dưới 20 triệu",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Từ 20 đến 25 triệu",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Từ 25 đến 30 triệu",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Trên 30 triệu",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Gaming cao cấp",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Gaming RTX 40 Series",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "ACER | PREDATOR",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Nitro Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Aspire Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Predator Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ConceptD Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ACER RTX 40 Series",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "ASUS | ROG Gaming",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ROG Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "TUF Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Zephyrus Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ROG Strix G",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ROG Flow Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "TUF RTX 40 Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ROG RTX 40 Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ROG Ally",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "MSI Gaming",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "GF Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "GS Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Bravo Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Creator Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "MSI AMD Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Crosshair Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "MSI RTX 40 Series",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "LENOVO Gaming",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Legion Gaming",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Ideapad Gaming",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Lenovo RTX 40 Series",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "DELL Gaming",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Dell Gaming G Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Alienware Series",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Dell RTX 40 Series",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "GIGABYTE Gaming",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "GIGABYTE G5 | G7",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "GIGABYTE AORUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "GIGABYTE AREO",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "GIGABYTE RTX Series",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Card đồ họa",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "GTX 1650",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "GTX 3050 / 3050Ti",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "GTX 3060",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "GTX 3070 / 3080",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "AMD Radeon RX",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "RTX 40 Series",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Linh kiện Laptop",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Ram Laptop",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "SSD Laptop",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Ổ cứng di động",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Phụ kiện Laptop",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Đế tản nhiệt",
                        subItemFilterHref: "/",
                    },
                ],
            },
        ],
    },
    {
        label: "PC KM Đặc Biệt",
        icon: <LuMonitorSpeaker className="main__menu--item-link--icon" />,
        menuItemHref: "/",
        subItem: [
            {
                subItemLabel: "GIÁ TỐT CHƠI HÈ",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Viper i3070Ti (11th) - 24,990K",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Viper Plus a3050 - Mua màn 1,000₫",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel:
                            "Viper i1660s (11th) - Mua tản 1,000₫",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Minion i1650 9,990K",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "kHUYẾN MÃI ĐẶC BIỆT",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel:
                            "Titan Plus i4090 - Tặng voucher 15tr",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel:
                            "Phantom Plus i4070Ti - Tặng tản nhiệt",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Phantom i4070 - Tặng tản nhiệt",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Phantom i4060TI - Tặng tản nhiệt",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel:
                            "Phantom Plus i3070Ti - Tặng tản nhiệt",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Viper Plus i4070 - Tặng tản nhiệt",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "KHUYẾN MÃI ĐẶC BIỆT",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel:
                            "Viper Plus i3070Ti - Tặng tản nhiệt",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel:
                            "Viper Plus 13060 WHITE - Voucher 2tr",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel:
                            "Viper i3060 - Voucher màn hình 2tr ",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel:
                            "Viper i3050 - Voucher màn hình 1tr500",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel:
                            "Minion i3050 - Voucher màn hình 1tr500",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Minion i1650 WHITE - Tặng RAM",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "GVN WHITE EDITION",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Poseidon 9 i3090",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Poseidon S WHITE",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Phantom Plus i4080",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Viper Plus i3060",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Minion i1650",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "GVN POSEIDON - CUSTOM NƯỚC",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel:
                            "Poseidon 5 i3060 - Tặng tản nhiệt ",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel:
                            "Poseidon 7 13060 - Tặng tản nhiệt custom",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Poseidon S WHITE - i5 - 3060",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Poseidon S - i5 - 3060",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Poseidon 7 i3080",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "GIAN HÀNG CHÍNH HÃNG",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Asus",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "AMD",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Corsair",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "NZXT",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Đèn thông minh Nanoleaf",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "Bộ bắt đầu",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Bộ mở rộng",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "Poseidon 9 i3090",
                        subItemFilterHref: "/",
                    },
                ],
            },
        ],
    },
    {
        label: "PC Gaming",
        icon: <LuMonitorSpeaker className="main__menu--item-link--icon" />,
        menuItemHref: "/",
        subItem: [
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
        ],
    },
    {
        label: "PC Đồ Họa",
        icon: <LuMonitorSpeaker className="main__menu--item-link--icon" />,
        menuItemHref: "/",
        subItem: [
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
        ],
    },
    {
        label: "PC Doanh Nghiệp",
        icon: <GrCloudComputer className="main__menu--item-link--icon" />,
        menuItemHref: "/",
        subItem: [
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
        ],
    },
    {
        label: "Linh kiện PC",
        icon: <BsGpuCard className="main__menu--item-link--icon" />,
        menuItemHref: "/",
        subItem: [
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
        ],
    },
    {
        label: "Apple",
        icon: <AiOutlineApple className="main__menu--item-link--icon" />,
        menuItemHref: "/",
        subItem: [
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
        ],
    },
    {
        label: "Bàn phím",
        icon: <BsKeyboard className="main__menu--item-link--icon" />,
        menuItemHref: "/",
        subItem: [
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
        ],
    },
    {
        label: "Chuột + Lót chuột",
        icon: <BsMouse className="main__menu--item-link--icon" />,
        menuItemHref: "/",
        subItem: [
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
        ],
    },
    {
        label: "Tai nghe - Loa",
        icon: <BsHeadphones className="main__menu--item-link--icon" />,
        menuItemHref: "/",
        subItem: [
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
        ],
    },
    {
        label: "Ghế - Bàn",
        icon: <GiOfficeChair className="main__menu--item-link--icon" />,
        menuItemHref: "/",
        subItem: [
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
        ],
    },
    {
        label: "Phần mềm & Mạng",
        icon: <BsRouter className="main__menu--item-link--icon" />,
        menuItemHref: "/",
        subItem: [
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
        ],
    },
    {
        label: "Phụ kiện",
        icon: <BsUsbDrive className="main__menu--item-link--icon" />,
        menuItemHref: "/",
        subItem: [
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
        ],
    },
    {
        label: "Thủ thuật - Giải đáp",
        icon: <HiOutlineLightBulb className="main__menu--item-link--icon" />,
        menuItemHref: "/",
        subItem: [
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
            {
                subItemLabel: "Thương hiệu",
                subItemHref: "/",
                subItemFilter: [
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
                    },
                ],
            },
        ],
    },
];
