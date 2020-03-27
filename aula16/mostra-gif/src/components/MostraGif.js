import React, { Component } from 'react';

class MostraGif extends Component {

    state = {
        mostraGif: false
    }

    mostraGif = () => {
        this.setState({mostraGif: true})
    }

    escondeGif = () => {
        this.setState({mostraGif: false})
    }

    render(){ //vai renderizar na tela converte para HTML
        return (
            <div>
            <button onClick={this.mostraGif}> Mostra Gif </button> <br></br>
            {this.state.mostraGif === true &&
             <img onClick={this.escondeGif} src="https://media.giphy.com/media/52F9eVNiorHmgBCq1p/giphy.gif" />
            }
            </div>
        );
    }
}

export default MostraGif