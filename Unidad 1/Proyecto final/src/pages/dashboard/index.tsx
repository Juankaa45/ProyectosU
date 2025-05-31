import React from "react";
import { Card, CardBody, CardHeader, Button, Progress, Avatar, Checkbox } from "@heroui/react";
import { Icon } from "@iconify/react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TaskList } from "../../components/task-list";
import { StatCards } from "../../components/stat-cards";
import { RecentActivity } from "../../components/recent-activity";

const salesData = [
  { name: "Ene", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Abr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
  { name: "Ago", value: 4000 },
  { name: "Sep", value: 2500 },
  { name: "Oct", value: 6000 },
  { name: "Nov", value: 7000 },
  { name: "Dic", value: 5500 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-default-500">Bienvenido de nuevo, John</p>
        </div>
        <div className="flex gap-2">
          <Button color="primary" startContent={<Icon icon="lucide:plus" />}>
            Nuevo Proyecto
          </Button>
          <Button variant="bordered" startContent={<Icon icon="lucide:download" />}>
            Exportar
          </Button>
        </div>
      </div>

      <StatCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex justify-between">
            <h3 className="text-lg font-semibold">Rendimiento de Ventas</h3>
            <Button variant="flat" size="sm" color="primary">
              Ver Detalles
            </Button>
          </CardHeader>
          <CardBody>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={salesData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--heroui-primary-500))" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="hsl(var(--heroui-primary-500))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--heroui-primary-500))"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex justify-between">
            <h3 className="text-lg font-semibold">Tareas Pendientes</h3>
            <Button variant="flat" size="sm" color="primary">
              Ver Todas
            </Button>
          </CardHeader>
          <CardBody>
            <TaskList />
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex justify-between">
            <h3 className="text-lg font-semibold">Proyectos Activos</h3>
            <Button variant="flat" size="sm" color="primary">
              Ver Todos
            </Button>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {[1, 2, 3].map((project) => (
                <div key={project} className="border border-divider rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium">Proyecto Alfa {project}</h4>
                      <p className="text-default-500 text-sm">Fecha límite: 15 de Noviembre, 2023</p>
                    </div>
                    <Button isIconOnly size="sm" variant="flat">
                      <Icon icon="lucide:more-vertical" />
                    </Button>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progreso</span>
                      <span>{project * 25}%</span>
                    </div>
                    <Progress
                      value={project * 25}
                      color={project === 1 ? "warning" : project === 2 ? "primary" : "success"}
                      className="h-2"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <Avatar
                          key={i}
                          size="sm"
                          src={`https://img.heroui.chat/image/avatar?w=200&h=200&u=${i + project * 3}`}
                          className="border-2 border-background"
                        />
                      ))}
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-default-100 text-default-500 text-xs border-2 border-background">
                        +2
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-default-500 text-sm">
                      <Icon icon="lucide:message-square" />
                      <span>{project * 3}</span>
                      <Icon icon="lucide:paperclip" className="ml-2" />
                      <span>{project * 2}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex justify-between">
            <h3 className="text-lg font-semibold">Actividad Reciente</h3>
            <Button variant="flat" size="sm" color="primary">
              Ver Todo
            </Button>
          </CardHeader>
          <CardBody>
            <RecentActivity />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
