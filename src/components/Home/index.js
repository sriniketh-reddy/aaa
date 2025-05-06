import {useState} from 'react';
import { useNavigate } from 'react-router';
import "./index.css";

const Home = () => {
    const navigate = useNavigate();
    const [details,setDetails] = useState({fullName: "",gender: "male",DOB: "",address: "",picUrl: "",adNo: "",fatherName: ""});
    const handleChange = (e) => {
        const {id,value} = e.target;
        if(id === "male" || id === "female"){
            setDetails({...details,gender: value});
            return;
        } 
        setDetails({...details,[id]:value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/adhaar', {
            state: details
        });
    }
    
    return (
        <div className="main-container">
            <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
                <label htmlFor="fullName">
                    Full Name:
                </label>
                <input type="text" id="fullName" value={details.fullName} />
                <br />
                <label htmlFor="gender">
                    Gender:
                </label>
                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Female</label>
                <br />
                <label htmlFor="DOB">
                    Date of Birth:
                </label>
                <input type="date" id="DOB" value={details.DOB} />
                <br />
                <label htmlFor="address">
                    Address:
                </label>
                <textarea id="address" value={details.address} />
                <br />
                <label htmlFor="picUrl">
                    Picture URL:
                </label>
                <input type="text" id="picUrl" value={details.picUrl} />
                <br />
                <label htmlFor="adNo">
                    Aadhar Number:
                </label>
                <input type="text" id="adNo" value={details.adNo} />
                <br />
                <label htmlFor="fatherName">
                    Father's Name:
                </label>
                <input type="text" id="fatherName" value={details.fatherName} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Home;