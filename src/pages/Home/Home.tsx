import { Typography } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

const Home = () => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                align="center"
                sx={{ marginBottom: '30px' }}
            >
                List of Products
            </Typography>
            <ProductsList />
            <Reviews />
        </>
    )
}

export default Home
