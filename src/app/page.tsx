import Navigation from "src/components/navigation/Navigation";
import MainMenu from "src/components/navigation/module/MainMenu/MainMenu";

export default function Home() {
    return (
        <main className="h-[120vh] bg-gray-400 md:mt-[160px]">
            <Navigation>
                <MainMenu />
                <div className="ml-2 grid w-[86%] bg-red-500">banner</div>
            </Navigation>
            body
        </main>
    );
}
