import React from 'react';
import Card from '../Card';
import { roadmap } from '../../data/ecosystemData';
import { RoadmapMilestone } from '../../types';

const RoadmapItem: React.FC<{ item: RoadmapMilestone, isLast: boolean }> = ({ item, isLast }) => {
  const statusColor = item.status === 'Completed' ? 'bg-green-500' : item.status === 'In Progress' ? 'bg-cyan-500' : 'bg-gray-600';
  const statusRingColor = item.status === 'Completed' ? 'ring-green-500/50' : item.status === 'In Progress' ? 'ring-cyan-500/50' : 'ring-gray-600/50';

  return (
    <div className="relative pl-8">
      {!isLast && <div className="absolute left-3 top-3 -bottom-3 w-px bg-gray-600"></div>}
      <div className="flex items-center space-x-4">
        <div className={`relative h-6 w-6 rounded-full flex items-center justify-center ${statusColor} ring-4 ${statusRingColor}`}>
          {item.status === 'Completed' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-gray-200">{item.phase}</h3>
          <p className="text-sm text-gray-400">{item.title}</p>
        </div>
      </div>
      <div className="pl-8 mt-2 pb-6">
        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
          {item.items.map((task, i) => <li key={i}>{task}</li>)}
        </ul>
      </div>
    </div>
  );
};


const RoadmapWidget: React.FC = () => {
    const icon = (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );

  return (
    <Card title="Implementation Roadmap" icon={icon}>
      <div className="-mt-4">
        {roadmap.map((item, index) => (
          <RoadmapItem key={item.phase} item={item} isLast={index === roadmap.length - 1} />
        ))}
      </div>
    </Card>
  );
};

export default RoadmapWidget;