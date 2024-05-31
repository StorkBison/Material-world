import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    height: 100vh;

    .backImage {
        position: fixed;
        opacity: 0.3;
        object-fit: cover;
        top: 0;
    }

    .contentWrapper {
        position: relative;
        margin: auto;
        gap: 0rem;
        transform: translateY(-50%);
        top: 50%;

        .logoWrapper {
            width: 350px;
            max-width: 95%;
        }

        .titleCaption {
            font-style: normal;
            font-weight: 400;
            font-size: 50px;
            text-align: center;
            color: #ffffff;
            text-shadow: 6px 6px 4px rgba(0, 0, 0, 0.4);
        }

        .statsItem {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            .title {
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                color: #ffffff;
                text-shadow: 6px 6px 4px rgba(0, 0, 0, 0.4);
            }

            .value {
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                color: #ffffff;
                text-shadow: 6px 6px 4px rgba(0, 0, 0, 0.4);
            }

            .desc {
                font-style: normal;
                font-weight: 400;
                font-size: 22px;
                text-align: center;
                color: #ffffff;
                text-shadow: 6px 6px 4px rgba(0, 0, 0, 0.4);
            }
        }

        .itemsWrapper {
            gap: 210px;

            @media (max-width: 1280px) {
                gap: 150px;
            }

            @media (max-width: 1024px) {
                gap: 70px;
            }

            @media (max-width: 768px) {
                flex-direction: column;
                align-items: center;
            }
        }

        .downloadLitePaper {
            gap: 1rem;
            border: 1px solid #123;
            background: #2e343abf;

            .delayMessage {
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                text-align: center;
                color: #ffffff;
                text-shadow: 6px 6px 4px rgba(0, 0, 0, 0.4);
            }

            .downloadBtn {
                font-size: 15px;
                color: #ffffff;
                opacity: 1;

                border-radius: 5px;
                background: #293462;
                padding: 10px 20px;
                transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);

                &:hover {
                    background: #88f495;
                    color: black;
                }
            }
        }
    }

    @media (max-width: 768px) {
        height: auto;

        .contentWrapper {
            margin-top: 100px;
            transform: unset;
            top: unset;
            padding-bottom: 100px;
        }
    }
`;

export const HeroSection = () => {
    return (
        <Wrapper className="w-full relative">
            <div className="w-full h-full relative">
                <img
                    className="w-full h-full backImage"
                    alt="pic"
                    src="/assets/imgs/hero.svg"
                />

                <div className="contentWrapper w-full flex flex-col justify-center items-center container">
                    <div className="titleCaption">LIVE YOUR BEST LIFE</div>

                    <div className="logoWrapper">
                        <img alt="logo" src="/assets/imgs/logo_hero.svg" />
                    </div>

                    <div className="flex justify-center items-start itemsWrapper">
                        <div className="statsItem">
                            <div className="title">Interoperability</div>

                            <div className="value">6</div>

                            <p className="desc">Chains Supported</p>
                        </div>

                        <div className="statsItem">
                            <div className="title">Flexibility</div>

                            <div className="value">3,000,000+</div>

                            <p className="desc">Asset Combinations</p>
                        </div>

                        <div className="statsItem">
                            <div className="title">Simplicity</div>

                            <div className="value">1</div>

                            <p className="desc">
                                Token to Power <br /> Cross-Chain Functionality
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default HeroSection;
