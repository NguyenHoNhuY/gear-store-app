"use client";

const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <header className="fixed top-0 w-full bg-[#f1f0f1]">{children}</header>
    );
};

export default Header;
