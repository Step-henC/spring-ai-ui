import { useState } from 'react';

export default function ImageGeneratorComponent() {
  const [prompt, setPrompt] = useState('');
  const [imageUrls, setImageUrls] = useState([]);


  const generateImage = async () => {
    try {
      const response = await fetch(`http://localhost:8080/v1/generate-image?prompt=${prompt}`);
      const urls = await response.json();
      setImageUrls(urls);

    } catch (error) {
      console.log('Error generating image: ', error );
    }
  }
  return (
    <div className="tab-content">
      <h2>Image Generator</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder='Enter image description prompt'
      />
      <button onClick={generateImage} >Generate Image</button>
      <div className="image-grid">{imageUrls.map((url, index) => (
         <img key={index} src={url} alt={`Generated ${index}`} ></img>
      ))}
      {[...Array(4 - imageUrls.length)].map((_, index) => (
       <div className='empty-image-slot' key={index + imageUrls.length}></div>
      ))}
      </div>
    </div>
  );
}
