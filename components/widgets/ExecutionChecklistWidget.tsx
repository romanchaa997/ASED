import React, { useState, useEffect } from 'react';
import Card from '../Card';
import { executionChecklist } from '../../data/ecosystemData';
import { ExecutionTask } from '../../types';

const ExecutionChecklistWidget: React.FC = () => {
  const [tasks, setTasks] = useState<ExecutionTask[]>(executionChecklist);

  const toggleTask = (taskId: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  const icon = (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <Card title="Week 1 Execution Checklist" icon={icon}>
      <div className="space-y-4">
         <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-cyan-300">{`${completedCount} / ${totalCount} Tasks`}</span>
            <span className="text-sm font-medium text-cyan-300">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-cyan-600 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>
        <div className="max-h-96 overflow-y-auto pr-2">
            {tasks.map(task => (
            <div key={task.id} className="flex items-start my-2 p-2 rounded-md hover:bg-gray-700/50">
                <input
                id={`task-${task.id}`}
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-4 h-4 text-cyan-600 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 mt-1 cursor-pointer"
                />
                <label htmlFor={`task-${task.id}`} className="ml-3 text-sm font-medium text-gray-300 cursor-pointer">
                <span className={` ${task.completed ? 'line-through text-gray-500' : 'text-gray-200'}`}>{task.title}</span>
                <p className={`text-xs ${task.completed ? 'text-gray-600' : 'text-gray-400'}`}>{task.day} @ {task.time} ({task.duration})</p>
                </label>
            </div>
            ))}
        </div>
      </div>
    </Card>
  );
};

export default ExecutionChecklistWidget;
