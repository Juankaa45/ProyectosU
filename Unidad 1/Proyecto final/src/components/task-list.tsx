import React from "react";
import { Checkbox, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
  dueDate: string;
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Revisar propuesta de marketing",
    completed: false,
    priority: "high",
    dueDate: "Hoy"
  },
  {
    id: 2,
    title: "Preparar presentación para cliente",
    completed: false,
    priority: "medium",
    dueDate: "Mañana"
  },
  {
    id: 3,
    title: "Actualizar documentación del proyecto",
    completed: false,
    priority: "low",
    dueDate: "23 Oct"
  },
  {
    id: 4,
    title: "Reunión con equipo de desarrollo",
    completed: true,
    priority: "medium",
    dueDate: "Completado"
  }
];

export const TaskList: React.FC = () => {
  const [taskList, setTaskList] = React.useState<Task[]>(tasks);

  const toggleTaskCompletion = (id: number) => {
    setTaskList(taskList.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-danger-500";
      case "medium": return "text-warning-500";
      case "low": return "text-success-500";
      default: return "text-default-500";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high": return "lucide:alert-circle";
      case "medium": return "lucide:alert-triangle";
      case "low": return "lucide:info";
      default: return "lucide:circle";
    }
  };

  return (
    <div className="flex flex-col">
      {taskList.map((task) => (
        <div key={task.id} className="task-item">
          <Checkbox
            isSelected={task.completed}
            onValueChange={() => toggleTaskCompletion(task.id)}
            size="sm"
          />
          <div className="flex-1">
            <p className={`text-sm ${task.completed ? 'line-through text-default-400' : ''}`}>
              {task.title}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <Tooltip content={`Prioridad ${task.priority}`}>
                <Icon 
                  icon={getPriorityIcon(task.priority)} 
                  className={`${getPriorityColor(task.priority)} text-xs`} 
                  width={14}
                />
              </Tooltip>
              <span className="text-xs text-default-500">{task.dueDate}</span>
            </div>
          </div>
          <button className="text-default-400 hover:text-default-600">
            <Icon icon="lucide:more-vertical" width={16} />
          </button>
        </div>
      ))}
    </div>
  );
};
