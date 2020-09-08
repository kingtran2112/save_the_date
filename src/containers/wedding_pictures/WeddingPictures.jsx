import React from 'react';
import { ReactPhotoCollage } from 'react-photo-collage';
import content from '../../resources/content.json';

export default function WeddingPictures() {
  const picturePhotos = content.weddingPicture.images;
  const photoSrc = picturePhotos.map((photo) => {
    const temp = { src: photo };
    return temp;
  });
  return (
    <div className="wedding-pictures">
      <div className="title wedding-pictures--title">
        {content.weddingPicture.title}
      </div>
      <div className="wedding-pictures--collage">
        <ReactPhotoCollage
          width="100%"
          height={['350px', '350px']}
          layout={[2, 3]}
          showNumOfRemainingPhotos
          photos={photoSrc}
        />
      </div>
    </div>
  );
}
