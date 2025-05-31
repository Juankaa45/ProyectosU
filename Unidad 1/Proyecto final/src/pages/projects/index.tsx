import React from "react";
import { Card, CardBody, CardHeader, Button, Input, Tabs, Tab, Chip, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Icon } from "@iconify/react";

interface Project {
  id: number;
  name: string;
  description: string;
  status: "En Progreso" | "Completado" | "En Pausa" | "Cancelado";
  progress: number;
  team: { id: number; name: string; avatar: string }[];
  dueDate: string;
  client: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Rediseño de Sitio Web Corporativo",
    description: "Actualización completa del sitio web principal con nuevo diseño y funcionalidades.",
    status: "En Progreso",
    progress: 65,
    team: [
      { id: 1, name: "María López", avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=5" },
      { id: 2, name: "Carlos Ruiz", avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=7" },
      { id: 3, name: "Ana Martínez", avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=9" }
    ],
    dueDate: "15 Nov, 2023",
    client: "Tecnologías Avanzadas S.A."
  },
  {
    id: 2,
    name: "Aplicación Móvil de Ventas",
    description: "Desarrollo de app móvil para equipo de ventas con seguimiento de clientes y pedidos.",
    status: "En Progreso",
    progress: 40,
    team: [
      { id: 2, name: "Carlos Ruiz", avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=7" },
      { id: 4, name: "Roberto Sánchez", avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=11" }
    ],
    dueDate: "30 Nov, 2023",
    client: "Distribuidora Nacional"
  },
  {
    id: 3,
    name: "Sistema de Gestión de Inventario",
    description: "Implementación de sistema automatizado para control de inventario y logística.",
    status: "Completado",
    progress: 100,
    team: [
      { id: 1, name: "María López", avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=5" },
      { id: 3, name: "Ana Martínez", avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=9" },
      { id: 5, name: "Laura Gómez", avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=13" }
    ],
    dueDate: "10 Oct, 2023",
    client: "Logística Global"
  },
  {
    id: 4,
    name: "Campaña de Marketing Digital",
    description: "Estrategia y ejecución de campaña en redes sociales y medios digitales.",
    status: "En Pausa",
    progress: 30,
    team: [
      { id: 5, name: "Laura Gómez", avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=13" },
      { id: 6, name: "Pedro Díaz", avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=15" }
    ],
    dueDate: "5 Dic, 2023",
    client: "Moda Exclusiva"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "En Progreso": return "primary";
    case "Completado": return "success";
    case "En Pausa": return "warning";
    case "Cancelado": return "danger";
    default: return "default";
  }
};

export const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  
  React.useEffect(() => {
    const filtered = projects.filter(project => 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [searchQuery]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Proyectos</h1>
          <p className="text-default-500">Gestiona y supervisa todos los proyectos</p>
        </div>
        <Button color="primary" startContent={<Icon icon="lucide:plus" />}>
          Nuevo Proyecto
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Buscar proyectos..."
            value={searchQuery}
            onValueChange={setSearchQuery}
            startContent={<Icon icon="lucide:search" className="text-default-400" />}
            className="w-full sm:max-w-xs"
          />
          <div className="flex gap-2 ml-auto">
            <Button variant="flat" startContent={<Icon icon="lucide:filter" />}>
              Filtrar
            </Button>
            <Button variant="flat" startContent={<Icon icon="lucide:sliders" />}>
              Ordenar
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <Tabs aria-label="Opciones" color="primary" variant="underlined">
            <Tab key="all" title="Todos">
              <div className="pt-4 space-y-4">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map(project => (
                    <Card key={project.id} className="card-hover">
                      <CardBody>
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h3 className="text-lg font-semibold">{project.name}</h3>
                              <Dropdown>
                                <DropdownTrigger>
                                  <Button isIconOnly size="sm" variant="light">
                                    <Icon icon="lucide:more-vertical" />
                                  </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Acciones">
                                  <DropdownItem startContent={<Icon icon="lucide:edit" />}>Editar</DropdownItem>
                                  <DropdownItem startContent={<Icon icon="lucide:copy" />}>Duplicar</DropdownItem>
                                  <DropdownItem startContent={<Icon icon="lucide:archive" />}>Archivar</DropdownItem>
                                  <DropdownItem startContent={<Icon icon="lucide:trash-2" />} className="text-danger" color="danger">
                                    Eliminar
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                            <p className="text-default-500 text-sm mt-1">{project.description}</p>
                            <div className="flex items-center gap-2 mt-3">
                              <Icon icon="lucide:building" className="text-default-500" width={16} />
                              <span className="text-sm">{project.client}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <Icon icon="lucide:calendar" className="text-default-500" width={16} />
                              <span className="text-sm">Fecha límite: {project.dueDate}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-3 md:items-end">
                            <Chip color={getStatusColor(project.status)} variant="flat">
                              {project.status}
                            </Chip>
                            
                            <div className="flex -space-x-2 mt-2">
                              {project.team.map(member => (
                                <Avatar
                                  key={member.id}
                                  size="sm"
                                  src={member.avatar}
                                  className="border-2 border-background"
                                />
                              ))}
                              {project.team.length > 3 && (
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-default-100 text-default-500 text-xs border-2 border-background">
                                  +{project.team.length - 3}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <Icon icon="lucide:search-x" className="text-default-400" width={48} />
                    <p className="text-default-500 mt-4">No se encontraron proyectos</p>
                    <Button color="primary" variant="flat" className="mt-4" onPress={() => setSearchQuery("")}>
                      Limpiar búsqueda
                    </Button>
                  </div>
                )}
              </div>
            </Tab>
            <Tab key="active" title="Activos" />
            <Tab key="completed" title="Completados" />
            <Tab key="archived" title="Archivados" />
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};
