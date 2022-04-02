import React from "react"
import { Download, Features, SectionWrapper } from "./components"
import assets from "./assets"
import styles from "./styles/Global"

const App = (props) => {
    return (
        <>
            <SectionWrapper
                title="You own store of Nifty NFTs. Start Selling & Growing"
                description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
                showBtn
                mockupImg={assets.homeHero}
                banner="banner"
            />
            <SectionWrapper
                title="Smart User Interface Marketplace"
                description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
                mockupImg={assets.homeCards}
                reverse
            />
            <Features />
            <SectionWrapper
                title="Deployment"
                description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands."
                mockupImg={assets.feature}
                reverse
            />
            <SectionWrapper
                title="Creative way to showcase the store"
                description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
                mockupImg={assets.mockup}
                banner="banner02"
            />
            <Download />

            <div className="px-4 pt-16 pb-4 justify-center items-center bg-primary flex-col text-center banner04">
                <p className={`${styles.pText} ${styles.whiteText}`}>
                    Made with love by{" "}
                    <span className="font-semibold">
                        <a
                            href="https://github.com/jean-louis1776"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ILALEX
                        </a>{" "}
                        &{" "}
                        <a
                            href="https://github.com/adrianhajdin"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            JavaScript Mastery
                        </a>
                    </span>
                </p>
            </div>
        </>
    )
}

export default App
