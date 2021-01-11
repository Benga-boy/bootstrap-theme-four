import React, { Fragment } from 'react'
import CatHeading from './CatHeading'
import CatLists from './CatLists'
import SearchCat from './SearchCat'

const Categories = () => {
  return (
    <Fragment>
      <CatHeading />
      <SearchCat />
      <CatLists />
    </Fragment>
  )
}

export default Categories
