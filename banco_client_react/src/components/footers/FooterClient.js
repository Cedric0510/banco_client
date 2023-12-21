import FooterTemplate from "./FooterTemplate";
import { Link } from "react-router-dom";

function FooterClient(){
    return(
        <>
        <FooterTemplate value1={"Mon Compte"} link1={"/account"} value2={"Mes Transactions"} link2={"/details"} value3={"MON BUDGET"} link3={"/budget"} value4={"Mon Prévisionnel"} link4={"/forecast"} value5={"Virements"} link5={"/transfert"} value6={"Se Déconnecter"} link6={"/"} value7={"CLIENT"} />
        </>
    )
};

export default FooterClient;