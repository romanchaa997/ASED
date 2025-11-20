import React, { useState, useCallback } from 'react';
import Card from '../Card';
import { generateContentStream } from '../../services/geminiService';
import { grants, roadmap, executionChecklist } from '../../data/ecosystemData';
import { GenerateContentResponse } from '@google/genai';

const AISummaryWidget: React.FC = () => {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateSummary = useCallback(async () => {
    setIsLoading(true);
    setError('');
    setSummary('');

    const grantsStatus = grants.map(g => `- ${g.title}: ${g.status}, Deadline: ${g.deadline}`).join('\n');
    const roadmapStatus = roadmap.map(r => `- ${r.phase}: ${r.status}`).join('\n');
    const checklistCompleted = executionChecklist.filter(t => t.completed).length;
    const checklistTotal = executionChecklist.length;

    const prompt = `
      Act as a senior project manager for the Audityzer project. Based on the following data, generate a concise and professional weekly status report suitable for stakeholders.
      The report should have three sections: "Key Achievements & Progress", "Current Focus & Next Steps", and "Items Requiring Attention".
      Use markdown for formatting. Be encouraging but realistic.

      **Current Data:**

      **Grant Pipeline:**
      ${grantsStatus}

      **Implementation Roadmap Progress:**
      ${roadmapStatus}
      
      **Week 1 Execution Checklist:**
      ${checklistCompleted} out of ${checklistTotal} tasks completed.

      Generate the report now.
    `;

    try {
      const stream = await generateContentStream(prompt);
      
      for await (const chunk of stream) {
          const response = chunk as GenerateContentResponse;
          if (response && response.text) {
             setSummary(prev => prev + response.text);
          }
      }
    } catch (e: any) {
      setError(e.message || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  const icon = (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.672-2.672L11.25 18l1.938-.648a3.375 3.375 0 002.672-2.672L16.25 13l.648 1.938a3.375 3.375 0 002.672 2.672L21.5 18l-1.938.648a3.375 3.375 0 00-2.672 2.672z" />
     </svg>
  );

  return (
    <Card title="AI-Powered Weekly Summary" icon={icon}>
      <div className="space-y-4">
        <p className="text-sm text-gray-400">
          Click the button to generate a real-time project status summary using Gemini AI based on the current ecosystem data.
        </p>
        <button
          onClick={handleGenerateSummary}
          disabled={isLoading}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-gray-800 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : 'Generate Status Report'}
        </button>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        {summary && (
          <div className="prose prose-sm prose-invert max-w-none bg-gray-900 p-4 rounded-md border border-gray-700">
            {summary.split('**').map((part, i) =>
                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
            ).reduce((acc, part, i) => {
                if (typeof part === 'string') {
                    return [...acc, ...part.split('*').map((subPart, j) =>
                        j % 2 === 1 ? <em key={`${i}-${j}`}>{subPart}</em> : subPart
                    )];
                }
                return [...acc, part];
            }, [] as React.ReactNode[])}
         </div>
        )}
      </div>
    </Card>
  );
};

export default AISummaryWidget;
