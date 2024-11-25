import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [apiData, setApiData] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate('');

    useEffect(() => {
        axios.get('https://670e4b8a073307b4ee464403.mockapi.io/admin')
            .then((response) => {
                setApiData(response.data);
            });
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();

        if (email) {
            if (password) {
                let EmailData = apiData.filter((items) => items.email == email);
                console.log("db true");
                if (EmailData.length == 0) {
                    alert("can't see your email, pls register first");
                    navigate('/signup')
                    
                } else {
                    if (password == EmailData[0]?.password) {
                        alert("login successfully");
                        navigate('/products')
                    } else {
                        alert("please enter correct password");
                    }
                }
            } else {
                alert("please fill the password");
            }
        } else {
            alert("please fill the email");
        }
    }
    return (
        <div>
            <div style={styles.container}>
                <div style={styles.formContainer}>
                    <h2 style={styles.title}>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            style={styles.input}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            style={styles.input}
                            required
                        />
                        <button type="submit" style={styles.button}>
                            Log In
                        </button>
                    </form>
                    <a href="/signup" style={styles.link}>Don't have an account? Sign up</a>
                </div>
            </div>
        </div>
    )
}
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
    },
    formContainer: {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '350px',
    },
    title: {
        textAlign: 'center',
        fontSize: '24px',
        color: '#333',
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        padding: '12px',
        margin: '10px 0',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '16px',
        outline: 'none',
    },
    button: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#45a049',
    },
    link: {
        display: 'block',
        textAlign: 'center',
        marginTop: '20px',
        color: '#4CAF50',
        textDecoration: 'none',
    },
};

export default Login