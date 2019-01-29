import React from 'react';

class SearchBar extends React.Component{
  constructor(){
    super()
    this.state={
      term: '',
    }
  }

  handleChange=(e)=>{
    this.setState({term:e.target.value})
  }

  onFormSubmit=(e)=>{
    e.preventDefault();
  //TODO: MAKE SURE WE CALL A CALLBACK FROM parent component
  this.props.onFormSubmit(this.state.term)
  }

  render(){
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input type="text"
              onChange={this.handleChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar