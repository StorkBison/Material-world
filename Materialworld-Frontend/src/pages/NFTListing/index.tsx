import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { contractAddress } from "../../constants";
import axios from "axios";

const Wrapper = styled.div`
    position: relative;

    .backgroundWrapper {
        min-height: 100vh;

        background-image: url("/assets/imgs/website_background.png");
        background-size: 100% auto;

        padding: 100px 0 50px 0;
    }
`;

const Space = styled.div`
    position: relative;
    height: 100px;
`;

const Title = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0 0 64px rgba(192, 219, 255, 0.48),
        0 0 16px rgba(65, 120, 255, 0.24);
`;

const SubTitle = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #ffffff;
    text-shadow: 6px 6px 4px rgba(0, 0, 0, 0.4);
`;

const NFTContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;

    .nftItem {
        width: 300px;
        padding: 1rem;
        background: #101426;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
        transition: 0.3s all;

        &:hover {
            transform: scale(1.05);
        }

        .thumbnail {
            position: relative;
            border-radius: 8px;
            overflow: hidden;

            .chainIcon {
                position: absolute;
                border-radius: 100vw;
                width: 40px;
                top: 0.5rem;
                right: 0.5rem;
                border: 2px solid #fff;
            }
        }

        .name {
            color: white;
            font-weight: 600;
            font-size: 21px;
        }

        .chain,
        .wealth {
            color: #8d8d8d;
            font-size: 18px;

            span {
                color: #687ccf;
                font-weight: 700;
            }
        }
    }
`;

export const NFTListing = () => {
    // const data = new Array(8).fill(10);
    const { isConnected, address } = useAccount()
    const [nfts, setNfts] = useState<any>([])

    useEffect(() => {
        try {
            if (isConnected)
                (async () => {
                    const state = []
                    for (var j = 0; j < contractAddress.length; j++) {
                        const url = `https://deep-index.moralis.io/api/v2/${address}/nft?chain=${contractAddress[j].chainId}&format=decimal&limit=12&token_addresses=${contractAddress[j].address}`;
                        const options = {
                            method: "GET",
                            url,
                            headers: {
                                accept: "application/json",
                                "X-API-Key": "epklPSqwrWAsdinNNZ7A8DirMVDhpdb85l4DEaJbPzIxm2Wj2Ag1QGx6NqFMuO9P",
                            },
                        };
                        const { data } = await axios.request(options);
                        for (var i = 0; i < data.result.length; i++) {
                            if (data.result[i].metadata === null) {
                                if (data.result[i].token_uri !== null)
                                    data.result[i].metadata = (
                                        await axios.get(data.result[i].token_uri)
                                    ).data;
                                else data.result[i].metadata = { image: "" }
                            } else data.result[i].metadata = JSON.parse(data.result[i].metadata);

                            state.push({ ...data.result[i], chainName: contractAddress[j].chainName })
                        }
                    }
                    setNfts([...state]);
                })()
        } catch (e) {
            console.log(e)
        }

    }, [address])
    const navigate = useNavigate();

    return (
        <Wrapper>
            <NavBar />

            <div className="backgroundWrapper relative z-10">
                <div className="container m-auto">
                    <Space />

                    <div className="flex flex-col justify-center items-center gap-8">
                        <Title>My Material World ONFTs</Title>

                        <SubTitle>
                            Click on one of your ONFTs to view its assets and
                            move it to another chain
                        </SubTitle>
                    </div>

                    <Space />

                    <NFTContainer>
                        {nfts !== null && nfts.map((item: any, index: any) => (
                            <div
                                key={`nft${index}`}
                                className="nftItem"
                                onClick={() => navigate("/nftListing/123123")}
                            >
                                <div className="thumbnail">
                                    <img
                                        alt="nftpic"
                                        src={item.metadata.image}
                                    />

                                    <img
                                        alt="chainIcon"
                                        className="chainIcon"
                                        src={`/assets/imgs/networks/${item.chainName}-network.jpg`}
                                    />
                                </div>

                                <div className="name">Homer Simpson</div>
                                <div className="chain">
                                    Current Chain: <span>{item.chainName}</span>
                                </div>
                                <div className="wealth">
                                    Wealth Score: <span>439</span>
                                </div>
                            </div>
                        ))}
                    </NFTContainer>

                    <Space />

                    <Footer />
                </div>
            </div>
        </Wrapper>
    );
};

export default NFTListing;
