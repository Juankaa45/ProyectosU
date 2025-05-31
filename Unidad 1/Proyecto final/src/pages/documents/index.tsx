import React from "react";
import { Card, CardBody, CardHeader, Button, Input, Tabs, Tab, Chip, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import { Icon } from "@iconify/react";

interface Document {
  id: number;
  name: string;
  type: "pdf" | "doc" | "xls" | "img" | "zip";
  size: string;
  owner: {
    name: string;
    avatar: string;
  };
  shared: boolean;
  lastModified: string;
}

const documents: Document[] = [
  {
    id: 1,
    name: "Propuesta de Marketing Q4",
    type: "pdf",
    size: "2.4 MB",
    owner: {
      name: "María López",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=5"
    },
    shared: true,
    lastModified: "Hace 2 días"
  },
  {
    id: 2,
    name: "Presupuesto Anual",
    type: "xls",
    size: "1.8 MB",
    owner: {
      name: "Carlos Ruiz",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=7"
    },
    shared: true,
    lastModified: "Hace 1 semana"
  },
  {
    id: 3,
    name: "Contrato Cliente XYZ",
    type: "doc",
    size: "540 KB",
    owner: {
      name: "Ana Martínez",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=9"
    },
    shared: false,
    lastModified: "Hace 3 días"
  },
  {
    id: 4,
    name: "Logo Empresa - Alta Resolución",
    type: "img",
    size: "3.2 MB",
    owner: {
      name: "Roberto Sánchez",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=11"
    },
    shared: false,
    lastModified: "Hace 2 semanas"
  },
  {
    id: 5,
    name: "Recursos Gráficos",
    type: "zip",
    size: "24.5 MB",
    owner: {
      name: "Laura Gómez",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=13"
    },
    shared: true,
    lastModified: "Ayer"
  }
];

const getFileIcon = (type: string) => {
  switch (type) {
    case "pdf": return "lucide:file-text";
    case "doc": return "lucide:file-text";
    case "xls": return "lucide:file-spreadsheet";
    case "img": return "lucide:image";
    case "zip": return "lucide:folder-archive";
    default: return "lucide:file";
  }
};

const getFileIconColor = (type: string) => {
  switch (type) {
    case "pdf": return "text-danger-500";
    case "doc": return "text-primary-500";
    case "xls": return "text-success-500";
    case "img": return "text-warning-500";
    case "zip": return "text-secondary-500";
    default: return "text-default-500";
  }
};

export const Documents: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredDocuments, setFilteredDocuments] = React.useState(documents);
  
  React.useEffect(() => {
    const filtered = documents.filter(doc => 
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.owner.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDocuments(filtered);
  }, [searchQuery]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Documentos</h1>
          <p className="text-default-500">Gestiona tus archivos y documentos</p>
        </div>
        <div className="flex gap-2">
          <Button color="primary" startContent={<Icon icon="lucide:upload" />}>
            Subir
          </Button>
          <Button variant="bordered" startContent={<Icon icon="lucide:folder-plus" />}>
            Nueva Carpeta
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Buscar documentos..."
            value={searchQuery}
            onValueChange={setSearchQuery}
            startContent={<Icon icon="lucide:search" className="text-default-400" />}
            className="w-full sm:max-w-xs"
          />
          <div className="flex gap-2 ml-auto">
            <Button variant="flat" startContent={<Icon icon="lucide:filter" />}>
              Filtrar
            </Button>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="flat" startContent={<Icon icon="lucide:list" />}>
                  Vista
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Opciones de vista">
                <DropdownItem key="list" startContent={<Icon icon="lucide:check" />}>Lista</DropdownItem>
                <DropdownItem key="grid">Cuadrícula</DropdownItem>
                <DropdownItem key="compact">Compacta</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardHeader>
        <CardBody>
          <Tabs aria-label="Opciones" color="primary" variant="underlined">
            <Tab key="all" title="Todos">
              <div className="pt-4">
                <Table removeWrapper aria-label="Documentos">
                  <TableHeader>
                    <TableColumn>NOMBRE</TableColumn>
                    <TableColumn>PROPIETARIO</TableColumn>
                    <TableColumn>TAMAÑO</TableColumn>
                    <TableColumn>MODIFICADO</TableColumn>
                    <TableColumn>ACCIONES</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {filteredDocuments.length > 0 ? (
                      filteredDocuments.map((doc) => (
                        <TableRow key={doc.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg ${getFileIconColor(doc.type)} bg-opacity-10`}>
                                <Icon icon={getFileIcon(doc.type)} width={20} className={getFileIconColor(doc.type)} />
                              </div>
                              <div>
                                <p className="font-medium">{doc.name}</p>
                                <p className="text-default-500 text-xs uppercase">{doc.type}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Avatar
                                size="sm"
                                src={doc.owner.avatar}
                              />
                              <span>{doc.owner.name}</span>
                            </div>
                          </TableCell>
                          <TableCell>{doc.size}</TableCell>
                          <TableCell>{doc.lastModified}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Button isIconOnly size="sm" variant="light">
                                <Icon icon="lucide:download" width={18} />
                              </Button>
                              {doc.shared ? (
                                <Button isIconOnly size="sm" variant="light">
                                  <Icon icon="lucide:users" width={18} className="text-primary-500" />
                                </Button>
                              ) : (
                                <Button isIconOnly size="sm" variant="light">
                                  <Icon icon="lucide:share-2" width={18} />
                                </Button>
                              )}
                              <Dropdown>
                                <DropdownTrigger>
                                  <Button isIconOnly size="sm" variant="light">
                                    <Icon icon="lucide:more-vertical" width={18} />
                                  </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Acciones">
                                  <DropdownItem startContent={<Icon icon="lucide:eye" />}>Ver</DropdownItem>
                                  <DropdownItem startContent={<Icon icon="lucide:edit" />}>Renombrar</DropdownItem>
                                  <DropdownItem startContent={<Icon icon="lucide:copy" />}>Duplicar</DropdownItem>
                                  <DropdownItem startContent={<Icon icon="lucide:move" />}>Mover</DropdownItem>
                                  <DropdownItem startContent={<Icon icon="lucide:trash-2" />} className="text-danger" color="danger">
                                    Eliminar
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5}>
                          <div className="flex flex-col items-center justify-center py-12">
                            <Icon icon="lucide:search-x" className="text-default-400" width={48} />
                            <p className="text-default-500 mt-4">No se encontraron documentos</p>
                            <Button color="primary" variant="flat" className="mt-4" onPress={() => setSearchQuery("")}>
                              Limpiar búsqueda
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </Tab>
            <Tab key="recent" title="Recientes" />
            <Tab key="shared" title="Compartidos" />
            <Tab key="favorites" title="Favoritos" />
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};
