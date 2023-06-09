type Props = {
    children: React.ReactNode;
};

const Navigation = (props: Props) => {
    const { children } = props;
    return (
        <section className="w-full bg-gray-background pb-2">
            <div className="container mx-auto flex">{children}</div>
        </section>
    );
};

export default Navigation;
