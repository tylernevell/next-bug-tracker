export enum BugPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export interface BugTracker {
  id: string;
  description: string;
  priority: BugPriority;
}

export interface BugListTableProps {
  bugs: BugTracker[];
  onDeleteBug: Function;
}
