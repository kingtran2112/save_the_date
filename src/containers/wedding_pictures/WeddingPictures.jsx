import React from 'react';
import { ReactPhotoCollage } from 'react-photo-collage';
import PicturePhotos from '../../resources/picture/wedding_pictures';

export default function WeddingPictures() {
  const photoSrc = PicturePhotos.map((photo) => {
    const temp = { src: photo };
    return temp;
  });
  return (
    <div className="wedding-pictures">
      <div className="title wedding-pictures--title">
        Ảnh cưới của chúng mình
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