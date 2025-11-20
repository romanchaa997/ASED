import React, { useState } from 'react';
import { architectureBlueprintData } from '../../data/architectureBlueprintData';
import { ArchitectureContent } from '../../types';

const ContentRenderer: React.FC<{ contentItem: ArchitectureContent }> = ({ contentItem }) => {
  if (typeof contentItem === 'string') {
    // Handle simple strings, including those with list-like structures
    if (contentItem.includes('\n-')) {
      return (
        <ul className="list-disc list-inside space-y-2 my-2 text-gray-400">
          {contentItem.split('\n').map((line, index) => {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('-')) {
              return <li key={index} className="pl-2">{trimmedLine.substring(1).trim()}</li>;
            }
             if (trimmedLine.length > 0) {
               return <p key={index} className="text-gray-300 my-2">{trimmedLine}</p>;
            }
            return null;
          })}
        </ul>
      );
    }
    return <p className="text-gray-400 my-3">{contentItem}</p>;
  }

  // Handle code snippets
  return (
    <div className="my-4 rounded-lg bg-gray-900 overflow-hidden border border-gray-700">
      <div className="px-4 py-2 bg-gray-700 text-xs text-gray-300 font-semibold uppercase">{contentItem.language}</div>
      <pre className="p-4 text-sm text-gray-200 overflow-x-auto">
        <code>{contentItem.code}</code>
      </pre>
    </div>
  );
};

const ArchitectureBlueprintWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75l-9.75-5.25 4.179-2.25" />
    </svg>
  );

  return (
    <div className="bg-gray-800 shadow-lg rounded-xl overflow-hidden">
      <div className="p-5 sm:p-6 cursor-pointer hover:bg-gray-700/50" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {icon && <div className="mr-3">{icon}</div>}
            <h2 className="text-lg font-semibold text-gray-200">Architectural Blueprint & Best Practices</h2>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-400 mr-2">Click to {isOpen ? 'collapse' : 'expand'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="p-5 sm:p-6 border-t border-gray-700 space-y-6">
          {architectureBlueprintData.map(section => (
            <div key={section.id}>
              <h3 className="text-md font-bold text-cyan-400 border-b border-gray-700 pb-2 mb-2">{section.title}</h3>
              {section.content.map((item, index) => (
                <ContentRenderer key={index} contentItem={item} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArchitectureBlueprintWidget;
