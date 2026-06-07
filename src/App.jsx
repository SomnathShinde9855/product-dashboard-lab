import ProductList from './components/ProductList'
import { Container, Typography, Box } from '@mui/material'

function App() {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: 129.99, inStock: true },
    { id: 2, name: 'Smart Watch', price: 199.99, inStock: true },
    { id: 3, name: 'Portable Speaker', price: 79.99, inStock: false },
    { id: 4, name: 'Gaming Mouse', price: 49.99, inStock: true }
  ]

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Product Dashboard
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Browse products and check availability at a glance.
        </Typography>
      </Box>

      <ProductList products={products} />
    </Container>
  )
}

export default App
