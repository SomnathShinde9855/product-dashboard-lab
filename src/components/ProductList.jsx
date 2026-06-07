import ProductCard from './ProductCard'
import { Stack, Typography } from '@mui/material'

function ProductList({ products }) {
  const inStockProducts = products.filter((product) => product.inStock)

  return (
    <>
      {inStockProducts.length === 0 ? (
        <Typography variant="h6" color="error" align="center">
          No products are currently in stock.
        </Typography>
      ) : (
        <Stack spacing={2}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Stack>
      )}
    </>
  )
}

export default ProductList
