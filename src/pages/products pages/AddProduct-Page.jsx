// import axios from "axios"
import {  useNavigate } from "react-router-dom"
import { useState } from "react"
// import Context from "../../contexts/Context"
import APIConnectionProducts from "../../services/APIConnection-Products"

export default function AddProductPage () {
    const [form, setForm] = useState( { product: "", price: "", description: "", image: "" } )
    const [checked, setChecked] = useState(false)
    const navigate = useNavigate()
    // const { token } = useContext(Context)
    // const [promise, setPromise] = useState()

    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // }

    // function handleAddNewProduct(event) {
    //     event.preventDefault()
        
    //     const url = axios.post(`${import.meta.env.VITE_API_URL}/products/add`, config)
    //     .then((response) => {
    //         console.log("aqui")
    //         console.log(response.data)
    //         setPromise(response.data) })
    //         alert("Produto adicionado com sucesso!")
    //         navigate("/products")
    //     .catch((error) => console.log(error))
    // }

    function handleForm(event) {
        const { name, value } = event.target
        setForm( {...form, [name]: value } )
      }

    function handleCheckBoxes(event) {
        setChecked(!checked)
    }

    function handleAddNewProduct(event) {
        event.preventDefault()

        APIConnectionProducts.addNewProduct(form)
        .then(response => {
            console.log(response)
            alert("Produto adicionado com sucesso!")
            navigate("/products")
        })
        .catch(error => console.log(error.response.data))
    }

    return (
        <form onSubmit={handleAddNewProduct}>
            <h1>Adicionar produto</h1>
            <input
                name="product"
                placeholder="O que você quer ofertar?"
                type="text"
                required
                value={form.product}
                onChange={handleForm}
            />
            <input
                name="description"
                placeholder="Descreva seu produto."
                type="text"
                required
                value={form.description}
                onChange={handleForm}
            />
            <input
                name="price"
                placeholder="Preço"
                type="text"
                required
                value={form.price}
                onChange={handleForm}
            />
            <input
                name="image"
                placeholder="imagem"
                type="text"
                required
                value={form.image}
                onChange={handleForm}
            />
            <p>Categorias:</p>
            <input
                type="checkbox"
                name="category"
                value="calçado"
                defaultChecked={checked}
                onClick={handleCheckBoxes}
            />
            <h5>Calçado</h5>
            <input
                type="checkbox"
                name="category"
                value="vestimenta"
                defaultChecked={checked}
                onClick={handleCheckBoxes}
            />
            <h5>Vestimenta</h5>
            <input
                type="checkbox"
                name="category"
                value="inverno"
                defaultChecked={checked}
                onClick={handleCheckBoxes}
            />
            <h5>Inverno</h5>
            <input
                type="checkbox"
                name="category"
                value="verão"
                defaultChecked={checked}
                onClick={handleCheckBoxes}
            />
            <h5>Verão</h5>
            <button type="submit">Adicionar</button>
        </form>
    )
}