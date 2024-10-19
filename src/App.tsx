import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import FileExplorer from './components/FileExplorer';
import Editor from './components/Editor';
import ThreeJSBackground from './components/ThreeJSBackground';
import imageUrl from './assets/logo.png'; 

const mockFileSystem = {
  name: 'Recursive-file-Editor',
  type: 'folder',
  children: [
    {
      name: 'Source For SDC',
      type: 'folder',
      children: [
        { name: 'Hello SDC', type: 'file', content: 'SDC IS THE BEST CLUB OF GGSIPU' },
        { name: 'SDC CORE', type: 'file', content: 'I want to be the Part of SDC GGSIPU' },
        {
          name: 'Components',
          type: 'folder',
          children: [
            { name: 'Files', type: 'file', content: 'Content of Files' },
            { name: 'Editor', type: 'file', content: 'Content of Editor' },
            { name: 'Main', type: 'file', content: 'Content of Main' },
          ],
        },
      ],
    },
    { name: 'package.json', type: 'file', content: 'Content of package.json' },
    { name: 'README.md', type: 'file', content: 'Content of README.md' },
    { name: 'documentation.pdf', type: 'pdf', content: 'This is a dummy PDF file content.' },
  ],
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <ThreeJSBackground />
      <div className="container mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <div className="flex items-center space-x-4">
          <img src={imageUrl} alt="Logo" className="w-12 h-12" /> 
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            FileCurate
          </h1>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </motion.div>
        <div className="flex gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-1/3"
          >
            <FileExplorer
              fileSystem={mockFileSystem}
              onFileSelect={setSelectedFile}
              darkMode={darkMode}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-2/3"
          >
            <Editor file={selectedFile} darkMode={darkMode} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;