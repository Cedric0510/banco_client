import FooterTemplate from "./FooterTemplate";
import { Link } from "react-router-dom";

function FooterHome(){
    return(
        <>
        <FooterTemplate value1={"QUI NOUS SOMMES"} link1={"/about"} value2={"Se Connecter"} link2={"/"} />
        </>
    )
};

export default FooterHome;