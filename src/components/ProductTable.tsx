import ProductCategoryRow from './ProductCategoryRow'
import ProductRow, { product } from './ProductRow'

type TableRowProps = {
  cat?: string;
  prod?: product;
  key: string;
}

function ProductTable(products: product[]) {
  let rows: React.ReactElement<TableRowProps>[] = []
  let lastCategory = ""

products.forEach((productt) => {
    if (productt.category !== lastCategory){
      rows.push(
        <ProductCategoryRow
          category={productt.category}
          key={productt.category}
          />
      )
    } else (
        rows.push(
          <ProductRow
            {...productt}
            key={productt.name}
            />
      )
    )
    lastCategory = productt.category
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default ProductTable