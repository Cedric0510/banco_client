import NavBarHome from "../navBars/NavBarHome";
import SignUpForm from "../forms/FormulaireDinscription/SignUpForm";
import FooterHome from "../footers/FooterHome";

function SignUpPage(){
    return(
        <>
        <NavBarHome />
        <h1>Welcome Sign Up Page</h1>
        <SignUpForm />
        <FooterHome />
        </>
        
    )
};

export default SignUpPage;