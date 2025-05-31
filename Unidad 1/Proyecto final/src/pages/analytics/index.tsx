import React from "react";
import { Card, CardBody, CardHeader, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

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

const trafficData = [
  { name: "Directo", value: 400 },
  { name: "Orgánico", value: 300 },
  { name: "Referido", value: 300 },
  { name: "Social", value: 200 },
];

const COLORS = ["#0062d6", "#17c964", "#f5a524", "#f31260"];

const conversionData = [
  { name: "Ene", tasa: 65 },
  { name: "Feb", tasa: 59 },
  { name: "Mar", tasa: 80 },
  { name: "Abr", tasa: 81 },
  { name: "May", tasa: 56 },
  { name: "Jun", tasa: 55 },
  { name: "Jul", tasa: 40 },
];

const clientsData = [
  { name: "Ene", nuevos: 400, recurrentes: 240 },
  { name: "Feb", nuevos: 300, recurrentes: 139 },
  { name: "Mar", nuevos: 200, recurrentes: 980 },
  { name: "Abr", nuevos: 278, recurrentes: 390 },
  { name: "May", nuevos: 189, recurrentes: 480 },
  { name: "Jun", nuevos: 239, recurrentes: 380 },
  { name: "Jul", nuevos: 349, recurrentes: 430 },
];

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Analíticas</h1>
          <p className="text-default-500">Métricas y estadísticas de rendimiento</p>
        </div>
        <div className="flex gap-2">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" startContent={<Icon icon="lucide:calendar" />}>
                Último Mes
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Período de tiempo">
              <DropdownItem key="day">Hoy</DropdownItem>
              <DropdownItem key="week">Esta Semana</DropdownItem>
              <DropdownItem key="month" startContent={<Icon icon="lucide:check" />}>Último Mes</DropdownItem>
              <DropdownItem key="quarter">Último Trimestre</DropdownItem>
              <DropdownItem key="year">Último Año</DropdownItem>
              <DropdownItem key="custom">Personalizado</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button variant="flat" startContent={<Icon icon="lucide:download" />}>
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardBody>
            <div className="flex justify-between">
              <div>
                <p className="text-default-500 text-sm">Ingresos Totales</p>
                <p className="text-2xl font-semibold mt-1">$24,780</p>
                <div className="flex items-center gap-1 mt-1 text-xs text-success-500">
                  <Icon icon="lucide:trending-up" width={14} />
                  <span>+12.5% vs mes anterior</span>
                </div>
              </div>
              <div className="bg-primary-500 p-3 rounded-lg h-fit">
                <Icon icon="lucide:dollar-sign" width={24} className="text-white" />
              </div>
            </div>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody>
            <div className="flex justify-between">
              <div>
                <p className="text-default-500 text-sm">Nuevos Clientes</p>
                <p className="text-2xl font-semibold mt-1">120</p>
                <div className="flex items-center gap-1 mt-1 text-xs text-success-500">
                  <Icon icon="lucide:trending-up" width={14} />
                  <span>+8.2% vs mes anterior</span>
                </div>
              </div>
              <div className="bg-success-500 p-3 rounded-lg h-fit">
                <Icon icon="lucide:users" width={24} className="text-white" />
              </div>
            </div>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody>
            <div className="flex justify-between">
              <div>
                <p className="text-default-500 text-sm">Proyectos Activos</p>
                <p className="text-2xl font-semibold mt-1">34</p>
                <div className="flex items-center gap-1 mt-1 text-xs text-success-500">
                  <Icon icon="lucide:trending-up" width={14} />
                  <span>+2.4% vs mes anterior</span>
                </div>
              </div>
              <div className="bg-warning-500 p-3 rounded-lg h-fit">
                <Icon icon="lucide:briefcase" width={24} className="text-white" />
              </div>
            </div>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody>
            <div className="flex justify-between">
              <div>
                <p className="text-default-500 text-sm">Tasa de Conversión</p>
                <p className="text-2xl font-semibold mt-1">5.6%</p>
                <div className="flex items-center gap-1 mt-1 text-xs text-danger-500">
                  <Icon icon="lucide:trending-down" width={14} />
                  <span>-0.5% vs mes anterior</span>
                </div>
              </div>
              <div className="bg-danger-500 p-3 rounded-lg h-fit">
                <Icon icon="lucide:percent" width={24} className="text-white" />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex justify-between">
            <h3 className="text-lg font-semibold">Ingresos Mensuales</h3>
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
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--heroui-divider))" />
                  <XAxis dataKey="name" />
                  <YAxis />
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
            <h3 className="text-lg font-semibold">Fuentes de Tráfico</h3>
            <Button variant="flat" size="sm" color="primary">
              Ver Detalles
            </Button>
          </CardHeader>
          <CardBody>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={trafficData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {trafficData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex justify-between">
            <h3 className="text-lg font-semibold">Tasa de Conversión</h3>
            <Button variant="flat" size="sm" color="primary">
              Ver Detalles
            </Button>
          </CardHeader>
          <CardBody>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={conversionData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--heroui-divider))" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="tasa"
                    stroke="hsl(var(--heroui-success-500))"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex justify-between">
            <h3 className="text-lg font-semibold">Clientes Nuevos vs Recurrentes</h3>
            <Button variant="flat" size="sm" color="primary">
              Ver Detalles
            </Button>
          </CardHeader>
          <CardBody>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={clientsData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--heroui-divider))" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="nuevos" fill="hsl(var(--heroui-primary-500))" />
                  <Bar dataKey="recurrentes" fill="hsl(var(--heroui-warning-500))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
