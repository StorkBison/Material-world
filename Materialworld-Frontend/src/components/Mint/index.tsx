import styled, { keyframes } from "styled-components";

const mintAnimation = keyframes`
    0%   {font-size: 32px; color: white;}
    50%  {font-size: 10px; color: black;}
    100% {font-size: 32px; color: black;}
`;

const Wrapper = styled.div`
    padding: 2rem;
    color: #2d3762;
    font-size: 20px;
    font-weight: 700;
    background: linear-gradient(135deg, #0ec2e5, #dbd0c7 60%);
    width: 500px;
    margin: auto;
    box-shadow: 0 0 64px rgba(192, 219, 255, 0.48),
        0 0 16px rgba(65, 120, 255, 0.24);
    border-radius: 10px;
    border: 3px solid #445c74;

    .nftView {
        img {
            width: 300px;
            box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
        }
    }

    .nameInput {
        input {
            margin-bottom: 0px;
            max-width: 100%;
            width: 350px;
            height: 30px;
            font-size: 16px;
            outline: none;
            padding: 21px;
            color: #123;
            border-radius: 4px;
            border: 1px solid transparent;
            transition: all 0.3s;
            box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);

            &:active,
            &:focus {
                border: 1px solid #007fff;
            }
        }
    }

    .mintBtn {
        button {
            width: 198px;
            height: 68px;
            font-size: 32px;
            color: #ffffff;
            opacity: 1;
            border-radius: 5px;
            background: #293462;
            padding: 10px 20px;
            transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
            box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);

            &:hover {
                animation: ${mintAnimation} 0.3s linear;

                background: #88f495;
                color: black;
            }
        }
    }
`;

export const MintSection = () => {
    return (
        <Wrapper className="relative flex flex-col justify-center items-center gap-8">
            <div className="nftView flex flex-col gap-2 items-center">
                <div>
                    <img src="/assets/imgs/nft_placeholder.png" alt="pic"></img>
                </div>

                <div className="nftBalance">2378 / 10000</div>
            </div>

            <div className="nameInput flex flex-col gap-2 items-center">
                <p>NAME YOUR CHARACTER</p>
                <input placeholder="Homer Simpson"></input>
            </div>

            <div className="mintBtn">
                <button>MINT NOW</button>
            </div>
        </Wrapper>
    );
};

export default MintSection;
