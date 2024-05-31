import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useLocation } from "react-router-dom";
import { useWeb3Modal } from '@web3modal/react'
import { useAccount, useDisconnect } from 'wagmi'

const NavBarWrapper = styled.div`
    position: fixed;
    background: #ffffff1a 0% 0% no-repeat padding-box;
    opacity: 1;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    z-index: 99;
    top: -66px;
    width: 100%;
    transition: all 0.5s;

    &.active {
        top: 0;
    }

    .menu {
        gap: 1rem;

        a {
            font-size: 15px;
            color: #fff;
            text-transform: uppercase;
            transition: all 0.5s;

            &:hover,
            &.active {
                color: #88f495;
            }
        }

        @media (max-width: 564px) {
            display: none;
        }
    }

    .buttons {
        a {
            width: 25px;
            position: relative;
            display: flex;
            align-items: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
            border-radius: 100%;
            overflow: hidden;

            span {
                position: absolute;
                bottom: -60px;
                width: 50px;
                height: 50px;
                z-index: -1;

                background: #88f495;
                transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
            }

            img {
                width: 100%;
            }

            &:hover {
                span {
                    bottom: 0px;
                }
            }
        }

        .walletBtn {
            font-size: 15px;
            line-height: 15px;
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
`;

const Logo = styled.a`
    position: relative;

    img {
        height: 50px;
    }
`;

export const NavBar = () => {
    const location = useLocation();
    const { isConnected } = useAccount()
    const { disconnect } = useDisconnect()
    const { open } = useWeb3Modal()

    const [active, setActive] = useState(true);
    const scrollRef = useRef(0);

    const handleScroll = () => {
        if (window.scrollY <= scrollRef.current) setActive(true);
        else setActive(false);

        scrollRef.current = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleConnectButton = async () => {
        await open()
    }

    const handleDisConnectButton = () => {
        disconnect()
    }

    return (
        <NavBarWrapper className={`${active ? "active" : ""}`}>
            <div className="container m-auto">
                <div className="flex justify-between items-center px-2 py-2">
                    <div className="flex items-center justify-center gap-8">
                        <Logo href="/">
                            <img alt="pic" src="/assets/imgs/logo.svg" />
                        </Logo>

                        <div className="flex justify-center items-center menu">
                            <a id="mintMenu" href="#">
                                Mint
                            </a>

                            <a
                                id="nftMenu"
                                href="/nftListing"
                                className={`${location.pathname.indexOf("/nftListing") !==
                                        -1
                                        ? "active"
                                        : ""
                                    }`}
                            >
                                NFTs
                            </a>

                            <a
                                href="/assets/Material_World_Lite_Paper.pdf"
                                download={`Material_World_Lite_Paper.pdf`}
                            >
                                Lite Paper
                            </a>
                        </div>

                        <ReactTooltip
                            anchorId="mintMenu"
                            place="bottom"
                            variant="info"
                            content="Coming soon"
                        />

                        {/* <ReactTooltip
                            anchorId="nftMenu"
                            place="bottom"
                            variant="info"
                            content="Coming soon"
                        /> */}
                    </div>

                    <div className="flex items-center justify-center gap-4 buttons relative">
                        <a
                            href="https://twitter.com/MaterialWorld0"
                            target="_blank"
                        >
                            <span></span>
                            <img
                                alt="img"
                                src={"/assets/icons/twitter.svg"}
                            ></img>
                        </a>

                        <a href="https://discord.gg/A4ZKaWWg" target="_blank">
                            <span></span>
                            <img
                                alt="img"
                                src={"/assets/icons/discord.svg"}
                            ></img>
                        </a>

                        {
                            isConnected ? <button className="walletBtn ml-4" onClick={handleDisConnectButton}>Disconnect Wallet</button> :
                                <button className="walletBtn ml-4" onClick={handleConnectButton}>
                                    CONNECT WALLET
                                </button>
                        }

                    </div>
                </div>
            </div>
        </NavBarWrapper>
    );
};

export default NavBar;
