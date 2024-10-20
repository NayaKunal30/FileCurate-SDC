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
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <ThreeJSBackground />
      <div className="container mx-auto p-4 flex-grow">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8 flex-wrap"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            className="flex items-center space-x-4 mb-4 sm:mb-0"
          >
            <img src={imageUrl} alt="Logo" className="w-12 h-12" />
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 hover:scale-105 transition-transform"
            >
              FileCurate
            </motion.h1>
          </motion.div>
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200 hover:rotate-45"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </motion.button>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* File Explorer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:w-1/3 w-full"
          >
            <FileExplorer
              fileSystem={mockFileSystem}
              onFileSelect={setSelectedFile}
              darkMode={darkMode}
              className="hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Editor */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:w-2/3 w-full"
          >
            <Editor file={selectedFile} darkMode={darkMode} className="hover:scale-105 transition-transform duration-300" />
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-gray-800 text-white p-4 mt-8 text-center">
        <p className="text-sm">
          Made with <span className="text-pink-500">🩷</span> By Kunal | For SDC ( AI-DS B2 2023 )
        </p>
      </footer>
    </div>
  );
}

export default App;
