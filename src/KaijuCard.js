// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {
  
  state = {
    showEditForm: false
  }

  handleEditClick = () => {
    this.setState(prevState => ({
      showEditForm: !prevState.showEditForm
    }))
  }
  // How can we show the edit form conditionally?
  render() {
    const {name, power, image, id, handleEdit} = this.props
    return (
      <div className='kaiju-card'>

        <h2 className='kaiju-card-name'>{name}</h2>
        <h3 className='kaiju-card-power'>Power: {power}</h3>

        <img className='kaiju-card-image' src={image} alt={name} />

        {/* What should this edit button do? */}
        <button className='kaiju-card-edit-button' onClick={this.handleEditClick}>Edit</button>
        {this.state.showEditForm && <EditKaijuForm name={name} power={power} image={image} id={id} handleEdit={handleEdit}/>}

      </div>
    )
  }
}

export default KaijuCard
