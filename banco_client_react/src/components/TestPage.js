//import ici votre élément

import NavBarTemplate from "./navBars/NavBarTemplate";
import FooterHome from "./footers/FooterHome";

function TestPage(){

    return(
        <>
        <h1>Page de test</h1>
        <NavBarTemplate />
        <p>Testez ici votre élement</p>
        <FooterHome />
        </>
    )

};

export default TestPage;