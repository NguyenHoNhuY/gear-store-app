"use client";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import { mainMenuItems } from "src/utils";
import "./MainMenu.css";

type Props = {};

const MainMenu = (props: Props) => {
    const [active, setActive] = useState<number>(-1);

    return (
        <nav className="mega__menu__nav">
            <ol className="main__menu">
                {mainMenuItems?.map((item, index) => (
                    <li
                        key={index}
                        className="main__menu--item"
                        onMouseEnter={(e: MouseEvent<HTMLLIElement>) => {
                            setActive(index);
                        }}
                        onMouseLeave={() => {
                            setActive(-1);
                        }}
                    >
                        <Link
                            href={item.menuItemHref}
                            className={`main__menu--item-link ${
                                active === index ? "on__mouse__move" : ""
                            }`}
                        >
                            {item.icon}
                            {item.label}
                        </Link>

                        <div
                            className={`mega__menu hidden ${
                                active === index ? "!block" : ""
                            }`}
                        >
                            <div className="mega__menu__column">
                                {item.subItem.map((item, index) => (
                                    <div
                                        key={index}
                                        className="mega__menu__column--item"
                                    >
                                        <Link
                                            href={item.subItemHref}
                                            className="mega__menu__column--item-label"
                                        >
                                            {item.subItemLabel}
                                        </Link>
                                        {item.subItemFilter.map(
                                            (item, index) => (
                                                <Link
                                                    className="mega__menu__column--item-filter"
                                                    href={
                                                        item.subItemFilterHref
                                                    }
                                                    key={index}
                                                >
                                                    {item.subItemFilterLabel}
                                                </Link>
                                            )
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default MainMenu;
