import FetchImage from "./components/FetchImage";
import './App.css'
import CustomRoutes from "./components/CustomRoutes";
import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      <div className="imageHeading"><Link to={'/'}>Images</Link></div>
      <CustomRoutes/>
    </div>
  );
}

export default App;
