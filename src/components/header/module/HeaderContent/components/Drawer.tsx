import { Sidebar } from "primereact/sidebar";
import { Dispatch, SetStateAction } from "react";

type Props = {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
};

const Drawer = (props: Props) => {
    const { visible, setVisible } = props;

    return (
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
            <h2>Sidebar</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
        </Sidebar>
    );
};

export default Drawer;
