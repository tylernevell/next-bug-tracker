import { PrismaClient } from '@prisma/client';
import { BugTracker } from '../../types/types';
const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: BugTracker, res) => {
  const { id, description, priority } = req;
  const bug = await prisma.bug.create({ data: { id, description, priority } });
  res.json(bug);
};
