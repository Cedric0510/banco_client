import NavBarTemplate from "./NavBarTemplate";
import { Link } from "react-router-dom";

function NavBarHome(){
    return(
        <>
        <NavBarTemplate NavValue6={"SE CONNECTER"} NavLink6={"/"} NavValue5={"Qui sommes nous ?"} NavLink5={"/about"} />
        </>
    )
};

export default NavBarHome;