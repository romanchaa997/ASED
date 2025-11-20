import React, { useState, useCallback } from 'react';
import Card from '../Card';
import { strategicDocuments } from '../../data/strategicDocsData';
import { generateContentStream } from '../../services/geminiService';
import { GenerateContentResponse } from '@google/genai';
import { StrategicDocument } from '../../types';

const DocumentItem: React.FC<{ doc: StrategicDocument }> = ({ doc }) => {
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleGenerate = useCallback(async () => {
    if (description) {
        setDescription('');
        setWordCount(0);
        return;
    }
    setIsLoading(true);
    setError('');
    setDescription('');
    setWordCount(0);

    const prompt = `Generate a concise, one-paragraph summary (between 50 and 70 words) for the following strategic document titled "${doc.title}". The summary should be suitable for a high-level executive dashboard.

    DOCUMENT CONTENT:
    ---
    ${doc.content.substring(0, 30000)}
    ---
    
    SUMMARY:`;

    try {
      const stream = await generateContentStream(prompt);
      let fullText = '';
      for await (const chunk of stream) {
        const response = chunk as GenerateContentResponse;
        if (response?.text) {
          fullText += response.text;
          setDescription(fullText);
          setWordCount(fullText.trim().split(/\s+/).filter(Boolean).length);
        }
      }
    } catch (e: any) {
      setError(e.message || "An unknown error occurred while generating description.");
    } finally {
      setIsLoading(false);
    }
  }, [doc.content, doc.title, description]);

  return (
    <div className="py-4 border-b border-gray-700 last:border-b-0">
      <div className="flex justify-between items-center gap-4">
        <h4 className="font-semibold text-gray-200 flex-1">{doc.title}</h4>
        <div className="flex items-center gap-2">
            {wordCount > 0 && !isLoading && (
              <span className="text-xs text-gray-500 whitespace-nowrap">{wordCount} words</span>
            )}
            <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="inline-flex items-center justify-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-gray-800 disabled:bg-gray-500 disabled:cursor-not-allowed whitespace-nowrap"
            >
            {isLoading ? 'Generating...' : (description ? 'Clear' : 'Generate Summary')}
            </button>
        </div>
      </div>
      {isLoading && <div className="text-sm text-cyan-400 mt-2 animate-pulse">Generating AI summary...</div>}
      {error && <p className="text-sm text-red-400 mt-2">{error}</p>}
      {description && !isLoading && (
        <p className="text-sm text-gray-400 mt-2 bg-gray-900/50 p-3 rounded-md border border-gray-700">{description}</p>
      )}
    </div>
  );
};

const StrategicDocsWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );

  return (
    <div className="bg-gray-800 shadow-lg rounded-xl overflow-hidden">
      <div className="p-5 sm:p-6 cursor-pointer hover:bg-gray-700/50" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                {icon && <div className="mr-3">{icon}</div>}
                <h2 className="text-lg font-semibold text-gray-200">Strategic Document AI Summaries</h2>
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
        <div className="p-5 sm:p-6 border-t border-gray-700">
            {strategicDocuments.map(doc => (
                <DocumentItem key={doc.id} doc={doc} />
            ))}
        </div>
      )}
    </div>
  );
};

export default StrategicDocsWidget;