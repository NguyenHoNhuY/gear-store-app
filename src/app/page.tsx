import Navigation from "src/components/navigation/Navigation";
import MainBanner from "src/components/navigation/module/MainBanner/MainBanner";
import MainMenu from "src/components/navigation/module/MainMenu/MainMenu";

export default function Home() {
    return (
        <main className="h-[120vh] md:mt-[160px]">
            <Navigation>
                <MainMenu />
                <MainBanner />
            </Navigation>
            body
        </main>
    );
}
