
import { useState } from "react";
export default function ChatGeneratorComponent() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState('');

  const askAI = async () => {
    try { 
      const res = await fetch(`http://localhost:8080/v1/ask-ai?prompt=${prompt}`);
      const data = await res.text();
      setResponse(data);

    } catch (e) {
      console.log('Error ', e );
    }
  }
  return (
    <div>
    <h2>Talk to AI</h2>
    <input 
    type="text" 
    value={prompt}
    onChange={(e) => setPrompt(e.target.value)}
    placeholder="Enter a prompt for AI"
    />
    <button onClick={askAI}>Ask AI</button>
    <div className="output">
      <p>{response}</p>
    </div>
    </div>
  )
}