import FooterTemplate from "./FooterTemplate";
import { Link } from "react-router-dom";

function FooterClient(){
    return(
        <>
        <FooterTemplate value1={"MON COMPTE"} link1={"/account"} value2={"MES TRANSACTIONS"} link2={"/details"} value3={"MON BUDGET"} link3={"/budget"} value4={"MON PREVISIONNEL"} link4={"/forecast"} value5={"VIREMENTS"} link5={"/transfert"} value6={"SE DECONNECTER"} link6={"/"} />
        </>
    )
};

export default FooterClient;