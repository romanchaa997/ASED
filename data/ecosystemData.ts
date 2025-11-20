import { Grant, RoadmapMilestone, AccountabilityMatrixRow, ExecutionTask, KeyMetric, TeamTask, ResponsibilityLevel } from '../types';

export const keyMetrics: KeyMetric[] = [
  { title: 'Project Funding', value: '$80M+', change: 'Secured', changeType: 'increase' },
  { title: 'User Reach', value: '23M+ Citizens', change: 'Targeted', changeType: 'increase' },
  { title: 'Series A Funding', value: '$50M', change: '100% Complete', changeType: 'increase' },
  { title: 'Market Share Target', value: '40%+', change: 'In Progress', changeType: 'increase' },
];

export const grants: Grant[] = [
  {
    id: 'nsf-1',
    title: 'NSF SBIR/STTR',
    program: 'Small Business Innovation Research',
    amount: '$275k (Phase I)',
    status: 'Ready for Submission',
    deadline: 'March 5, 2025',
    nextActions: ['Final review', 'Submit by Mar 1'],
    sourceUrl: 'https://www.nsf.gov/eng/iip/sbir/home.jsp',
  },
  {
    id: 'darpa-1',
    title: 'DARPA YFA 2025',
    program: 'Young Faculty Award',
    amount: '$500k + Option',
    status: 'Exec Summary Submitted',
    deadline: 'Feb 5, 2025',
    nextActions: ['Final proposal submission'],
    sourceUrl: 'https://www.darpa.mil/work-with-us/for-universities/young-faculty-award',
  },
  {
    id: 'eu-1',
    title: 'EU Horizon Europe',
    program: 'Digital, Industry and Space',
    amount: '€2.5M - €4M',
    status: 'Consortium Confirmed',
    deadline: 'September 2025',
    nextActions: ['Monitor portal for exact deadline', 'Finalize agreements'],
    sourceUrl: 'https://ec.europa.eu/info/research-and-innovation/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en',
  },
];

export const roadmap: RoadmapMilestone[] = [
  {
    phase: 'Phase 1: Foundation',
    title: 'Months 1-6, $5M Budget',
    duration: '6 Months',
    status: 'In Progress',
    items: ['Integrate Audityzer into Diia', 'Pilot Web3 security layer', 'Develop lightweight IoT interface', 'Audit IoT smart contracts'],
  },
  {
    phase: 'Phase 2: Expansion',
    title: 'Months 7-18, $17M Budget',
    duration: '12 Months',
    status: 'Planned',
    items: ['Deploy security across 150+ Diia services', 'Launch European R&D partnerships', 'Scale to 10,000+ IoT devices', 'Launch Diia IoT Dashboard'],
  },
  {
    phase: 'Phase 3: European Leadership',
    title: 'Months 19-36, $26M Budget',
    duration: '18 Months',
    status: 'Planned',
    items: ['Export model to 5 Eastern Partnership countries', 'Deploy 100,000+ IoT devices', 'Achieve €15M technology export revenue', 'Capture 5% of European IoT security market'],
  },
];

export const accountabilityMatrix: AccountabilityMatrixRow[] = [
    { activity: 'Product Roadmap', partnershipsLead: ResponsibilityLevel.CoOwner, vpEngineering: ResponsibilityLevel.CoOwner, vpProduct: ResponsibilityLevel.Primary, vpMarketing: ResponsibilityLevel.Support, generalCounsel: ResponsibilityLevel.Aware },
    { activity: 'Integration Dev', partnershipsLead: ResponsibilityLevel.Support, vpEngineering: ResponsibilityLevel.Primary, vpProduct: ResponsibilityLevel.CoOwner, vpMarketing: ResponsibilityLevel.Aware, generalCounsel: ResponsibilityLevel.Aware },
    { activity: 'Go-to-Market Plan', partnershipsLead: ResponsibilityLevel.CoOwner, vpEngineering: ResponsibilityLevel.Aware, vpProduct: ResponsibilityLevel.Support, vpMarketing: ResponsibilityLevel.Primary, generalCounsel: ResponsibilityLevel.Aware },
    { activity: 'Legal Review', partnershipsLead: ResponsibilityLevel.Support, vpEngineering: ResponsibilityLevel.Aware, vpProduct: ResponsibilityLevel.Aware, vpMarketing: ResponsibilityLevel.Aware, generalCounsel: ResponsibilityLevel.Primary },
    { activity: 'Partner Research', partnershipsLead: ResponsibilityLevel.Primary, vpEngineering: ResponsibilityLevel.Aware, vpProduct: ResponsibilityLevel.Aware, vpMarketing: ResponsibilityLevel.Support, generalCounsel: ResponsibilityLevel.Aware },
    { activity: 'Contract Negotiation', partnershipsLead: ResponsibilityLevel.Primary, vpEngineering: ResponsibilityLevel.Aware, vpProduct: ResponsibilityLevel.Aware, vpMarketing: ResponsibilityLevel.Aware, generalCounsel: ResponsibilityLevel.CoOwner },
];

export const executionChecklist: ExecutionTask[] = [
  { id: 'ex1', day: 'Monday', time: '9:00 AM', title: 'Team Kickoff Meeting', duration: '1 hour', details: ['CEO opening', 'Partnerships Lead presents strategy', 'Each department presents role'], outcome: 'Full team alignment + green light to proceed', completed: true },
  { id: 'ex2', day: 'Tuesday', time: '10:00 AM', title: 'Infrastructure Setup', duration: '4-6 hours', details: ['CRM setup (Salesforce/HubSpot)', 'Project management (Jira/Asana)', 'Monitoring dashboards (Datadog)'], outcome: 'All systems operational by end of day', completed: true },
  { id: 'ex3', day: 'Tuesday', time: '2:00 PM', title: 'Zapier Education', duration: '4 hours', details: ['Watch Zapier Partner Program videos', 'Study developer platform'], outcome: 'Team fully educated on Zapier by EOD', completed: false },
  { id: 'ex4', day: 'Wednesday', time: '9:00 AM', title: 'Partner Research', duration: '6 hours', details: ['Research Top 5 partners (CertiK, Trail of Bits)', 'Create 1-page brief per partner'], outcome: '5 partner briefs + verified contact list', completed: false },
  { id: 'ex5', day: 'Thursday', time: '9:00 AM', title: 'Outreach Campaign', duration: '3 hours', details: ['Draft personalized emails to Top 5 partners', 'Set up email tracking'], outcome: 'Target: 40%+ response rate', completed: false },
  { id: 'ex6', day: 'Friday', time: '10:00 AM', title: 'Weekly Sync', duration: '1 hour', details: ['Partnerships: Zapier status, partner research', 'Engineering: Spec status, API setup'], outcome: 'Team alignment + clear priorities for Week 2', completed: false },
];


export const teamTasks: TeamTask[] = [
  {
    team: 'Partnerships Lead',
    tasks: [
      { description: 'Submit Zapier Solution Partner application', timeline: 'Week 1', completed: true },
      { description: 'Research & contact Top 5 partners', timeline: 'Week 1', completed: false },
      { description: 'Lead partner negotiations', timeline: 'Weeks 2-4', completed: false },
    ],
  },
  {
    team: 'VP Engineering',
    tasks: [
      { description: 'Create Zapier integration specification', timeline: 'Week 1', completed: true },
      { description: 'Set up Zapier Developer Platform', timeline: 'Week 1', completed: false },
      { description: 'Build monitoring & alerting', timeline: 'Week 1', completed: false },
    ],
  },
  {
    team: 'VP Product',
    tasks: [
      { description: 'Plan integration roadmap & features', timeline: 'Week 1', completed: false },
      { description: 'Design 10 Zap templates', timeline: 'Week 1', completed: false },
      { description: 'Create customer success playbook', timeline: 'Week 1', completed: false },
    ],
  },
  {
    team: 'VP Marketing',
    tasks: [
      { description: 'Create 4-phase launch go-to-market plan', timeline: 'Week 1', completed: false },
      { description: 'Write Zapier announcement blog post', timeline: 'Week 2', completed: false },
      { description: 'Record 5-minute demo video', timeline: 'Week 2', completed: false },
    ],
  },
  {
    team: 'IoT & Web3 Security',
    tasks: [
      { description: 'Develop lightweight IoT interface', timeline: 'Q3 2025', completed: false },
      { description: 'Audit IoT smart contracts', timeline: 'Q3 2025', completed: false },
      { description: 'Implement failover logic for Web3 providers', timeline: 'Q4 2025', completed: false },
    ],
  }
];