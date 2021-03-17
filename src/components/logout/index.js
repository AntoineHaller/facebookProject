import React from 'react';
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const Logout = props => {
    const history = useHistory()

    const handleLogout = () =>{
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <Container>
            <Text>Bonjour {localStorage.getItem('username')} !</Text>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </Container>
    );
};

const LogoutButton = styled.button`
padding:5px;
background-color:#2f477a;
color:white;
box-shadow: 1px 1px 4px 1px #292d3b;
`

const Text = styled.p`
padding:5px;
margin:0;
`

const Container = styled.div`
background-color:white;
display: flex;
justify-content:space-between;
`

export default Logout;