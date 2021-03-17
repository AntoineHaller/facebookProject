import React, {useEffect} from 'react'
import Signin from '../components/signin'
import axios from 'axios'


const submit = (e, formState, setErrorMsg, history) =>{
    e.preventDefault()

    if(!formState.username || !formState.password){
        setErrorMsg('One of the field is empty.')
        return
    }
    axios({
        method: 'POST',
        url: 'https://easy-login-api.herokuapp.com/users/login',
        data: {
            username: formState.username,
            password: formState.password
        }
    }).then(res => {
        localStorage.setItem('token', res.headers['x-access-token'])
        localStorage.setItem('username', formState.username)
        history.push('/home')
    }).catch(err => {
        setErrorMsg('Login Error: There is an error in logging you into this application. Please try again later.')
        console.log(err)
    })
}

const Login = ({history}) => {

    //rediriger l'utilisateur déjà connecté
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            history.push('/home')
        }
    },[])

    return(
        <div>
            <Signin submit={submit}></Signin>
        </div>
    )
}

export default Login