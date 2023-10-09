import axios from "axios"
import { useContext } from "react"
import Context from "../contexts/Context"

function addNewProduct (body) {
    // const { token } = useContext(Context)
    // const [promise, setPromise] = useState()

    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // }

    const result = axios.post(`${import.meta.env.VITE_API_URL}/products/add`, body)

    return result
}

function listProducts (body) {
    const result = axios.get(`${import.meta.env.VITE_API_URL}/products/add`, body)

    return result
}

function getSingleProduct () {
    const { token } = useContext(Context)

    const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

    const result = axios.get(`${import.meta.env.VITE_API_URL}/products/:id`, config)

    return result
}

const APIConnectionProducts = { addNewProduct, listProducts, getSingleProduct }

export default APIConnectionProducts