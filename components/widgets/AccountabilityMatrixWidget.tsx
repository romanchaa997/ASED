import React from 'react';
import Card from '../Card';
import { accountabilityMatrix } from '../../data/ecosystemData';
import { ResponsibilityLevel } from '../../types';

const ResponsibilityPill: React.FC<{ level: ResponsibilityLevel }> = ({ level }) => {
  const colors = {
    [ResponsibilityLevel.Primary]: 'bg-cyan-600 text-cyan-100',
    [ResponsibilityLevel.CoOwner]: 'bg-sky-600 text-sky-100',
    [ResponsibilityLevel.Support]: 'bg-yellow-600 text-yellow-100',
    [ResponsibilityLevel.Aware]: 'bg-gray-600 text-gray-300',
  };
  return <span className={`px-2 py-1 text-xs font-semibold rounded-full ${colors[level]}`}>{level}</span>;
};

const AccountabilityMatrixWidget: React.FC = () => {
    const icon = (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <Card title="Partnership Accountability Matrix (RACI)" icon={icon}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-300 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="px-4 py-3">Activity</th>
              <th scope="col" className="px-4 py-3">Partnerships</th>
              <th scope="col" className="px-4 py-3">Engineering</th>
              <th scope="col" className="px-4 py-3">Product</th>
              <th scope="col" className="px-4 py-3">Marketing</th>
              <th scope="col" className="px-4 py-3">Legal</th>
            </tr>
          </thead>
          <tbody>
            {accountabilityMatrix.map((row, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/50">
                <th scope="row" className="px-4 py-3 font-medium text-gray-200 whitespace-nowrap">{row.activity}</th>
                <td className="px-4 py-3"><ResponsibilityPill level={row.partnershipsLead} /></td>
                <td className="px-4 py-3"><ResponsibilityPill level={row.vpEngineering} /></td>
                <td className="px-4 py-3"><ResponsibilityPill level={row.vpProduct} /></td>
                <td className="px-4 py-3"><ResponsibilityPill level={row.vpMarketing} /></td>
                <td className="px-4 py-3"><ResponsibilityPill level={row.generalCounsel} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default AccountabilityMatrixWidget;