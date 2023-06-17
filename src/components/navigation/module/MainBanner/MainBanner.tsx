import { images } from "src/utils";
import BannerItem from "./components/BannerItem";
import Slider from "./components/slider/Slider";

type Props = {};

const MainBanner = (props: Props) => {
    return (
        <div className="ml-2 grid w-[86%] grid-cols-3 grid-rows-3 gap-1">
            <Slider className="col-span-2 col-start-1 row-span-2 row-start-1 overflow-hidden rounded-md" />

            {images?.map((item, index) => (
                <BannerItem src={item} key={index} />
            ))}
        </div>
    );
};

export default MainBanner;
