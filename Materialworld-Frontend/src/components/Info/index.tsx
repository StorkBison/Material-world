import styled from "styled-components";
import Faq from "react-faq-component";

const Wrapper = styled.div`
    position: relative;
    max-width: 1050px;
`;

const Divider = styled.div`
    box-sizing: border-box;
    min-width: 0px;
    position: relative;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.16) !important;
    margin: 0px auto !important;
    width: calc(95% - 14px) !important;

    &:before,
    &:after {
        content: close-quote;
        position: absolute;
        display: block;
        width: 7px;
        height: 7px;
        top: 0px;
        bottom: 0px;
        margin: auto 0px;
        border: 1px solid rgb(133, 133, 143);
        background: rgb(133, 133, 143);
        transform: rotate(45deg);
    }

    &:before {
        left: -8px;
    }

    &:after {
        right: -8px;
    }
`;

const SectionWrapper = styled.div`
    color: white;
    margin-top: 100px;

    .title {
        font-size: 2.5rem;
        text-shadow: 0 0 64px rgba(192, 219, 255, 0.48),
            0 0 16px rgba(65, 120, 255, 0.24);
        font-weight: 600;
        color: rgba(255, 255, 255, 0.96);
        text-align: center;
    }

    .content {
        color: rgba(255, 255, 255, 0.88);
        font-size: 1.3rem;
        line-height: 2rem;
        padding: 0 2rem;

        p {
            margin: 2rem 0;
            margin-top: 0;

            a {
                color: #93ff97;
            }
        }

        .boats {
            @media (max-width: 768px) {
                img:nth-child(1) {
                    width: 85px;
                }

                img:nth-child(2) {
                    width: 130px;
                }

                img:nth-child(3) {
                    width: 180px;
                }
            }

            @media (max-width: 564px) {
                flex-direction: column;
                gap: 2rem;

                img:nth-child(1) {
                    width: 35%;
                }

                img:nth-child(2) {
                    width: 55%;
                }

                img:nth-child(3) {
                    width: 75%;
                }
            }
        }
    }

    .faq-row-wrapper {
        background: transparent;
        line-height: 1.5rem;
        max-width: 95%;
        margin: auto;

        .faq-title {
            text-align: left;
            font: normal normal normal 22px "TT_Chocolates";
            letter-spacing: 0px;
            color: #ffffff;
            opacity: 1;
        }

        .faq-body {
            .faq-row {
                border-bottom: 1px solid #dddddd45;

                .row-title {
                    font: normal normal normal 22px "TT_Chocolates";
                    letter-spacing: 0px;
                    color: #ffffff;
                    opacity: 1;

                    padding: 15px 0;

                    .row-title-text {
                        text-shadow: 0 0 64px rgba(192, 219, 255, 0.48),
                            0 0 16px rgba(65, 120, 255, 0.24);
                    }
                }

                .row-content {
                    .row-content-text {
                        padding: 15px;
                        padding-top: 0;

                        font: normal normal normal 18px "TT_Chocolates";
                        line-height: 22px;
                        letter-spacing: 0px;
                        color: #b8b8b8;
                        opacity: 1;
                    }
                }
            }
        }
    }
`;

export const InfoSection = () => {
    const data = {
        rows: [
            {
                title: "How do I mint?",
                content:
                    "Once the mint is live, you will need to connect a wallet that holds SOL (for example, Phantom). Once your wallet is connected you can enter a name for your ONFT character then click mint. Approve the mint transaction that will cost 1 SOL + minting fees.",
            },
            {
                title: "How can I get SOL?",
                content:
                    "You can open an account with a crypto exchange. Depending on the exchange you can use an existing crypto currency you own or connect a bank account / credit card to buy SOL using fiat.",
            },
            {
                title: "What do I do after I mint my NFT?",
                content:
                    "Now’s the fun part! What you minted is just a blank named character and a plot of land. You can move (traverse) your ONFT to another chain and claim new assets (a house, car, boat, etc). The first asset you claim on each chain is free!",
            },
            {
                title: "How do I move (traverse) my ONFT to another chain?",
                content:
                    "Go to the NFTs page of the Material World website, and connect your wallet that has your ONFT. Select the ONFT you’d like to move to another chain. You will see all of the available chains and a button to traverse.",
            },
            {
                title: "How much does it cost to move my ONFT to another chain?",
                content:
                    "The traverse fee varies since it is dependent on the destination chain’s gas. You can expect fees ranging from a few cents to a few dollars (if moving to Ethereum). You will have to pay these fees in the origin chain’s token.",
            },
            {
                title: "How do I reroll for a new asset?",
                content: `
                    <p class="mb-2">
                        You will first need to be on the appropriate chain to reroll an asset. <br/>
                        - House: Ethereum <br/>
                        - Car: Binance Smart Chain <br/>
                        - Boat: Polygon <br/>
                        - Aircraft: Avalanche <br/>
                        - Clothing: Fantom
                    </p>

                    <p>
                        Once you’re on the correct chain, go to the NFTs page of the Material World website, select the ONFT you’d like to reroll an asset on, then click Reroll. You will need to pay 0.25 SOL and this fee is only paid in SOL regardless of what chain your ONFT is currently on.
                    </p>
                `,
            },
        ],
    };

    const config = {
        arrowIcon: " ",
    };

    return (
        <Wrapper className="container m-auto flex flex-col gap-8 justify-center items-center">
            <SectionWrapper className="flex flex-col gap-8 relative justify-center items-center">
                <div className="title">THE COLLECTION</div>

                <Divider />

                <div className="content">
                    <p>
                        Material World is a unique ONFT (omni-chain NFT)
                        collection meant to gamify the omni-chain experience by
                        encouraging the accumulation of material possessions.
                        The initial mint will happen on Solana, but each ONFT’s
                        true potential can only be realized by traversing it to
                        other chains. Minters will start with an empty plot of
                        land and move across chains to accumulate the trappings
                        of our material world: clothing, a house, a car, a boat,
                        and an aircraft.
                    </p>

                    <p>
                        Each chain will hold a specific asset type that can only
                        be claimed on that chain.
                        <br />
                        - House: Ethereum
                        <br />
                        - Car: Binance Smart Chain
                        <br />
                        - Boat: Polygon
                        <br />
                        - Aircraft: Avalanche
                        <br />- Clothing: Fantom
                    </p>

                    <p>
                        There will be a wide variety of assets for each
                        attribute ranging in rarity and wealth score.
                    </p>

                    <div className="boats flex justify-between items-center w-full">
                        <img
                            alt="pic"
                            width={150}
                            src="/assets/imgs/boat1.png"
                        ></img>
                        <img
                            alt="pic"
                            width={220}
                            src="/assets/imgs/boat2.png"
                        ></img>
                        <img
                            alt="pic"
                            width={300}
                            src="/assets/imgs/boat3.png"
                        ></img>
                    </div>

                    <p>
                        But wait! What would the Material World be if you
                        couldn’t gamble on getting a better house or boat? If
                        NFT owners don’t like the asset that their character
                        received, they can send their character back to the
                        appropriate chain and reroll for a new one for a small
                        fee in SOL. Regardless of what chain the ONFT is on, all
                        payments are made in SOL.
                    </p>
                </div>
            </SectionWrapper>

            <SectionWrapper className="flex flex-col gap-8 relative justify-center items-center">
                <div className="title">OMNI-CHAIN FUNCTIONALITY</div>

                <Divider />

                <div className="content">
                    <p>
                        Material World will mint on Solana, but will encourage
                        holders to move their ONFT to Ethereum, Polygon, Binance
                        Smart Chain, Avalanche, and Fantom.
                    </p>

                    <p>
                        All Material World ONFTs will be able to move across
                        these chains thanks to LayerZero. LayerZero is an
                        omni-chain interoperability protocol that allows for
                        trustless communication between different blockchain
                        networks. It relies on two independent off-chain
                        entities, the Oracle and Relayer, to ensure the validity
                        and secure delivery of messages across chains. You can
                        learn more on their website:{" "}
                        <a
                            href="https://layerzero.network/"
                            referrerPolicy="no-referrer"
                            target="_blank"
                        >
                            https://layerzero.network/
                        </a>
                    </p>

                    <p>
                        After minting, collectors can traverse their ONFTs to
                        other chains via the NFT page{" "}
                        {/* <a
                            href="#"
                            referrerPolicy="no-referrer"
                            target="_blank"
                        >
                            [link]
                        </a>{" "} */}
                        of the Material World website. When Material World ONFTs
                        traverse chains, all of the metadata is retained!
                    </p>
                </div>
            </SectionWrapper>

            <SectionWrapper className="flex flex-col gap-8 relative justify-center items-center">
                <div className="title">FAQS</div>

                <Divider />

                <div className="relative">
                    <Faq data={data} config={config} />
                </div>
            </SectionWrapper>
        </Wrapper>
    );
};

export default InfoSection;
