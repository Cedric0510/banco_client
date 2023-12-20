import NavBarTemplate from "./NavBarTemplate";
import { Link } from "react-router-dom";

function NavBarHome(){
    return(
        <>
        <NavBarTemplate value4={"SE CONNECTER"} link4={"/"} value3={"QUI NOUS SOMMES"} link3={"/about"} />
        </>
    )
};

export default NavBarHome;