import React from 'react';
import { motion } from 'framer-motion';

const Editor = ({ file, darkMode }) => {
  if (!file) {
    return (
      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg h-full flex items-center justify-center`}>
        <p className="text-gray-500">Select a file to view its content</p>
      </div>
    );
  }

  const renderContent = () => {
    if (file.type === 'pdf') {
      return (
        <div className={`p-4 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <p className="text-red-400 mb-2">PDF Preview:</p>
          <p>{file.content}</p>
          <p className="mt-2 text-gray-500">(This is a dummy PDF preview)</p>
        </div>
      );
    } else {
      return (
        <pre className={`p-4 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} overflow-auto`}>
          <code>{file.content}</code>
        </pre>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg h-full`}
    >
      <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
        {file.name}
      </h2>
      {renderContent()}
    </motion.div>
  );
};

export default Editor;