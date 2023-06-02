"use client";
import { Divider as DividerPrimeReact } from "primereact/divider";

type Props = {
    className: string;
};

const Divider = (props: Props) => {
    const { className } = props;
    return (
        <>
            <DividerPrimeReact className={className} />
        </>
    );
};

export default Divider;
