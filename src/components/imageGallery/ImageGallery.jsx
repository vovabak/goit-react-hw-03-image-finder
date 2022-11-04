import { ImageGalleryItem } from '../imageGalleryItem';
import { GalleryList } from './ImageGallery.styled';


export const ImageGallery = ({ toggleModal, gallery, children }) => {

  return (
    <>
      <GalleryList>        
          {
            gallery.map(image => <ImageGalleryItem
              key={image.id}
              image={image.webformatURL}              
              alt={image.tags}
              toggleModal={() => toggleModal(image.id)}
            />)
        }      
      </GalleryList>
      {children}
    </>      
  )
}