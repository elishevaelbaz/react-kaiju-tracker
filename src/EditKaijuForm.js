import React from 'react'

class EditKaijuForm extends React.Component {


  state = {
    name: this.props.name,
    power: this.props.power,
    image: this.props.image
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.handleEdit(this.props.id, this.state)
  }
  render() {
    console.log(this.props)
    return (
      <>
        <form className='kaiju-card-edit-form'>

          <label>Name: </label>
          <input type='text' value={this.state.name} name="name" onChange={this.handleChange}/>
          <br/>

          <label>Power: </label>
          <input type='text' value={this.state.power} name="power" onChange={this.handleChange}/>
          <br/>

          <label>Image URL: </label>
          <input type='text' value={this.state.image} name="image" onChange={this.handleChange}/>
          <br/>

          <input type="submit" value="Save Changes" onClick={this.handleSubmit}/>

        </form>
      </>
    )
  }
}

export default EditKaijuForm
