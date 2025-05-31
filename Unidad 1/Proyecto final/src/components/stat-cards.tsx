import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
  iconColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, isPositive, icon, iconColor }) => {
  return (
    <Card>
      <CardBody className="flex justify-between">
        <div>
          <p className="text-default-500 text-sm">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
          <div className={`flex items-center gap-1 mt-1 text-xs ${isPositive ? 'text-success-500' : 'text-danger-500'}`}>
            <Icon icon={isPositive ? 'lucide:trending-up' : 'lucide:trending-down'} width={14} />
            <span>{change} vs mes anterior</span>
          </div>
        </div>
        <div className={`${iconColor} p-3 rounded-lg h-fit`}>
          <Icon icon={icon} width={24} className="text-white" />
        </div>
      </CardBody>
    </Card>
  );
};

export const StatCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Ingresos Totales"
        value="$24,780"
        change="+12.5%"
        isPositive={true}
        icon="lucide:dollar-sign"
        iconColor="bg-primary-500"
      />
      <StatCard
        title="Nuevos Clientes"
        value="120"
        change="+8.2%"
        isPositive={true}
        icon="lucide:users"
        iconColor="bg-success-500"
      />
      <StatCard
        title="Proyectos Activos"
        value="34"
        change="+2.4%"
        isPositive={true}
        icon="lucide:briefcase"
        iconColor="bg-warning-500"
      />
      <StatCard
        title="Tasa de Conversión"
        value="5.6%"
        change="-0.5%"
        isPositive={false}
        icon="lucide:percent"
        iconColor="bg-danger-500"
      />
    </div>
  );
};
