import React from 'react';
import Card from '../Card';
import { dataSources } from '../../data/dataSourcesData';
import { DataSource } from '../../types';

const DataSourceItem: React.FC<{ source: DataSource }> = ({ source }) => (
  <div className="border-t border-gray-700 py-3">
    <a href={source.url} target="_blank" rel="noopener noreferrer" className="group">
        <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-200 group-hover:text-cyan-400">{source.name}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500 group-hover:text-cyan-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
        </div>
        <p className="text-sm text-gray-400">{source.description}</p>
    </a>
  </div>
);

const DataSourcesWidget: React.FC = () => {
  const icon = (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
     </svg>
  );

  return (
    <Card title="Data Verification Sources" icon={icon}>
      <div className="space-y-1 -mt-3">
        {dataSources.map(source => <DataSourceItem key={source.id} source={source} />)}
      </div>
    </Card>
  );
};

export default DataSourcesWidget;