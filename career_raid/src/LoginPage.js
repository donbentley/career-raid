import React ,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';


function LoginPage() {
   // const [email, setEmail] = React.useState("");
   // const [password, setPassword] = React.useState("");
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    
    //const handlePassword = (event) => {
    //    setPassword(event.target.value);
   // }
   // const handleLogin = () => {
   //     setIsLoggedIn(true);
   //     navigate('/Add-Company');
   // }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const{email, password} = formData;
        console.log('Form Submitted:', formData);
        fetch("http://localhost:8082/login-user",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                email,
                password
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if(data.status==="ok") {
                    alert("login successful");
                    window.localStorage.setItem("token", data.data);
                    navigate('/App-Page')
                }
                else {
                    alert(data.error);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    return(
        <div className='loginPage-container' >
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                />
                <button 
                    class="donbutton"
                    type="submit"
                    //value={isLoggedIn}
                    onClick={handleSubmit}
                    >
                        Log In
                        </button>
                    <div className='logIn'>
                        <p>Dont have an account already? <a href="#">Sign Up</a></p>
                        </div>
            </form>
        </div>
    );
}

export default LoginPage;