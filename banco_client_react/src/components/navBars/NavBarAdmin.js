import NavBarTemplate from "./NavBarTemplate";
import { Link } from "react-router-dom";

function NavBarAdmin(){
    return(
        <>
        <NavBarTemplate NavValue3={"Espace Admin"} NavValue6={"SE DECONNECTER"} NavLink6={"/"} />
        </>
    )
};

export default NavBarAdmin;