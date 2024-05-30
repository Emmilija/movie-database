import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginFailure } from "./authSlice";
const LoginLogics = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(true);
    // eslint-disable-next-line
    const [loginStatus, setLoginStatus] = useState(null);
    const dispatch = useDispatch();
const navigate = useNavigate();
    const loggedin = useSelector((state) => state.auth.user);

    const handleLogin = async(e) => {
e.preventDefault();
try {
    // Simulate API call with setTimeout, replace with actual API call
    setTimeout(() => {
        // For demo, assuming success when email is 'demo' and password is 'password'
        if (email === "demo@gmail.com" && password === "password") {
            dispatch(loginSuccess({ email }));
            setLoginStatus("success");
            navigate('/favorites')
        } else {
            dispatch(loginFailure());
            setLoginStatus("failure");
        }
    }, 1000); 
} catch (error) {
    console.error('Login failed:', error);


}
};


    return {email, setEmail, password, setPassword, visible, setVisible, handleLogin, loggedin}
}


export default LoginLogics;