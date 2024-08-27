import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const boardController = {
  getAll: async (req, res) => {
    const boards = await prisma.boards.findMany({
      include: {
        columns: {
          include: {
            tasks: {
              include: {
                subtasks: true,
              },
            },
          },
        },
      },
    });
    res.status(200).json(boards);
  },
};

export default boardController;
