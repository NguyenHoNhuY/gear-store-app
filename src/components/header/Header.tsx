"use client";

const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <header className="fixed top-0 z-50 w-full bg-gray-background">
            {children}
        </header>
    );
};

export default Header;
