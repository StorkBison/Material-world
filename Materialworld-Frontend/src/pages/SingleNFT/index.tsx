import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { NormalButton } from "../../theme/components";
import { Tooltip as ReactToolTip } from "react-tooltip";

const Wrapper = styled.div`
    position: relative;
    color: white;

    .backgroundWrapper {
        min-height: 100vh;

        background-image: url("/assets/imgs/website_background.png");
        background-size: 100% auto;

        padding: 100px 0 50px 0;
    }

    .thumbnailWrapper {
        max-width: 90%;
        position: relative;
        margin: auto;
        background: #6073ff45;
        border-radius: 15px;
        backdrop-filter: blur(10px);

        box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.2);
    }

    .nftImage {
        img {
            width: 500px;
            border-radius: 15px;
            // opacity: 0.1;
        }
    }

    .curChain {
        font-weight: 700;
        font-size: 27px;
        text-align: left;
        text-shadow: 6px 6px 4px rgba(0, 0, 0, 0.4);
    }

    .scoreInfo {
        margin-top: 1rem;
        font-size: 19px;
        font-weight: 500;

        color: #b3b3b3;

        .ranking {
            background: #123;
            padding: 0.3rem 0.7rem;
            border-radius: 100vw;
        }
    }
`;

const Space = styled.div`
    position: relative;
    height: 100px;
`;

const Title = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 57px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0 0 64px rgba(192, 219, 255, 0.48),
        0 0 16px rgba(65, 120, 255, 0.24);
`;

const Attributes = styled.div`
    position: relative;
    width: 45%;

    .item {
        position: relative;
        width: 300px;
        height: 300px;
        border-radius: 10px;
        background: #123;
        backdrop-filter: blur(10px);
        font-weight: 500;
        font-size: 21px;
        box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.2);

        .locationIcon {
            position: absolute;
            right: 1rem;
            top: 1rem;

            img {
                width: 35px;
            }
        }

        .attrImage {
            width: 35%;
        }
    }

    @media (max-width: 1535px) {
        .item {
            width: 250px;
            height: 250px;
            padding: 1rem;
        }
    }

    @media (max-width: 1280px) {
        width: fit-content;
    }

    @media (max-width: 568px) {
        .item {
            width: 90%;
            height: 350px;
        }
    }
`;

const attributes = [
    {
        title: "Name",
        content: "Lindsay Vonn",
        image: null,
        chain: "Solana",
        onCurrentChain: true,
        color: "#16BD9C99",
    },
    {
        title: "Boat",
        content: "Row Boat",
        image: "/assets/imgs/attributes/small boat 1.png",
        chain: "Polygon",
        onCurrentChain: false,
        color: "#8345E699",
    },
    {
        title: "House",
        content: "Mansion",
        image: "/assets/imgs/attributes/mansion 2.png",
        chain: "Ethereum",
        onCurrentChain: false,
        color: "#C0CBF799",
    },
    {
        title: "Clothing",
        content: "Skier",
        image: "/assets/imgs/attributes/pilot 2.png",
        chain: "Fantom",
        onCurrentChain: false,
        color: "#1969FF99",
    },
    {
        title: "Aircraft",
        content: "Large Private Jet",
        image: "/assets/imgs/attributes/jet 2.png",
        chain: "Avalanche",
        onCurrentChain: false,
        color: "#E8414299",
    },
    {
        title: "Car",
        content: "Jeep",
        image: "/assets/imgs/attributes/jeep 1.png",
        chain: "Binance Smart Chain",
        onCurrentChain: false,
        color: "#F0B90B99",
    },
];

export const SingleNFT = () => {
    const { id } = useParams();

    return (
        <Wrapper>
            <NavBar />

            <div className="backgroundWrapper relative z-10">
                <div className="container m-auto">
                    <div className="flex justify-center items-start gap-8 flex-wrap">
                        <div className="flex flex-col">
                            <Title className="mb-8">Lindsay Vonn</Title>

                            <div className="thumbnailWrapper flex flex-col gap-4 p-8">
                                <div className="nftImage flex flex-col gap-2">
                                    <img
                                        alt="nftimage"
                                        src="/assets/imgs/temp_nft.png"
                                    />

                                    <div className="curChain">
                                        Current Chain: <span>Solana</span>
                                    </div>
                                </div>

                                <div className="relative flex justify-between items-center flex-wrap scoreInfo">
                                    <div className="flex flex-col gap-2">
                                        <div>
                                            Chain Traversals:{" "}
                                            <span className="text-white font-bold">
                                                65
                                            </span>
                                        </div>
                                        <div>
                                            Wealth Score:{" "}
                                            <span className="text-white font-bold">
                                                62
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <div className="ranking text-white font-bold">
                                            Top 14%
                                        </div>
                                        <div className="ranking text-white font-bold">
                                            Top 36%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Attributes>
                            <div className="flex justify-center items-center gap-4 flex-wrap">
                                {attributes.map((item: any, index: number) => (
                                    <div
                                        key={`attr${index}`}
                                        className="item p-6 flex flex-col justify-between items-center"
                                        style={{
                                            backgroundColor: item.color,
                                        }}
                                    >
                                        {item.onCurrentChain ? (
                                            <div
                                                className="locationIcon"
                                                id="locationIcon"
                                            >
                                                <img
                                                    alt="pic"
                                                    src="/assets/imgs/location.png"
                                                />
                                            </div>
                                        ) : null}

                                        <div className="w-full flex items-center justify-start gap-4">
                                            <img
                                                alt="chainPic"
                                                src={`/assets/imgs/networks/${item.chain}.png`}
                                            ></img>
                                            {item.title}
                                        </div>

                                        {item.image ? (
                                            <img
                                                className="attrImage"
                                                alt="itemimage"
                                                src={item.image}
                                            />
                                        ) : null}

                                        <div>{item.content}</div>

                                        <NormalButton>
                                            {item.onCurrentChain
                                                ? "Rename"
                                                : `Travel to ${item.chain}`}
                                        </NormalButton>
                                    </div>
                                ))}
                            </div>
                        </Attributes>
                    </div>

                    <Space />

                    <Footer />

                    <ReactToolTip
                        anchorId="locationIcon"
                        place="top"
                        variant="info"
                        content="The ONFT is currently on this chain"
                    />
                </div>
            </div>
        </Wrapper>
    );
};

export default SingleNFT;
