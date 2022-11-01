import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({src, alt}) => {
    return (
        <Item>
            <Image src={src} alt={alt} />
        </Item>
    )
}