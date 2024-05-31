import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    max-width: 600px;
    margin: auto;
    box-shadow: 0 0 64px rgba(192, 219, 255, 0.48),
        0 0 16px rgba(65, 120, 255, 0.24);
    border: 1px solid #123;
    background: #2e343abf;
    width: 90%;

    .downloadLitePaper {
        gap: 1rem;

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
`;

export const ComingSoon = () => {
    return (
        <Wrapper className="w-full relative">
            <div className="p-4 relative">
                <div className="downloadLitePaper flex flex-col justify-center items-center p-4">
                    <p className="delayMessage">
                        Material World will be launching soon.
                        <br />
                        In the meantime please download our lite paper.
                    </p>

                    <a
                        href="/assets/Material_World_Lite_Paper.pdf"
                        target={"_blank"}
                        download={`Material_World_Lite_Paper.pdf`}
                    >
                        <button className="downloadBtn">
                            Download Lite Paper
                        </button>
                    </a>
                </div>
            </div>
        </Wrapper>
    );
};

export default ComingSoon;
