import React from 'react';
import KeyMetricsWidget from './widgets/KeyMetricsWidget';
import GrantPipelineWidget from './widgets/GrantPipelineWidget';
import RoadmapWidget from './widgets/RoadmapWidget';
import AccountabilityMatrixWidget from './widgets/AccountabilityMatrixWidget';
import ExecutionChecklistWidget from './widgets/ExecutionChecklistWidget';
import TeamTasksWidget from './widgets/TeamTasksWidget';
import AISummaryWidget from './widgets/AISummaryWidget';
import StrategicDocsWidget from './widgets/StrategicDocsWidget';
import ArchitectureBlueprintWidget from './widgets/ArchitectureBlueprintWidget';
import DataSourcesWidget from './widgets/DataSourcesWidget';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <KeyMetricsWidget />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <AISummaryWidget />
          <RoadmapWidget />
          <AccountabilityMatrixWidget />
        </div>
        <div className="space-y-8">
          <GrantPipelineWidget />
          <DataSourcesWidget />
          <ExecutionChecklistWidget />
        </div>
      </div>
      <TeamTasksWidget />
      <StrategicDocsWidget />
      <ArchitectureBlueprintWidget />
    </div>
  );
};

export default Dashboard;