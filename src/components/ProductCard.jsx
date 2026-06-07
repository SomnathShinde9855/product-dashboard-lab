import styles from '../styles/ProductCard.module.css'
import { Card, CardContent, Typography, Button, Box } from '@mui/material'

function ProductCard({ product }) {
  const { name, price, inStock } = product

  return (
    <Card className={`${styles.card} ${!inStock ? styles.outOfStock : ''}`}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h6" component="h2">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            ${price.toFixed(2)}
          </Typography>
        </Box>

        <Typography className={styles.stock} color={inStock ? 'success.main' : 'error.main'}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </Typography>

        <Button variant="contained" color="primary" disabled={!inStock} sx={{ mt: 2 }}>
          {inStock ? 'Add to Cart' : 'Notify Me'}
        </Button>
      </CardContent>
    </Card>
  )
}

export default ProductCard
