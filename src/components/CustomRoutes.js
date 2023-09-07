import { Route, Routes } from "react-router-dom";
import FetchImage from "./FetchImage";
import FetchIndividualDetailsRouter from "./FetchIndividualDetailsRouter";

function CustomRoutes(){
    return (
        <Routes>
            <Route path="/" exact element={<FetchImage/>} />
            <Route path="/image/:id" exact element={<FetchIndividualDetailsRouter/>} />
        </Routes>
    )
}

export default CustomRoutes;