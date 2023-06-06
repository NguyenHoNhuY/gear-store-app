import { AiOutlineLaptop } from "react-icons/ai";

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
        icon: <AiOutlineLaptop className="main__menu--item-link--icon" />,
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
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
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
                    {
                        subItemFilterLabel: "ASUS",
                        subItemFilterHref: "/",
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
        label: "Laptop",
        icon: <AiOutlineLaptop className="main__menu--item-link--icon" />,
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
        label: "Laptop",
        icon: <AiOutlineLaptop className="main__menu--item-link--icon" />,
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
        label: "Laptop",
        icon: <AiOutlineLaptop className="main__menu--item-link--icon" />,
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
        label: "Laptop",
        icon: <AiOutlineLaptop className="main__menu--item-link--icon" />,
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
        label: "Laptop",
        icon: <AiOutlineLaptop className="main__menu--item-link--icon" />,
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
        label: "Laptop",
        icon: <AiOutlineLaptop className="main__menu--item-link--icon" />,
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
        label: "Laptop",
        icon: <AiOutlineLaptop className="main__menu--item-link--icon" />,
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
        label: "Laptop",
        icon: <AiOutlineLaptop className="main__menu--item-link--icon" />,
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
        label: "Laptop",
        icon: <AiOutlineLaptop className="main__menu--item-link--icon" />,
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
        label: "Laptop",
        icon: <AiOutlineLaptop className="main__menu--item-link--icon" />,
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
        label: "Laptop",
        icon: <AiOutlineLaptop className="main__menu--item-link--icon" />,
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
        label: "Laptop",
        icon: <AiOutlineLaptop className="main__menu--item-link--icon" />,
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
        label: "Laptop",
        icon: <AiOutlineLaptop className="main__menu--item-link--icon" />,
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
        label: "Laptop",
        icon: <AiOutlineLaptop className="main__menu--item-link--icon" />,
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
        label: "Laptop",
        icon: <AiOutlineLaptop className="main__menu--item-link--icon" />,
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
