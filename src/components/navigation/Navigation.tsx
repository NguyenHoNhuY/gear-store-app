type Props = {
    children: React.ReactNode;
};

const Navigation = (props: Props) => {
    const { children } = props;
    return (
        <div className="container mx-auto flex bg-gray-background">
            {children}
        </div>
    );
};

export default Navigation;
