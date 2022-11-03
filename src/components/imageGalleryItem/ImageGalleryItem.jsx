import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ toggleModal, image, alt }) => {
    
    return (
        <Item>
            <Image onClick={toggleModal} src={image} alt={alt} />
        </Item>
    )
}