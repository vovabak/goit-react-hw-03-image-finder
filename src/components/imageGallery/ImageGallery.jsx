import { Component } from 'react';
import { ImageGalleryItem } from '../imageGalleryItem/ImageGalleryItem';

import { GalleryList } from './ImageGallery.styled';

export class ImageGallery extends Component {
    
    render() {
        return (this.props.gallery.length > 0 &&            
                <GalleryList>
                    {this.props.gallery.map(image => <ImageGalleryItem
                            key={image.id}
                            src={image.webformatURL}
                            alt={image.tags}
                            />)
                        }
                </GalleryList>
        )
    }
}