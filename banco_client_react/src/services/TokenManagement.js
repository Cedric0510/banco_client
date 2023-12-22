import { useNavigate } from "react-router-dom";

function  TokenManagement() {
    const storedToken = localStorage.getItem("token");
    const navigate = useNavigate();
    let currentUser;
        if (storedToken) {
          var base64Url = storedToken.split(".")[1];
          var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
          var jsonPayload = decodeURIComponent(
            window
              .atob(base64)
              .split("")
              .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
              })
              .join("")
          );
          currentUser = JSON.parse(jsonPayload).user_id;
          console.log(currentUser);

} else {

    navigate("/");
} 
console.log('après condition: ',currentUser);
return currentUser;
}

export default TokenManagement;