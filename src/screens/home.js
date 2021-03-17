import React, {useState, useEffect} from 'react';
import Logout from '../components/logout'
import {Link} from 'react-router-dom'
import styled from 'styled-components'



const Home = props => {
    const [postState, setPostState] = useState([])

    useEffect(()=>{
        console.log(postState)
    })

    const submit = e =>{
        e.preventDefault()
        setPostState([...postState, {key: Date.now(), content: e.target.content.value, username: localStorage.getItem('username'), date: new Date().toLocaleDateString()}])
    }
    
    return(
        <div>
            <Logout></Logout>
            <StyledForm onSubmit={submit}>
                <StyledInput 
                name='content' 
                placeholder='blabla' 
                type='textarea'
                area
                ></StyledInput>
                <StyledInput type='submit' value="Post"></StyledInput>
            </StyledForm>
            <div>
                {postState.map(post => 
                <StyledPost key={post.key}>
                    <StyledText>{post.username}</StyledText>
                    <StyledText date>{post.date}</StyledText>
                    <StyledText>{post.content}</StyledText>
                </StyledPost>
                )}
            </div>
        </div>
    )
}

const StyledForm = styled.form`
width:100%;
`

const StyledPost = styled.div`
background-color:white;
border-radius:5px;
`

const StyledText = styled.p`

display:flex;
justify-content:center;
font-size: ${props => (props.date ? '10px' : '16px')};
`

const StyledInput = styled.input`
margin: 10px 0px;
width:100%;
border-radius: 2px;
border:none;
background-color: ${props => (props.area ? 'white' : '#2f477a')};
height: 30px;
color: ${props => (props.area ? 'black' : 'white')};
font-weight: ${props => (props.area ? 'normal' : 'bold')};
box-shadow: 1px 1px 4px 1px #292d3b;
`

export default Home