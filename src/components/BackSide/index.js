import {useEffect,useState} from "react"
import "./index.css"

const BackSide = (props) => {    
    const {address,adNo,fatherName,gender} = props;
    const [translatedFatherName,setTranslatedFatherName] = useState("");
    const [translatedAddress,setTranslatedAddress] = useState("");

    useEffect(()=>{
        setTranslatedFatherName(translate(fatherName));
        setTranslatedAddress(translate(address));
    },[address,fatherName]);

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
    return (
        <div className="aadhaar-back">
            <div className="header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png" className="gov-logo" alt="Emblem" />
                <div className="gov-logo-1">
                    <img src="image5.png" className="main-logo" alt="Emblem" />
                </div>
                <img src="image4.webp" style={{width: "60px"}} alt="img4"/>
            </div>
            <div className="main">
                <div className="address-section">
                <p className="address a1"><strong>पता:</strong> {gender==="male"?"S":"D"}/O: {translatedFatherName}, {translatedAddress}</p>
                <p className="address"><strong>Address:</strong> {gender==="male"?"S":"D"}/O: {fatherName}, {address}</p>
                </div>
                <div className="qr-code">
                    <img src="image1.png" className="qr" alt="Barcode" />
                </div>
            </div>

            <div className="aadhaar-number">{adNo.slice(0,4)+" "+adNo.slice(4,8)+" "+adNo.slice(8)}</div>

            <div className="footer-backside bold">
                <div style={{display: "flex",flexDirection: "row",alignItems: "center"}}>
                    <img src="phone.png" style={{width: "35px"}} alt="Phone"/>
                    <p style={{margin: "0px",fontSize: "12px"}}>1947</p>
                </div>
                <div style={{display: "flex",flexDirection: "row",alignItems: "center"}}>
                    <img src="message.png" style={{width: "40px"}} alt="Message"/>
                    <p style={{margin: "0px",fontSize: "12px"}}>help@uidai.gov.in</p>
                </div>
                <div style={{display: "flex",flexDirection: "row",alignItems: "center"}}>
                    <img src="globe.png" style={{width: "35px"}} alt="Globe"/>
                    <p style={{margin: "0px",fontSize: "12px"}}>www.uidai.gov.in</p>
                </div>
            </div>
        </div>
    )
}

export default BackSide;