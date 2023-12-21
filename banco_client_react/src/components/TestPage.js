//import ici votre élément
import NavBarTemplate from "./navBars/NavBarTemplate";
import MyBudgetButton from "./buttons/MyBudgetButton";
import ManageButtonBudget from "./buttons/ManageButtonBudget";

function TestPage(){

    return (
        <>
        <h1>Page de test</h1>
        <NavBarTemplate />
        <MyBudgetButton />
        <ManageButtonBudget />
        <p>Testez ici votre élement</p>
        </>
    )

};

export default TestPage;