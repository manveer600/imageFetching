import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import FetchIndividualDetails from "./FetchIndividualDetails";
import './FetchImage.css'
function FetchImage() {
    const [data, setData] = useState([]);
    const[offset,setOffSet] = useState(0);
    const [limit,setLimit] = useState(10);
    
    async function getImage() {
        const url = `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}`;
        const response = await axios.get(url);
        console.log(response.data);
        const ans = response.data.photos.map((photo) => {
            return {
                description: photo.description,
                id: photo.id,
                url: photo.url,
                title: photo.title,
                user: photo.user
            }
        });
        setData(ans);
        // console.log(data);        
    }

    function next(){
        setOffSet(offset+10);
        setLimit(limit+10);
    }

    function previous(){
        setOffSet(offset-10);
        setLimit(limit-10);
    }


    // console.log("1", data);
    useEffect(() => {
        getImage();
    }, [offset,limit])
    return (
        <div>
            {
                data.map((object) => {
                    return <FetchIndividualDetails data={object} key={object.id}/>
                })
            }

            <div className="buttons">
                <button disabled={offset <= 0} onClick={previous}>Previous</button>
                <button disabled={offset >= 132} onClick={next}>Next</button>
            </div>
        </div>
    )
}

export default FetchImage;