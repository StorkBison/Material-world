import styled from "styled-components";
import HeroSection from "../../components/Hero";
import NavBar from "../../components/NavBar";
import MintSection from "../../components/Mint";
import InfoSection from "../../components/Info";
import Footer from "../../components/Footer";
import ComingSoon from "../../components/ComingSoon";
import LeaderBoards from "../../components/LeaderBoards";

const Wrapper = styled.div`
    position: relative;

    .backgroundWrapper {
        background-image: url("/assets/imgs/website_background.png");
        background-size: 100% auto;

        padding: 100px 0 50px 0;

        &:before {
            background-image: url("/assets/imgs/white-area-top.svg");
            padding: 14%;
            top: -27.7vw;
            position: absolute;
            width: 100%;
            display: block;
            content: "";
            background-repeat: none;
            background-position: center;
            background-size: cover;
            pointer-events: none;
        }
    }
`;

const Space = styled.div`
    position: relative;
    height: 100px;
`;

export const Home = () => {
    return (
        <Wrapper>
            <NavBar />

            <HeroSection />

            <div className="backgroundWrapper relative z-10">
                <div className="container m-auto">
                    <Space />

                    <ComingSoon />
                    {/* <MintSection /> */}

                    <Space />

                    <InfoSection />

                    <Space />

                    <LeaderBoards />

                    <Space />

                    <Space />

                    <Footer />
                </div>
            </div>
        </Wrapper>
    );
};

export default Home;
