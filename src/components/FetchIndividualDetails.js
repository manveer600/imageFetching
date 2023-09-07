
import { Link } from 'react-router-dom';
import './FetchIndividualDetails.css';
function FetchIndividualDetails(props) {
    // console.log(props);
    // console.log(props.data);
    // console.log(props.data.url);
    // console.log(props.data.id);

    return (
        <Link to={`/image/${props.data.id}`}>
        <img src={props.data.url}></img>
    </Link>
    
    )
}

export default FetchIndividualDetails;