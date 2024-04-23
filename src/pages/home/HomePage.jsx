import { Fragment } from "react"
import Category from "./components/category/Category"
import Products from "./components/products/Products"

const HomePage = () => {
  return (
    <Fragment>
        <Category/>
        <Products/>
    </Fragment>
  )
}

export default HomePage