import React from "react";
import { Card, CardBody, CardHeader, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: "meeting" | "deadline" | "reminder" | "personal";
  participants?: string[];
}

const events: Event[] = [
  {
    id: 1,
    title: "Reunión con Cliente",
    date: "Hoy",
    time: "10:00 - 11:30",
    type: "meeting",
    participants: ["María López", "Carlos Ruiz", "Cliente"]
  },
  {
    id: 2,
    title: "Revisión de Proyecto",
    date: "Hoy",
    time: "14:00 - 15:00",
    type: "meeting",
    participants: ["Equipo de Desarrollo"]
  },
  {
    id: 3,
    title: "Entrega de Propuesta",
    date: "Mañana",
    time: "12:00",
    type: "deadline"
  },
  {
    id: 4,
    title: "Llamada con Proveedor",
    date: "24 Oct",
    time: "11:00 - 11:30",
    type: "meeting",
    participants: ["Ana Martínez"]
  },
  {
    id: 5,
    title: "Recordatorio: Pago de Facturas",
    date: "25 Oct",
    time: "Todo el día",
    type: "reminder"
  },
  {
    id: 6,
    title: "Almuerzo de Equipo",
    date: "26 Oct",
    time: "13:00 - 14:30",
    type: "personal",
    participants: ["Todo el equipo"]
  }
];

const getEventTypeIcon = (type: string) => {
  switch (type) {
    case "meeting": return "lucide:users";
    case "deadline": return "lucide:alert-circle";
    case "reminder": return "lucide:bell";
    case "personal": return "lucide:coffee";
    default: return "lucide:calendar";
  }
};

const getEventTypeColor = (type: string) => {
  switch (type) {
    case "meeting": return "primary";
    case "deadline": return "danger";
    case "reminder": return "warning";
    case "personal": return "success";
    default: return "default";
  }
};

const daysOfWeek = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.toLocaleString('es-ES', { month: 'long' });

// Generate calendar days
const generateCalendarDays = () => {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  
  const days = [];
  const firstDayIndex = (firstDayOfMonth.getDay() + 6) % 7; // Adjust for Monday start
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayIndex; i++) {
    days.push({ day: "", isCurrentMonth: false });
  }
  
  // Add days of the current month
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    days.push({
      day: i,
      isCurrentMonth: true,
      isToday: i === today.getDate(),
      hasEvents: events.some(event => {
        if (event.date === "Hoy" && i === today.getDate()) return true;
        if (event.date === "Mañana" && i === today.getDate() + 1) return true;
        const eventDay = parseInt(event.date.split(" ")[0]);
        return !isNaN(eventDay) && eventDay === i;
      })
    });
  }
  
  return days;
};

export const Calendar: React.FC = () => {
  const calendarDays = generateCalendarDays();
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Calendario</h1>
          <p className="text-default-500">Gestiona tus eventos y reuniones</p>
        </div>
        <div className="flex gap-2">
          <Button color="primary" startContent={<Icon icon="lucide:plus" />}>
            Nuevo Evento
          </Button>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" startContent={<Icon icon="lucide:calendar" />}>
                Vista
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Opciones de vista">
              <DropdownItem key="day">Día</DropdownItem>
              <DropdownItem key="week">Semana</DropdownItem>
              <DropdownItem key="month" startContent={<Icon icon="lucide:check" />}>Mes</DropdownItem>
              <DropdownItem key="agenda">Agenda</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex justify-between items-center">
            <h3 className="text-lg font-semibold capitalize">{currentMonth}</h3>
            <div className="flex gap-2">
              <Button isIconOnly variant="flat" size="sm">
                <Icon icon="lucide:chevron-left" />
              </Button>
              <Button isIconOnly variant="flat" size="sm">
                <Icon icon="lucide:chevron-right" />
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-7 gap-1">
              {daysOfWeek.map(day => (
                <div key={day} className="text-center py-2 text-default-500 font-medium text-sm">
                  {day}
                </div>
              ))}
              
              {calendarDays.map((day, index) => (
                <div 
                  key={index} 
                  className={`
                    min-h-[80px] p-1 border border-divider
                    ${!day.isCurrentMonth ? 'bg-default-50 text-default-300' : ''}
                    ${day.isToday ? 'bg-primary-50 border-primary-200' : ''}
                  `}
                >
                  {day.day && (
                    <>
                      <div className="text-right">
                        <span className={`
                          inline-block w-6 h-6 rounded-full text-center text-sm leading-6
                          ${day.isToday ? 'bg-primary-500 text-white' : ''}
                        `}>
                          {day.day}
                        </span>
                      </div>
                      {day.hasEvents && (
                        <div className="mt-1">
                          <div className="bg-primary-100 text-primary-700 text-xs p-1 rounded truncate">
                            Eventos
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Próximos Eventos</h3>
            <Button variant="flat" size="sm" color="primary">
              Ver Todos
            </Button>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {events.map(event => (
                <div key={event.id} className="border-b border-divider last:border-0 pb-4 last:pb-0">
                  <div className="flex items-start gap-3">
                    <div className={`bg-${getEventTypeColor(event.type)}-100 p-2 rounded-lg`}>
                      <Icon 
                        icon={getEventTypeIcon(event.type)} 
                        className={`text-${getEventTypeColor(event.type)}-500`} 
                        width={20} 
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium">{event.title}</h4>
                        <Chip size="sm" variant="flat" color={getEventTypeColor(event.type)}>
                          {event.type === "meeting" ? "Reunión" : 
                           event.type === "deadline" ? "Fecha límite" :
                           event.type === "reminder" ? "Recordatorio" : "Personal"}
                        </Chip>
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-sm text-default-500">
                        <Icon icon="lucide:calendar" width={14} />
                        <span>{event.date}</span>
                        <Icon icon="lucide:clock" width={14} className="ml-2" />
                        <span>{event.time}</span>
                      </div>
                      {event.participants && (
                        <div className="mt-2 text-sm text-default-500">
                          <span>Participantes: {event.participants.join(", ")}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
