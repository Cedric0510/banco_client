import FooterTemplate from "./FooterTemplate";
import { Link } from "react-router-dom";

function FooterAdmin(){
    return(
        <>
        <FooterTemplate value1={"Se Déconnecter"} link1={"/"} />
        </>
    )
};

export default FooterAdmin;