import { Component } from 'react';
import { Searchbar } from '../searchbar/Searchbar';
import { ImageGallery } from 'components/imageGallery/ImageGallery';
// import { Loader } from '../loader/Loader';
import { Button } from '../button/Button';
// import { Modal } from '../modal/Modal';
import { Container } from './App.styled';


export class App extends Component {

  render()
  {
    return (
      <Container>
        <Searchbar/>
        {/* <Loader/> */}
        <ImageGallery/>
        <Button/>
        {/* <Modal/> */}
      </Container>
    )
  }
};
