import React from 'react';

import ImageDetail from './image_detail';

const ImageList = (props)=> {
  const validImage = props.images.filter(image => !image.is_album);
  const RenderedImages = validImage.map( image => {
    return <ImageDetail key={image.title} image={image} />
  });

  return (
    <ul className='media-list list-group'>
      {RenderedImages}
    </ul>
  );
};

export default ImageList;
