import { Link, useLocation } from "react-router-dom"
import FrontSide from "../FrontSide"
import BackSide from "../BackSide"
import "./index.css"


const AdhaarCard = () => {
    const location = useLocation();
    const {state={}} = location;
    const {fullName="xx",gender="male",DOB="xx",address="xx",picUrl="xx",adNo="xxxxxxxxxxxx",fatherName="xx"} = state;

    return (
        <div className="AdhaarCard">
            <div className="card-container">
                <FrontSide fullName={fullName} gender={gender} DOB={DOB} adNo={adNo} picUrl={picUrl}/>
                <BackSide address={address} adNo={adNo} gender={gender} fatherName={fatherName}/>
            </div>
            <Link to="/">
                <button type="button" className="btn btn-primary">Back</button>
            </Link>
            
        </div>
    )
}

export default AdhaarCard;