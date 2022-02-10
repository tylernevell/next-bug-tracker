import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BugPriority, BugTracker } from '../types/types';
import { BugListTable } from './bug-list-table';

test('the bug table should display a list of bugs', () => {
  const bugList: BugTracker[] = [
    {
      id: '1234',
      description: 'A Low Priority Test Bug',
      priority: BugPriority.LOW,
    },
    {
      id: '2345',
      description: 'A Medium Priority Test Bug',
      priority: BugPriority.MEDIUM,
    },
    {
      id: '3456',
      description: 'A High Priority Test Bug',
      priority: BugPriority.HIGH,
    },
  ];

  render(<BugListTable bugs={bugList} onDeleteBug={() => {}} />);

  // test assertions that component rendering correctly
  const rows = screen.getAllByRole('row');
  for (let i = 1; i < rows.length; i += 1) {
    // check rendered rows against content in bugList array
    expect(rows[i]).toHaveTextContent(bugList[i - 1].description);
  }
});

test('the resolved button should remove the bug', () => {
  let bugList: BugTracker[] = [
    {
      id: '1234',
      description: 'A Low Priority Test Bug',
      priority: BugPriority.LOW,
    },
    {
      id: '2345',
      description: 'A Medium Priority Test Bug',
      priority: BugPriority.MEDIUM,
    },
    {
      id: '3456',
      description: 'A High Priority Test Bug',
      priority: BugPriority.HIGH,
    },
  ];
});
