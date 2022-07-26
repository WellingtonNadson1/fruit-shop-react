import Search from './Search'
import ProductTable from './ProductTable'
import { product } from './ProductRow'

function FilterableProductTable(products: product[]) {
  return (
    <>
        <Search />
        <ProductTable {...products} />
    </>
  )
}

export default FilterableProductTable