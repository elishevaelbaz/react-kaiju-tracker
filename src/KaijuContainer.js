//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// Read the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: [],
  }

  componentDidMount(){
    requests.fetchKaijus()
    .then(kaijus => this.setState({kaijus}))
  }

  addKaiju = (bodyData) => {
    requests.postKaiju(bodyData)
    .then(newKaiju => {
      this.setState({
        kaijus: [...this.state.kaijus, newKaiju]
      })
    })
  }

  editKaiju = (id, bodyData) => {
    requests.patchKaiju(id, bodyData)
    .then(updatedKaiju => {
      const updatedKaijus = this.state.kaijus.map(kaiju => {
        if (kaiju.id === updatedKaiju.id){
          return updatedKaiju
        }
        else{
          return kaiju
        }
      })
      this.setState({
        kaijus: updatedKaijus
      })
    })
  }

  renderCards(){
    
    return this.state.kaijus.map(kaiju => {
      return <KaijuCard key={kaiju.id} id={kaiju.id} 
        name={kaiju.name}
        image={kaiju.image}
        power={kaiju.power}
        handleEdit={this.editKaiju}
      />
    })
  }

  render() {
    return (
      <>

        <CreateKaijuForm handleSubmit={this.addKaiju}/>

        <div id='kaiju-container'>

          {this.renderCards()}

        </div>


        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer
