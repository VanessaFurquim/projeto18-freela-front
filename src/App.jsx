import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Context from "./contexts/Context"
import SignInPage from "./pages/authentication pages/SignIn-Page"
import SignOutPage from "./pages/authentication pages/SignOut-Page"
import SignUpPage from "./pages/authentication pages/SignUp-Page"
import ListProductsPage from "./pages/products pages/ListProducts-Page"
import SingleProductPage from "./pages/products pages/SingleProduct-Page"
import AddProductPage from "./pages/products pages/AddProduct-Page"
import UsersCatalogPage from "./pages/User/UsersCatalog-Page"

export default function App() {
  const tokenOnLocalStorage = localStorage.getItem("token")
  const [token, setToken] = useState(tokenOnLocalStorage)

  function setAndPersistToken(token) {
		setToken(token)
		localStorage.setItem("token", token)
	}
  
  return (
    <Context.Provider value={{token, setToken, setAndPersistToken}}>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signout" element={<SignOutPage />} />
          <Route path="/products" element={<ListProductsPage />} />
          <Route path="/products/1" element={<SingleProductPage />} />
          <Route path="/products/add" element={<AddProductPage />} />
          <Route path="/users/my_catalog" element={<UsersCatalogPage />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}