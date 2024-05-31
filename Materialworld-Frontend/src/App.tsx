import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NFTListing from "./pages/NFTListing";
import SingleNFT from "./pages/SingleNFT";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nftListing" element={<NFTListing />} />
                <Route path="/nftListing/:id" element={<SingleNFT />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default App;
