import { Link } from "react-router-dom"

export default function SingleProductPage () {
    const { product, price, description, image } = response.data

    function getSingleProduct (id) {
        const { token } = useContext(Context)
    
        const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
    
        const result = axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`, config)
    
        return result
    }

    return (
        <div>
            <img src={image} />
            <h1>{product}</h1>
            <h3>Product description</h3>
            <h2>R$00,00</h2>
            <Link to="/products">Voltar</Link>
        </div>
    )
}