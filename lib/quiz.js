import { prisma } from '@/lib/prisma';

export async function getQuiz() {
  return prisma.quiz_table.findMany();
}
