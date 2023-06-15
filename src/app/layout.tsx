import { Inter } from "next/font/google";
//theme
import "primereact/resources/themes/soho-light/theme.css";
//core
import "primereact/resources/primereact.min.css";

// import Divider from "src/components/common/Divider";
import Header from "src/components/header/Header";
import HeaderContent from "src/components/header/module/HeaderContent/HeaderContent";
import HeaderMainMenu from "src/components/header/module/HeaderMainMenu/HeaderMainMenu";
import TopBar from "src/components/header/module/TopBar/TopBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Gear Store - Store of me",
    description: "Store of me",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={inter.className + " relative"}>
                <Header>
                    <TopBar />
                    <HeaderContent />
                    <HeaderMainMenu />
                </Header>
                {children}
            </body>
        </html>
    );
}
