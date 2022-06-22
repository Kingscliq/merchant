import Image from 'next/image';
import { useState, useEffect } from 'react';

export const ImagePreview = ({ file }: any) => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreview(reader.result);
      };
    }
  }, [file]);

  return <img src={preview} alt="preview" width="100%" height="300px" />;
};
