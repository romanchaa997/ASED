import React from 'react';
import Card from '../Card';
import { teamTasks } from '../../data/ecosystemData';

const TeamTasksWidget: React.FC = () => {
    const icon = (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.28a4.5 4.5 0 00-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 001.13-1.897L16.5 7.5m0 0l-3.75-3.75M16.5 7.5l3.75 3.75M6 6l12 12" />
    </svg>
  );

  return (
    <Card title="Team Responsibilities & Tasks" icon={icon}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {teamTasks.map(team => (
          <div key={team.team} className="bg-gray-700/50 p-4 rounded-lg">
            <h3 className="font-semibold text-cyan-400 mb-3">{team.team}</h3>
            <ul className="space-y-3">
              {team.tasks.map((task, index) => (
                <li key={index} className="flex items-start">
                  <div className={`mt-1 flex-shrink-0 w-2.5 h-2.5 rounded-full ${task.completed ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                  <div className="ml-2.5">
                     <p className={`text-sm ${task.completed ? 'text-gray-400 line-through' : 'text-gray-200'}`}>{task.description}</p>
                     <p className={`text-xs ${task.completed ? 'text-gray-500' : 'text-gray-400'}`}>{task.timeline}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TeamTasksWidget;