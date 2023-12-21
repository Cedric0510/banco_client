//import ici votre élément

import NavBarTemplate from "./navBars/NavBarTemplate";
import FooterTemplate from "./footers/FooterTemplate";

function TestPage(){

    return(
        <>
        <h1>Page de test</h1>
        <NavBarTemplate />
        <p>Testez ici votre élement</p>
        <FooterTemplate />
        </>
    )

};

export default TestPage;