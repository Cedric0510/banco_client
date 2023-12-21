import FooterTemplate from "./FooterTemplate";
import { Link } from "react-router-dom";

function FooterHome(){
    return(
        <>
        <FooterTemplate value1={"Qui nous sommes"} link1={"/about"} value2={"Se Connecter"} link2={"/"} value7={"HOME"} />
        </>
    )
};

export default FooterHome;