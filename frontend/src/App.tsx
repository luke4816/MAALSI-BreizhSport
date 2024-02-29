import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "@pages/public/PublicRouter";
import "@bootstrap/scss/bootstrap.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<PublicRouter />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
