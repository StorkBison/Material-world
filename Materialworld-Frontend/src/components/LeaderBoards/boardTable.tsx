import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    padding: 2rem 0;
    color: white;
    width: 650px;
    max-width: 95%;
    margin: auto;

    .topRankings {
        display: flex;
        justify-content: space-between;
        items: center;
        flex-wrap: wrap;
        margin-top: 3rem;

        .logo {
            width: 100px;
        }

        .silverBronzeWrapper {
            margin-top: -1.5rem;

            @media (max-width: 640px) {
                flex-direction: column;
                gap: 3rem;
                margin-top: 3rem;
            }
        }

        .item {
            width: fit-content;

            &.gold {
                width: 100%;

                .avatar {
                    background: #ffe375;

                    box-shadow: 0 0 50px #fff, -10px 0 80px #ffe375,
                        10px 0 80px #ffe375;
                }

                .name {
                    background: #ffe375;
                }

                .ranking,
                .score {
                    color: #ffe250;
                }
            }

            &.silver {
                .avatar {
                    background: #b3b3b3;

                    box-shadow: 0 0 50px #fff, -10px 0 80px #b3b3b3,
                        10px 0 80px #b3b3b3;
                }

                .name {
                    background: #b3b3b3;
                }

                .ranking,
                .score {
                    color: #efefef;
                }
            }

            &.bronze {
                .avatar {
                    background: #c0857d;

                    box-shadow: 0 0 50px #fff, -10px 0 80px #c0857d,
                        10px 0 80px #c0857d;
                }

                .name {
                    background: #c0857d;
                }

                .ranking,
                .score {
                    color: #ffc9c1;
                }
            }

            .avatar {
                width: 120px;
                height: 120px;
                border-radius: 10px;
                padding: 0.5rem;

                img {
                    border-radius: 10px;
                    border: 3px solid #55728f;
                    z-index: 10;
                }
            }

            .name {
                color: #123;
                width: 240px;
                border-radius: 100vw;
                font-weight: 600;
                font-size: 1.2rem;
                text-align: center;
                padding: 0.7rem 0.7rem;
                margin-top: -0.8rem;
            }

            .ranking {
                position: absolute;
                top: 0;
                left: 10px;
                transform: translate(0, -100%);
                font-weight: 600;
                font-size: 1.4rem;
                letter-spacing: 5px;
                z-index: 10;
            }

            .score {
                position: absolute;
                top: 0;
                right: 40px;
                transform: translate(100%, -100%);
                font-weight: 600;
                font-size: 1.4rem;
                letter-spacing: 5px;
                z-index: 10;
            }
        }
    }
`;

const TableWrapper = styled.div`
    .tableTitle {
        font-size: 1.5rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.96);
        text-align: center;
        text-transform: uppercase;
    }

    table {
        position: relative;
        margin: auto;
        width: 90%;
        margin-top: 1rem;

        border-collapse: separate;
        border-spacing: 0 10px;

        th {
            font-size: 1.1rem;
            text-align: left;
            padding: 0.5rem;
        }

        td {
            text-align: left;
            padding: 8px;
        }

        tbody {
            tr {
                box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.4);
            }

            td:first-child {
                border-left-style: solid;
                border-top-left-radius: 2px;
                border-bottom-left-radius: 2px;
            }
            td:last-child {
                border-right-style: solid;
                border-bottom-right-radius: 2px;
                border-top-right-radius: 2px;
            }

            td {
                background: #123;
                img {
                    width: 50px;
                    height: 50px;
                }

                &.nft {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                &.network {
                    img {
                        width: 30px;
                        height: 30px;
                        border-radius: 30px;
                    }
                }
            }
        }
    }
`;

export const BoardTable = ({ data, title }: any) => {
    const tempData = data.slice(2, -1);

    return (
        <Wrapper>
            <TableWrapper className="relative">
                <div className="tableTitle">{title}</div>

                <div className="topRankings">
                    <div className="item gold flex flex-col justify-center items-center">
                        <div className="avatar flex items-center justify-center">
                            <img src="/assets/imgs/temp_nft.png" />
                        </div>

                        <div className="name relative">
                            Lidgy pudgy #843
                            <span className="ranking">#1</span>
                            <span className="score">439</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center w-full silverBronzeWrapper">
                        <div className="item silver flex flex-col justify-center items-center">
                            <div className="avatar flex items-center justify-center">
                                <img src="/assets/imgs/temp_nft.png" />
                            </div>

                            <div className="name relative">
                                Lidgy pudgy #843
                                <span className="ranking">#2</span>
                                <span className="score">321</span>
                            </div>
                        </div>

                        <div className="item bronze flex flex-col justify-center items-center">
                            <div className="avatar flex items-center justify-center">
                                <img src="/assets/imgs/temp_nft.png" />
                            </div>

                            <div className="name relative">
                                Lidgy pudgy #843
                                <span className="ranking">#3</span>
                                <span className="score">155</span>
                            </div>
                        </div>
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th align="center">ONFT</th>
                            <th align="center">Name</th>
                            <th align="center">Wealth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tempData.map((item: any, index: number) => (
                            <tr key={`tableItem${index}`}>
                                <td>#{index + 4}</td>
                                <td align="center" className="nft">
                                    <img
                                        src="/assets/imgs/temp_nft.png"
                                        alt="pic"
                                    ></img>
                                </td>
                                <td>Building #123</td>
                                <td align="center">105</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableWrapper>
        </Wrapper>
    );
};

export default BoardTable;
