import React, { useEffect, useState } from 'react';
import {useCookies} from 'react-cookie';
import { useNavigate } from "react-router-dom";
import './css/login.css';

export default function Register(){
    let navigate = useNavigate();
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    //const[token, setToken] = useCookies(['mytoken']);
    //const [isLogin, setLogin] = useState(false);
    
    useEffect(() => {
        // console.log(token.mytoken)
        // if(token.mytoken != undefined){
        //     navigate('/inicio');
        // }
        // if(isLogin) {
        //     navigate('/inicio');
        //  }
    }, []);

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const request = await fetch('http://127.0.0.1:8000/users/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',           
            }, 
            body:JSON.stringify({username: username, password: password})
            })
            navigate('/')
            // console.log("json:", json.token, undefined);
           
            
            

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <div className="container d-flex justify-content-center " >
                <div className="form mt-5">
                <div className="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg"/></div>               
                <form className="register-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)}/>
                    <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button>Registrarse</button>
                    <p className="message">¿Ya estás registrado?<a href="/"> Inicia sesión</a></p>
                </form>
                </div>
            </div>  

        </div>

       
    )
}
