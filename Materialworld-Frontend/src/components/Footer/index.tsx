import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;

    .logoImage {
        width: 150px;
    }

    .menuItems {
        font-size: 15px;
        color: rgba(255, 255, 255, 0.6);
        gap: 40px;

        a {
            text-transform: uppercase;
            transition: all 0.3s;

            &:hover {
                color: white;
            }
        }
    }

    .socialItems {
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
    }

    .copyRight {
        color: rgba(255, 255, 255, 0.8);
    }
`;

export const Footer = () => {
    return (
        <Wrapper className="relative">
            <div className="flex flex-col justify-center items-center container m-auto">
                <div className="logoImage">
                    <img alt="pic" src="/assets/imgs/logo_hero.svg" />
                </div>

                <div className="menuItems flex justify-center items-center">
                    <a href="#">Home</a>

                    <a href="#">Mint</a>

                    <a href="#">NFTs</a>

                    <a
                        href="/assets/Material_World_Lite_Paper.pdf"
                        download={`Material_World_Lite_Paper.pdf`}
                    >
                        Lite Paper
                    </a>
                </div>

                <div className="socialItems flex justify-center items-center gap-4 mt-4">
                    <a
                        href="https://twitter.com/MaterialWorld0"
                        target="_blank"
                    >
                        <span></span>
                        <img alt="img" src={"/assets/icons/twitter.svg"}></img>
                    </a>

                    <a href="https://discord.gg/wk36KMAK" target="_blank">
                        <span></span>
                        <img alt="img" src={"/assets/icons/discord.svg"}></img>
                    </a>
                </div>

                <p className="copyRight mt-8">
                    ©2023 MATERIAL WORLD. All rights reserved.
                </p>
            </div>
        </Wrapper>
    );
};

export default Footer;
