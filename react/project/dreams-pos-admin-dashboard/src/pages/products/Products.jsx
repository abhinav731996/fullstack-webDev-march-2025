import Layout from '../../components/layout/Layout'

const Products = () => {
  return (
    <Layout>
      <div className='table-card'>
        <div className='d-flex justify-content-between align-items-center mb-3'>
          <h4>Products</h4>
          <button className='btn btn-primary'>Add Product</button>
        </div>

        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Headphones</td>
              <td>Electronics</td>
              <td>$250</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default Products
