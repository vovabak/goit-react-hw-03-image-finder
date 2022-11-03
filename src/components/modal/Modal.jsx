import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {

    componentDidMount() {        
        window.addEventListener('keydown', this.onClose)
    }

    componentWillUnmount() {        
        window.removeEventListener('keydown', this.onClose)
    }

    onClose = (e) => {
        if (e.key !== 'Escape') return

        this.props.toggleModal()
    }

    onClick = (e) => {

        if(e.target !== e.currentTarget) return
       
        this.props.toggleModal()
    }

    render() {
        
        return (
            <Overlay onClick={this.onClick}>
            <ModalWindow>
                <img src={this.props.image[0].largeImageURL} alt={this.props.image[0].tags} />
            </ModalWindow>
        </Overlay>
    )
    }    
}