// data/tasks.ts
export type Task = {
  id: string;
  title: string;
  openedAt: string;   // ISO date
  category?: "iluminacao" | "portaria" | "hidraulica" | "pintura" | "outros";
};

export const openTasks: Task[] = [
  { id: "1", title: "Lâmpada da entrada", openedAt: "2025-03-01T12:00:00-03:00", category: "iluminacao" },
  { id: "2", title: "Portão da garagem", openedAt: "2025-07-02T09:30:00-03:00", category: "portaria" },
  { id: "3", title: "Barulhos do elevador", openedAt: "2025-01-01T08:00:00-03:00", category: "pintura" },
  { id: "4", title: "100% das máquinas da lavanderia", openedAt: "2025-08-01T14:10:00-03:00", category: "hidraulica" },
  { id: "5", title: "Lâmpada queimada 14º andar", openedAt: "2025-08-29T18:05:00-03:00", category: "hidraulica" },
  { id: "6", title: "Lâmpada sempre ligada 14º andar", openedAt: "2025-05-20T18:05:00-03:00", category: "hidraulica" },
];

export const doneItems: { id: string; title: string; description: string }[] = [
  { id: "a", title: "Comunicado", description: "Comunicado para fazer curvas abertas no estacionamento" },
];
