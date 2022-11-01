import { Component } from 'react';
import { Searchbar } from '../searchbar/Searchbar';
import { ImageGallery } from 'components/imageGallery/ImageGallery';
// import { Loader } from '../loader/Loader';
import { Button } from '../button/Button';
// import { Modal } from '../modal/Modal';
import { getImages } from '../../api/Api';
import { Container } from './App.styled';

// let page = 1;

export class App extends Component {

  state = {
    gallery: [],
    querry: '',
    isLoading: false,
    isLoaded: false,
  }

  async componentDidUpdate(_, prevState) {

    if (!prevState.isLoading) {
      try {
        const response = await getImages(this.state.querry, 1)
        this.setState({ gallery: response.data.hits, isLoaded: true })
      } catch (error) {
        console.error(error);
      } finally {
        this.setState({isLoading: false})
      }
    }
  }

  handleQuerry = (querry) => {
    this.setState({ querry, isLoading: true });    
  }

  render()
  {
    return (
      <Container>
        <Searchbar
          onQuerry={this.handleQuerry} />
        {/* <Loader/> */}
        <ImageGallery
            gallery={this.state.gallery} />        
        {this.state.isLoaded && <Button />
        }
        {/* <Modal/> */}
      </Container>
    )
  }
}