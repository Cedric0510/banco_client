import NavBarTemplate from "./NavBarTemplate";
import { Link } from "react-router-dom";

function NavBarClient(){
    return(
        <>
        <NavBarTemplate NavValue1={"Mon Compte"} NavLink1={"/account"} NavValue2={"Mes Transactions"} NavLink2={"/details"} NavValue3={"Mon Budget"} NavLink3={"/budget"} NavValue4={"Mon Prévisionnel"} NavLink4={"/forecast"} NavValue5={"Virements"} NavLink5={"/transfer"} NavValue6={"Se déconnecter"} NavLink6={"/"} />
        </>
    )
};

export default NavBarClient;