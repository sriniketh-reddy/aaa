import {useEffect,useState} from "react"
import "./index.css"

const FrontSide = (props) => {
    const {fullName,gender,DOB,adNo,picUrl} = props;
    let [translatedName,setTranslatedName] = useState("");

    useEffect(()=>{
        setTranslatedName(translate(fullName));
    },[]);

    async function translate(x) {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=${encodeURIComponent(x)}`;
        try {
        const res = await fetch(url);
        const data = await res.json();
        return data[0][0][0] // Translation is here
        } catch (error) {
        console.error('Translation failed:', error);
        return "";
        }
    };

    return(
        <div className="aadhaar-card">
            <div className="header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png" className="gov-logo" alt="Emblem" />
            <div className="gov-logo-1">
                <img src="image.png" className="main-logo" alt="Emblem" />
            </div>
            <img src="image4.webp" style={{width: "60px"}} alt="img4"/>
            </div>

            <div className="profile-section">
            <img src={picUrl || `https://randomuser.me/api/portraits/${gender==="male"?"men":"women"}/${Math.floor(Math.random() * 100)}.jpg`} alt="profile" className="profile-photo" />
            <div className="info">
                <h4 className="name">{translatedName}</h4>
                <h4 className="name">{fullName}</h4>
                <p className="name"><span className="bold">जन्म तिथि/ DOB:</span> {DOB.split('-').reverse().join('/')}</p>
                {gender==="male"? 
                <p className="name bold">पुरुष/ Male</p>
                :<p className="name bold">महिला / Female</p>}
            </div>
            <img src="image1.png" className="qr-code qr" alt="QR Code" />
            </div>

            <div className="aadhaar-number">{adNo.slice(0,4)+" "+adNo.slice(4,8)+" "+adNo.slice(8)}</div>

            <div className="footer">
            <div className="bold"><span style={{color: "rgb(255, 68, 0)"}}>आधार</span> — सामान्य माणसाचा अधिकार</div>
            </div>
        </div>
    )
}

export default FrontSide;