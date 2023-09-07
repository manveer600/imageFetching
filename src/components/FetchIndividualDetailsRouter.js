import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './FetchIndividualDetailsRouter.css'
function FetchIndividualDetailsRouter() {
    const { id } = useParams(); // Use destructuring to get the 'id' param
    console.log("ID from URL:", id);
    const [data, setData] = useState({});

    async function call() {
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos');
        console.log("Response data:", response.data);
        const obj = response.data.photos.find((photo)=> String(photo.id) === id)
        console.log(obj)
        setData(obj);
    }

    useEffect(() => {
        call();
    }, [id]); 
    return (
        <div className="details">
           <div className="id"><span style={{"fontSize":"50px","fontWeight":"bold","textDecoration":"underline"}}>Id</span>:<span style={{"fontSize":"40px"}}>{data.id}</span></div>
           <div className="title"><span style={{"fontSize":"50px","fontWeight":"bold","textDecoration":"underline"}}>Title</span>:<span><i style={{"fontSize":"40px"}}>{data.title}</i></span></div>
           <div className="user"><span style={{"fontSize":"50px","fontWeight":"bold","textDecoration":"underline"}}>User</span>:<span><i style={{"fontSize":"40px"}}>{data.user}</i></span></div>
           <Link to={data.url}><img className="img" src={data.url}></img></Link>
           <div className="description"><span style={{"fontSize":"50px","fontWeight":"bold","textDecoration":"underline"}}>Description</span>:<span><i style={{"fontSize":"40px"}}>{data.description}</i></span></div>
            
        </div>
    );
}

export default FetchIndividualDetailsRouter;
