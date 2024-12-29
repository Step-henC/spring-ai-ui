import { useState } from "react";
import './App.css';
import { TAB_VALUES } from "./models/TabValues";
import ImageGeneratorComponent from "./components/ImageGenerator/ImageGeneratorComponent";
import ChatGeneratorComponent from "./components/Chat/ChatGeneratorComponent";
import RecipeGeneratorComponent from "./components/RecipeGenerator/RecipeGeneratorComponent";
function App() {
const [activeTab, setActiveTab] = useState('image-generator');

const handleTabChange = (tab) => {
  console.log(tab);
  setActiveTab(tab);
}
  return (
    <div className="App">
      <button className={activeTab === TAB_VALUES.Image ? 'active' : ''} onClick={() => handleTabChange(TAB_VALUES.Image) }>Image Generator</button>
      <button className={activeTab === TAB_VALUES.Chat ? 'active' : ''} onClick={() => handleTabChange(TAB_VALUES.Chat)}>Chat</button>
      <button className={activeTab === TAB_VALUES.Recipe ? 'active' : ''} onClick={() => handleTabChange(TAB_VALUES.Recipe)}>Recipe Generator</button>
      <div className="tabs">
        {activeTab === TAB_VALUES.Image && <ImageGeneratorComponent />}
        {activeTab === TAB_VALUES.Chat && <ChatGeneratorComponent />}
        {activeTab === TAB_VALUES.Recipe && <RecipeGeneratorComponent />}

      </div>
    </div>
  );
}

export default App;
