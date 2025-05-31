import React from "react";
import { Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";

interface ActivityItem {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  target: string;
  time: string;
  icon: string;
  iconColor: string;
}

const activities: ActivityItem[] = [
  {
    id: 1,
    user: {
      name: "María López",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=5"
    },
    action: "comentó en",
    target: "Propuesta de Marketing",
    time: "Hace 5 min",
    icon: "lucide:message-square",
    iconColor: "bg-primary-100 text-primary-500"
  },
  {
    id: 2,
    user: {
      name: "Carlos Ruiz",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=7"
    },
    action: "completó",
    target: "Diseño de Interfaz",
    time: "Hace 1 hora",
    icon: "lucide:check-circle",
    iconColor: "bg-success-100 text-success-500"
  },
  {
    id: 3,
    user: {
      name: "Ana Martínez",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=9"
    },
    action: "subió",
    target: "Documentos Financieros",
    time: "Hace 3 horas",
    icon: "lucide:file-plus",
    iconColor: "bg-warning-100 text-warning-500"
  },
  {
    id: 4,
    user: {
      name: "Roberto Sánchez",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=11"
    },
    action: "creó",
    target: "Nuevo Proyecto",
    time: "Hace 5 horas",
    icon: "lucide:folder-plus",
    iconColor: "bg-primary-100 text-primary-500"
  },
  {
    id: 5,
    user: {
      name: "Laura Gómez",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=13"
    },
    action: "actualizó",
    target: "Estado de Tareas",
    time: "Ayer",
    icon: "lucide:refresh-cw",
    iconColor: "bg-success-100 text-success-500"
  }
];

export const RecentActivity: React.FC = () => {
  return (
    <div className="flex flex-col">
      {activities.map((activity) => (
        <div key={activity.id} className="flex gap-3 py-3 border-b border-divider last:border-0">
          <div className={`${activity.iconColor} p-2 rounded-full h-fit`}>
            <Icon icon={activity.icon} width={16} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Avatar
                size="sm"
                src={activity.user.avatar}
                className="flex-shrink-0"
              />
              <span className="font-medium text-sm">{activity.user.name}</span>
            </div>
            <p className="text-sm mt-1">
              <span className="text-default-500">{activity.action}</span>{" "}
              <span className="font-medium">{activity.target}</span>
            </p>
            <p className="text-xs text-default-400 mt-1">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
