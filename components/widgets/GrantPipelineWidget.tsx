import React from 'react';
import Card from '../Card';
import { grants } from '../../data/ecosystemData';
import { Grant } from '../../types';

const GrantItem: React.FC<{ grant: Grant }> = ({ grant }) => (
  <div className="border-t border-gray-700 py-4">
    <div className="flex justify-between items-start">
      <div className="flex-1">
        <div className="flex items-center">
            <h3 className="font-semibold text-gray-200">{grant.title}</h3>
            {grant.sourceUrl && (
                <a href={grant.sourceUrl} target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-500 hover:text-cyan-400" aria-label="Source">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>
            )}
        </div>
        <p className="text-sm text-gray-400">{grant.program}</p>
        <p className="text-sm text-cyan-400 font-medium">{grant.amount}</p>
      </div>
      <span className="text-xs font-semibold px-2 py-1 bg-cyan-800 text-cyan-200 rounded-full ml-2">{grant.status}</span>
    </div>
    <div className="mt-2 text-sm text-gray-400">
      <p><strong>Deadline:</strong> {grant.deadline}</p>
      <p><strong>Next Actions:</strong> {grant.nextActions.join(', ')}</p>
    </div>
  </div>
);

const GrantPipelineWidget: React.FC = () => {
  const icon = (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
  );

  return (
    <Card title="Grant Application Pipeline" icon={icon}>
      <div className="space-y-2 -mt-4">
        {grants.map(grant => <GrantItem key={grant.id} grant={grant} />)}
      </div>
    </Card>
  );
};

export default GrantPipelineWidget;