import Link from "next/link";
import { FaFacebook, FaHandsHelping, FaYoutube } from "react-icons/fa";

type Props = {};

const TopBar = (props: Props) => {
    return (
        <div className="container relative top-0 mx-auto flex scroll-mt-[-50px] items-center justify-between py-1">
            <p className="text-sm font-light">
                Chào mừng bạn đến với Gear Store
            </p>
            <div className="flex items-center">
                <Link
                    className="mr-2 flex items-center text-sm font-light"
                    title="Tuyển dụng"
                    href="/"
                >
                    <FaHandsHelping className="mr-2 text-slate-400" />
                    Tuyển dụng
                </Link>
                <span className="border-l border-r px-2  text-blue-600">
                    <FaFacebook className="h-6 w-6" />
                </span>
                <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-white p-1 text-red-600">
                    <FaYoutube className="h-4 w-4" />
                </span>
            </div>
        </div>
    );
};

export default TopBar;
