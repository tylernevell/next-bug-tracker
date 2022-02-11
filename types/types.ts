export enum BugPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export interface BugTracker {
  id: string;
  description: string;
  priority: string;
}

export interface BugListTableProps {
  bugs: BugTracker[];
  onDeleteBug: Function;
}
