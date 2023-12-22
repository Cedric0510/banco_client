import FooterTemplate from "./FooterTemplate";
import { Link } from "react-router-dom";

function FooterHome(){
    return(
        <>
        <FooterTemplate FooterValue1={"Qui nous sommes"} FooterLink1={"/about"} FooterValue2={"Se Connecter"} FooterLink2={"/"} />
        </>
    )
};

export default FooterHome;