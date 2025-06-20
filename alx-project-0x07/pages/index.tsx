import React, {useState} from "react";

const Home: React.FC = () => {
  // State for the imput prompt text(using useState hook)
  const [prompt, setPrompt] = useState("");

  // Handle button click for generating imgage
  const handleGenerateImage = async() => {
    // For now just log the prompt to console
    console.log("Generating image for prompt:", prompt);
  }

  return (
    <div className="p-4 bg-gray-100 flex flex-col min-h-screen ">
      <div className="flex flex-col items-center ">
        <h1 className="text-4xl mb-2 font-bold">Image Generation App</h1>
        <p className="mb-4 text-lg texty-gray-700">Generate stunning images based on your prompts!</p>
        <div className="w-full max-w-md">
          {/* Controlled input bound to prompt state
           */}
           <input type="text" placeholder="Enter your prompt here" 
           className="p-3 mb-4 rounded-lg border border-gray-300 w-full"
           value={prompt} onChange={(e) => setPrompt(e.target.value)}  //updte state on a change
           />
           <button onClick={handleGenerateImage} className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">Generate Image</button>
        </div>
      </div>
    </div>
  )




}

export default Home;