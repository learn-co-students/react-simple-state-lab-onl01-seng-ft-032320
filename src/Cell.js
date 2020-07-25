import React, { Component } from 'react'

export default class Cell extends Component {
    constructor(props){
     super(props)
     this.state ={
      color:props.value


     }

    }
    handleForState =()=>{
       this.setState({
           color:'#333'
       })

    }



    render() {
        return (
            <div style={{backgroundColor: this.state.color}} className="cell" onClick={this.handleForState}>
                
            </div>
        )
    }
}
