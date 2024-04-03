import { products } from '../data/index'
import Product from './Product'

const OurProducts = () => {
  return (
    <section>
      <div className="xl:container mx-auto px-5">
        <h3 className='font-poppins font-bold text-title text-4xl text-center my-8 '>Our Products</h3>
        <div className='flex flex-wrap justify-center gap-5'>
          {products.map((product) => <Product key={product.name} name={product.name} description={product.description} price={product.price} imageURL={product.imageURL} newProduct={product.newProduct} discount={product.discount} />)}
        </div>
      </div>
    </section>
  )
}

export default OurProducts