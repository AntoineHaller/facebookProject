import React, {useState} from 'react';
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Signin = ({submit}) => {
    const [formState, setFormState] = useState({username: '', password: ''})
    const [errorMsg, setErrorMsg] = useState('')

    const history = useHistory()

    return (
        <StyledForm onSubmit={(e) => submit(e,formState,setErrorMsg,history)}>
            <StyledSpan>facebook</StyledSpan>
            <StyledInput placeholder='Username' onChange={e => setFormState({...formState, username: e.target.value})} type='text'></StyledInput>
            <StyledInput placeholder='Password' onChange={e => setFormState({...formState, password: e.target.value})} type='password'></StyledInput>
            <StyledError>{errorMsg}</StyledError>
            <StyledInput type='submit' value="Log in" submitButton></StyledInput>
        </StyledForm>
    );
};

const StyledError = styled.p`
font-size:16px;
color:#ad0909;
font-weight:bold;
`

const StyledSpan = styled.span`
font-size:40px;
color:white;
font-weight:bold;
margin:80px 0;
`

const StyledForm = styled.form`
display: flex;
flex-direction: column;
padding: 0 30px;
align-items: center;
justify-content:center;
`

const StyledInput = styled.input`
margin: 10px 0px;
width:100%;
border-radius: 2px;
border:none;
background-color: ${props => (props.submitButton ? '#2f477a' : 'white')};
height: 30px;
color: ${props => (props.submitButton ? 'white' : 'black')};
font-weight: ${props => (props.submitButton ? 'bold' : 'normal')};
padding: 0px 6px;
box-shadow: 1px 1px 4px 1px #292d3b;
`

export default Signin;