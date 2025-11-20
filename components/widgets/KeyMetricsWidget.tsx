import React from 'react';
import { keyMetrics } from '../../data/ecosystemData';
import { KeyMetric } from '../../types';

const MetricCard: React.FC<{ metric: KeyMetric }> = ({ metric }) => {
  const changeColor = metric.changeType === 'increase' ? 'text-green-400' : 'text-red-400';
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <p className="text-sm text-gray-400">{metric.title}</p>
      <p className="text-2xl font-bold text-gray-200">{metric.value}</p>
      {metric.change && <p className={`text-sm ${changeColor}`}>{metric.change}</p>}
    </div>
  );
};

const KeyMetricsWidget: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {keyMetrics.map((metric) => (
        <MetricCard key={metric.title} metric={metric} />
      ))}
    </div>
  );
};

export default KeyMetricsWidget;