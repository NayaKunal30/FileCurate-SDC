import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, File, ChevronRight, ChevronDown, FileText } from 'lucide-react';

const FileExplorer = ({ fileSystem, onFileSelect, darkMode }) => {
  const [expandedFolders, setExpandedFolders] = useState({ '/recursive-file-editor': true });

  const toggleFolder = (path) => {
    setExpandedFolders((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  const renderItem = (item, path = '') => {
    const currentPath = `${path}/${item.name}`;
    const isExpanded = expandedFolders[currentPath];

    if (item.type === 'folder') {
      return (
        <div key={currentPath}>
          <motion.div
            whileHover={{ backgroundColor: darkMode ? '#2D3748' : '#EDF2F7' }}
            onClick={() => toggleFolder(currentPath)}
            className={`flex items-center p-2 cursor-pointer rounded transition-colors duration-200`}
          >
            {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            <Folder size={18} className="mr-2 text-yellow-400" />
            <span>{item.name}</span>
          </motion.div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-4"
              >
                {item.children.map((child) => renderItem(child, currentPath))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    } else {
      const Icon = item.type === 'pdf' ? FileText : File;
      return (
        <motion.div
          key={currentPath}
          whileHover={{ backgroundColor: darkMode ? '#2D3748' : '#EDF2F7' }}
          onClick={() => onFileSelect(item)}
          className={`flex items-center p-2 cursor-pointer rounded transition-colors duration-200`}
        >
          <Icon size={18} className={`mr-2 ${item.type === 'pdf' ? 'text-red-400' : 'text-blue-400'}`} />
          <span>{item.name}</span>
        </motion.div>
      );
    }
  };

  return (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
        Recursive File Explorer
      </h2>
      {renderItem(fileSystem)}
    </div>
  );
};

export default FileExplorer;