import React, { Component } from "react";

export class Hiperveza extends Component{
  steate={
    ime:'Ime lokacije',
  }
//   onSubmit= e =>{e.preventD}
  render(){
    return(<div>
        <p id="ispis">{this.steate.ime}</p>
    <form>
        <input placeholder="ime lokacije" value={this.steate.imeKorisnik} onChange={e=>this.setState({ime: e.target.value})} />
        <button onClick={e=>this.onSubmit(e)}>Submit</button>
      </form>
      </div>
    )
  }
}

export default Hiperveza;