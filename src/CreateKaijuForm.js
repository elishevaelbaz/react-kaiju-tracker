import React from 'react'

class CreateKaijuForm extends React.Component {

  state ={
    name: "",
    power: "",
    image: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render() {
    return (
      <form id='create-kaiju-form'>

        <label>Name: </label>
        <input type='text' name="name" placeholder="add your name here.." value={this.state.name}
          onChange={this.handleChange}
        />

        <label>Power: </label>
        <input type='text' name="power" placeholder="add your power here..." value={this.state.power}
          onChange={this.handleChange} 
        />

        <label>Image: </label>
        <input type='text' name="image" placeholder="add your image url here..." value={this.state.image} 
          onChange={this.handleChange}
        />

        <br/>

        <input type='submit' value='List Kaiju' onClick={this.handleFormSubmit} />

      </form>
    )
  }
}

export default CreateKaijuForm
