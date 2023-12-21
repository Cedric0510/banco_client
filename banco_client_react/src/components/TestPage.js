//import ici votre élément
import NavBarTemplate from "./navBars/NavBarTemplate";
import MyBudgetButton from "./buttons/MyBudgetButton";
import ManageButtonBudget from "./buttons/ManageButtonBudget";
import BackAdminButton from "./buttons/BackAdminButton";
import AccessClientAccountButton from "./buttons/AccessClientAccount";

function TestPage(){

    return (
        <>
        <h1>Page de test</h1>
        <NavBarTemplate />
        <MyBudgetButton />
        <ManageButtonBudget />
        <BackAdminButton />
        <AccessClientAccountButton />
        <p>Testez ici votre élement</p>
        </>
    )

};

export default TestPage;