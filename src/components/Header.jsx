import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../context/productContext'
import { BasketContext } from '../context/basketContext'

const Header = () => {
  const { setSelectedCategory } = useContext(ProductContext)
  const {basket} = useContext(BasketContext)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => setCategories(res.data))
  }, [])

  // Sepetteki ürün sayısı
  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);
  return (
    <nav className="navbar bg-body-tertiary fixed-sticky mb-5">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Context Store</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/checkout">Basket <span className='badge bg-danger mx-1'>{totalAmount}</span></NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Kategoriler
                </a>
                <ul className="dropdown-menu">
                <li onClick={() => setSelectedCategory(null)}>
                    <a className='dropdown-item'>Hepsi</a>
                  </li>
                  {categories.map((category) => (<li onClick={() => setSelectedCategory(category)}>
                    <a className='dropdown-item'>{category}</a>
                  </li>))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header