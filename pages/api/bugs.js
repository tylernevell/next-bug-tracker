// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const bugs = [
    {
      id: '1234',
      description: 'Test Bug 1234',
      priority: 'Medium',
    },
    {
      id: '2345',
      description: 'Test Bug 2345',
      priority: 'Low',
    },
  ];

  res.json(bugs);
};
