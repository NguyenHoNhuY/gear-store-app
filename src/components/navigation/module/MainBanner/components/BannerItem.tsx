import Image from "next/image";

type Props = { src: string };

const BannerItem = (props: Props) => {
    const { src } = props;
    return (
        <div className="relative h-full w-full">
            <Image
                src={src}
                alt="banner"
                fill
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    );
};

export default BannerItem;
