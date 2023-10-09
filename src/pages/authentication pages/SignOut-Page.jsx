import { Link } from "react-router-dom"

export default function SignOutPage () {
    return (
        <>
            <Link to="/signin">
            <button>Sair da minha conta</button>
            </Link>
        </>
    )
}