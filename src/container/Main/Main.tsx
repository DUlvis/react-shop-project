import { Container } from '@mui/material'
import AboutPage from 'pages/AboutPage/AboutPage'
import CartPage from 'pages/CartPage/CartPage'
import Home from 'pages/Home/Home'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import { Route, Routes } from 'react-router-dom'

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsInCart: { [id: number]: number }
    removeProductFromCart: (id: number) => void
    changeProductToCart: (id: number, count: number) => void
}

const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
    changeProductToCart,
}: Props) => {
    return (
        <Container maxWidth="lg" sx={{ padding: '50px 0' }} component="main">
            <Routes>
                <Route
                    path="/"
                    element={<Home addProductToCart={addProductToCart} />}
                />
                <Route path="about" element={<AboutPage />} />
                <Route path="shipping" element={<ShippingPage />} />
                <Route path="payment" element={<PaymentPage />} />
                <Route
                    path="cart"
                    element={
                        <CartPage
                            productsInCart={productsInCart}
                            removeProductFromCart={removeProductFromCart}
                            changeProductToCart={changeProductToCart}
                        />
                    }
                />
            </Routes>
        </Container>
    )
}

export default Main
