import { Component } from 'react';
import { Searchbar } from '../searchbar/Searchbar';
import { ImageGallery } from 'components/imageGallery/ImageGallery';
import { Loader } from '../loader/Loader';
import { Button } from '../button/Button';
import { getImages } from '../../api/Api';
import { Modal } from '../modal/Modal';
import { Container } from './App.styled';



export class App extends Component {

  state = {
    gallery: [],    
    querry: '',
    page: 1,    
    status: 'idle',
    activeId: null,
    showModal: false,
  }
  

  async componentDidUpdate(_, prevState) {
    
    if (this.state.showModal && this.state.activeId) return
    
    if (prevState.querry !== this.state.querry) {
      this.setState({ gallery: [], });
    }
    
    if (prevState.gallery === this.state.gallery && !this.state.activeId) {
        
      try {
        const response = await getImages(this.state.querry, this.state.page)
        
        this.setState(prevState => {
          return { gallery: [...prevState.gallery, ...response.data.hits], status: 'resolved' }
        });
      } catch (error) {
        this.setState({ status: 'rejected' });
      }
    }
  }

  handleSubmit = (querry) => {
    this.setState({ querry, page: 1, activeId: null, status: 'pending', });
  }

  handleLoadMore = () => {
    this.setState(prevState => { return { page: prevState.page += 1, activeId: null, status: 'pending' }});
  }

  toggleModal = (id) => {    
    this.setState({ showModal: !this.state.showModal, activeId: id?? this.state.activeId }) 
  }

  render() {

    const { status, showModal } = this.state;
        
    return (
      <Container>
        <Searchbar          
          onSubmit={this.handleSubmit}
          querry={this.state.querry}
        />
        <ImageGallery            
          gallery={this.state.gallery}
          toggleModal={this.toggleModal}>
          {status === 'pending' && <Loader />}
        </ImageGallery>       
        {status === 'resolved' &&
          <Button
            onLoadMore={this.handleLoadMore} />}
        {showModal &&
          <Modal
            image={this.state.gallery.filter(galleryItem => galleryItem.id === this.state.activeId)}            
            toggleModal={this.toggleModal} />}
      </Container>
    )
  }
}