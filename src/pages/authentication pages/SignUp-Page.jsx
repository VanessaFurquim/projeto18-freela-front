import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import APIConnectionAuthentication from "../../services/APIConnection-Authentication"

export default function SignUpPage () {
    const [form, setForm] = useState( { name: "", cpf: "", phone: "", email: "", password: "" } )
    const navigate = useNavigate()

    function handleForm(event) {
        const { name, value } = event.target
        setForm( {...form, [name]: value } )
      }
      
      function handleSignUp(event) {
        event.preventDefault()
        
        APIConnectionAuthentication.signUp(form)
        .then(response => {
            console.log(response)
            alert("Cadastro criado com sucesso!")
            navigate("/products")
        })
        .catch(error => console.log(error.response.data))
      }

    return (
        <>
            <form onSubmit={handleSignUp}>
                <h1>Cadastro</h1>
                <input
                    name="name"
                    placeholder="nome"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleForm}
                />
                <input
                    name="cpf"
                    placeholder="CPF"
                    type="text"
                    required
                    value={form.cpf}
                    onChange={handleForm}
                />
                <input
                    name="phone"
                    placeholder="Telefone"
                    type="text"
                    required
                    value={form.phone}
                    onChange={handleForm}
                />
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
                <button type="submit">Cadastrar</button>
            </form>
            
            <Link to="/signin">
            Já tem uma conta! Faça login aqui!
            </Link>
        </>
    )
}