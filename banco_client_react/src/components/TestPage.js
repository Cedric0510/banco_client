//import ici votre élément
import ConnectionForm from "./forms/FormulaireDeConnexion/ConnectionForm";
import SignUpForm from "./forms/FormulaireDinscription/SignUpForm";
import NavBarTemplate from "./navBars/NavBarTemplate";

function TestPage(){

    return(
        <>
        <h1>Page de test</h1>
        <SignUpForm />
        <p>Testez ici votre élement</p>
        </>
    )

};

export default TestPage;