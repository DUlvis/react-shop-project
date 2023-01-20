import { Grid } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
import ProductsListItem from './ProductsListItem'

type ProductProps = {
    id: number
    name: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

const ProductsList = () => {
    const productsArray = useAppSelector((state) => state.products)

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map(
                    (
                        {
                            id,
                            name,
                            desc,
                            type,
                            capacity,
                            price,
                            image,
                        }: ProductProps,
                        i
                    ) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                id={id}
                                title={name}
                                desc={desc}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
