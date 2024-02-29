import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Error from "@pages/Error";
import Home from "./Home";

export default function PublicRouter() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
}
