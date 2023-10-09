import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import Context from "../../contexts/Context"
import APIConnectionAuthentication from "../../services/APIConnection-Authentication"

export default function SignInPage () {
    const { token, setToken, setAndPersistToken } = useContext(Context)
    const [form, setForm] = useState( { email: "", password: "" } )
    const navigate = useNavigate()

    console.log(token)

    function handleForm(event) {
        const { name, value } = event.target
        setForm( {...form, [name]: value } )
      }
      
      function handleSignIn(event) {
        event.preventDefault()
        
        APIConnectionAuthentication.signIn(form)
        .then(response => {
            console.log(response)
            setAndPersistToken(response.data.token)
            alert("Login feito com sucesso!")
            navigate("/products")
        })
        .catch(error => console.log(error.response.data))
      }

    return (
        <>
            <form onSubmit={handleSignIn}>
                <h1>Login</h1>
                <input
                name="email"
                placeholder="Email"
                type="text"
                required
                value={form.email}
                onChange={handleForm}
                />
                <input
                name="password"
                placeholder="Senha"
                type="text"
                required
                value={form.password}
                onChange={handleForm}
                />
                <button type="submit">Entrar</button>
            </form>
            
            <Link to="/signup">
            Ainda não tem conta? Cadastre-se aqui!
            </Link>
        </>
    )
}