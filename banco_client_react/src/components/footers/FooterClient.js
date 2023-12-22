import FooterTemplate from "./FooterTemplate";
import { Link } from "react-router-dom";

function FooterClient(){
    return(
        <>
        <FooterTemplate FooterValue1={"Mon Compte"} FooterLink1={"/account"} FooterValue2={"Mes Transactions"} FooterLink2={"/details"} FooterValue3={"Mon Budget"} FooterLink3={"/budget"} FooterValue4={"Mon Prévisionnel"} FooterLink4={"/forecast"} FooterValue5={"Virements"} FooterLink5={"/transfert"} FooterValue6={"Se Déconnecter"} FooterLink6={"/"} />
        </>
    )
};

export default FooterClient;