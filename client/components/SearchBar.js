import React from 'react'
import {connect} from 'react-redux'
import {updateSearchWord} from '../store/searchBar'
import history from '../history'

const SearchBar = ({searchValue, editSearchWord}) => {
  const onChange = event => {
    editSearchWord(event.target.value)
    history.push('/products')
  }

  return (
    <div id="searchBar">
      <input
        type="search"
        id="searchInput"
        alt="alt"
        name="productSearch"
        placeholder="Search..."
        onChange={onChange}
        value={searchValue}
      />
      <div id="magnifyingGlass">
        <i className="fa fa-search" />
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    searchValue: state.searchBar
  }
}

const mapDispatch = dispatch => {
  return {
    editSearchWord: searchWord => dispatch(updateSearchWord(searchWord))
  }
}

export default connect(mapState, mapDispatch)(SearchBar)
