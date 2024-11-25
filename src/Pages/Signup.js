import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #4e9eab, #6d67e4);
`;

const FormContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #6d67e4;
    box-shadow: 0 0 5px rgba(109, 103, 228, 0.3);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #6d67e4;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4e9eab;
  }
`;

const Link = styled.a`
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #6d67e4;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [id, setId] = useState('')
    const navigate =useNavigate('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("*&*");
        if (password == confirmPassword) {
            if (email == "" && password == "")
                return alert("invaild eamil or password");
            axios.post("https://670e4b8a073307b4ee464403.mockapi.io/admin", {
                name,
                email,
                password,
            });
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            navigate('/login')
        } else {
            alert("Miss Match Password");
        }
    };
    const DeleteData = (id) => {
        // axios.delete(`https://66f0f85341537919154f06e7.mockapi.io/signup/1`);
    };

    return (
        <div>
            <Wrapper>
                <FormContainer>
                    <Title>Create an Account</Title>
                    <form onClick={handleSubmit}>
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Input
                            type="C-password"
                            name="Confirm password"
                            placeholder="C-Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />

                        <Button type="submit">Sign Up</Button>
                    </form>
                    <Link href="/login">Already have an account? Log in</Link>
                </FormContainer>
            </Wrapper>
        </div>
    )
}

export default Signup