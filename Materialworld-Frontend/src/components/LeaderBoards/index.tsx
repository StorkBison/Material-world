import styled from "styled-components";
import BoardTable from "./boardTable";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Wrapper = styled.div`
    position: relative;
    max-width: 1368px;

    .title {
        font-size: 2.5rem;
        text-shadow: 0 0 64px rgba(192, 219, 255, 0.48),
            0 0 16px rgba(65, 120, 255, 0.24);
        font-weight: 600;
        color: rgba(255, 255, 255, 0.96);
        text-align: center;
        text-transform: uppercase;
    }

    .react-tabs {
        width: 95%;
        max-width: 800px;
        position: relative;
        margin: auto;

        .react-tabs__tab-list {
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.4);
            background: #384993;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;

            .react-tabs__tab {
                padding: 0.5rem 1rem;
                flex-basis: 33.33%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.2rem;
                color: #d7d7d7;
                transition: 0.3s all;
                border-radius: 5px 5px 0 0;

                &:hover {
                    background: #7ba2ed;
                }
            }

            .react-tabs__tab--selected {
                background: #6283bf;
                color: white;
                text-shadow: 0 0 64px rgba(192, 219, 255, 0.48),
                    0 0 16px rgba(65, 120, 255, 0.24);
                font-weight: 700;

                &:after {
                    width: 0px;
                }
            }
        }

        .react-tabs__tab-panel {
            background: #0000001f;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    }
`;

export const LeaderBoards = () => {
    const data = new Array(10).fill(10);

    return (
        <Wrapper className="container m-auto">
            <div className="title mb-8">leaderboards</div>

            <Tabs>
                <TabList>
                    <Tab>Wealth</Tab>
                    <Tab>Degen</Tab>
                    <Tab>Traveler</Tab>
                </TabList>

                <TabPanel>
                    <BoardTable data={data} title={"Wealth LeaderBoard"} />
                </TabPanel>

                <TabPanel>
                    <BoardTable data={data} title={"Degen LeaderBoard"} />
                </TabPanel>

                <TabPanel>
                    <BoardTable data={data} title={"Traveler LeaderBoard"} />
                </TabPanel>
            </Tabs>
        </Wrapper>
    );
};

export default LeaderBoards;
