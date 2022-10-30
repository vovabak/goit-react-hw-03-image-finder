import { Searchbar } from '../searchbar/Searchbar';
import { ImageGallery } from 'components/imageGallery/ImageGallery';
import { Loader } from '../loader/Loader';
import { Button } from '../button/Button';
import { Modal } from '../modal/Modal';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Searchbar>hi!!</Searchbar>
      <Loader>Loader hi</Loader>
      <ImageGallery>Gallary Hi</ImageGallery>
      <Button>Button hi</Button>
      <Modal></Modal>
    </div>
  );
};
