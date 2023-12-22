import NavBarHome from "../navBars/NavBarHome";
import ConnectionForm from "../forms/FormulaireDeConnexion/ConnectionForm";
import { Link } from "react-router-dom";
import FooterHome from "../footers/FooterHome";

function HomePage(){
    // là j'écris ma logique

    // dans return j'envoie à index.html
    return(
        <>
        <NavBarHome />
          <h1>Welcome Home Page</h1>
        <ConnectionForm />
        <p className="signupInvitation">Pas encore de compte? <Link to={"/signup"}>Rejoignez-nous</Link> </p>
        <FooterHome />
        </>   
    )
};

export default HomePage;
