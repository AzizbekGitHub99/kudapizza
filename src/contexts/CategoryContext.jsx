import {  createContext } from "react";

import PropTypes from 'prop-types'

import { categories } from "../data/categories";

export const CategoryContext = createContext();

const CategoryContextProvider = ({children}) => {
    let category = categories
    const state = {category}
  return (
    <CategoryContext.Provider value={state}>
        {children}
    </CategoryContext.Provider>
  )
}
CategoryContextProvider.propTypes = {
    children: PropTypes.node
}
export default CategoryContextProvider;