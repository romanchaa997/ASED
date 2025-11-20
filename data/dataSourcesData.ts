import { DataSource } from '../types';

export const dataSources: DataSource[] = [
  {
    id: 'jira',
    name: 'Jira Project',
    url: 'https://audityzer.atlassian.net',
    description: 'Primary source for ticket management, sprint planning, and execution checklists.',
  },
  {
    id: 'github',
    name: 'GitHub Repositories',
    url: 'https://github.com/Audityzer',
    description: 'Source of truth for all code, CI/CD pipelines, and technical documentation.',
  },
  {
    id: 'notion',
    name: 'Notion Workspace',
    url: 'https://notion.so/audityzer',
    description: 'Central hub for strategic documents, meeting notes, and partnership agreements.',
  },
   {
    id: 'google-drive',
    name: 'Google Drive',
    url: 'https://drive.google.com',
    description: 'Storage for financial models, grant application drafts, and marketing assets.',
  },
];
