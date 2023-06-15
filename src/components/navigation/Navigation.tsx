type Props = {
    children: React.ReactNode;
};

const Navigation = (props: Props) => {
    const { children } = props;
    return (
        <section className="mt-2 w-full bg-gray-background pb-2">
            <div className="container mx-auto flex">{children}</div>
        </section>
    );
};

export default Navigation;
