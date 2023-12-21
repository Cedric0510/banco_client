import NavBarHome from "../navBars/NavBarHome";
import ConnectionForm from "../forms/FormulaireDeConnexion/ConnectionForm";

function HomePage(){
    // là j'écris ma logique

    // dans return j'envoie à index.html
    return(
        <>
        <NavBarHome />
          <h1>Welcome Home Page</h1>
        <ConnectionForm />
        </>   
    )
};

export default HomePage;
