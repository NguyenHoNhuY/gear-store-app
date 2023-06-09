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
        label: "PC KM Đặc Biệt",
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
