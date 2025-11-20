export interface Grant {
  id: string;
  title: string;
  program: string;
  amount: string;
  status: string;
  deadline: string;
  nextActions: string[];
  sourceUrl?: string;
}

export interface RoadmapMilestone {
  phase: string;
  title: string;
  duration: string;
  items: string[];
  status: 'Completed' | 'In Progress' | 'Planned';
}

export enum ResponsibilityLevel {
  Primary = 'Primary',
  CoOwner = 'Co-Owner',
  Support = 'Support',
  Aware = 'Aware',
}

export interface AccountabilityMatrixRow {
  activity: string;
  partnershipsLead: ResponsibilityLevel;
  vpEngineering: ResponsibilityLevel;
  vpProduct: ResponsibilityLevel;
  vpMarketing: ResponsibilityLevel;
  generalCounsel: ResponsibilityLevel;
}

export interface ExecutionTask {
  id: string;
  day: string;
  time: string;
  title: string;
  duration: string;
  details: string[];
  outcome: string;
  completed: boolean;
}

export interface KeyMetric {
  title: string;
  value: string;
  change?: string;
  changeType?: 'increase' | 'decrease';
}

export interface TeamTask {
  team: string;
  tasks: {
    description: string;
    timeline: string;
    completed: boolean;
  }[];
}

export interface StrategicDocument {
  id: string;
  title: string;
  content: string;
}

export interface CodeSnippet {
  language: string;
  code: string;
}

export type ArchitectureContent = string | CodeSnippet;

export interface ArchitectureSection {
  id: string;
  title: string;
  content: ArchitectureContent[];
}

export interface DataSource {
  id: string;
  name: string;
  url: string;
  description: string;
}