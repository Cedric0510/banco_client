import FooterTemplate from "./FooterTemplate";
import { Link } from "react-router-dom";

function FooterAdmin(){
    return(
        <>
        <FooterTemplate FooterValue1={"Se Déconnecter"} FooterLink1={"/"} />
        </>
    )
};

export default FooterAdmin;