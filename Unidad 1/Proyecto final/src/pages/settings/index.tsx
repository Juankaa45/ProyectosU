import React from "react";
import { Card, CardBody, CardHeader, Button, Input, Tabs, Tab, Switch, Avatar, Divider, Textarea, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Configuración</h1>
          <p className="text-default-500">Gestiona tus preferencias y ajustes</p>
        </div>
      </div>

      <Card>
        <CardBody>
          <Tabs aria-label="Opciones" color="primary" variant="underlined">
            <Tab key="profile" title="Perfil">
              <div className="pt-4 space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center gap-4">
                    <Avatar
                      src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
                      className="w-24 h-24"
                    />
                    <Button size="sm" variant="flat" color="primary">
                      Cambiar Foto
                    </Button>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Nombre"
                        placeholder="John"
                        defaultValue="John"
                      />
                      <Input
                        label="Apellido"
                        placeholder="Doe"
                        defaultValue="Doe"
                      />
                    </div>
                    <Input
                      label="Correo Electrónico"
                      placeholder="john.doe@empresa.com"
                      defaultValue="john.doe@empresa.com"
                      type="email"
                    />
                    <Input
                      label="Cargo"
                      placeholder="Administrador"
                      defaultValue="Administrador"
                    />
                    <Input
                      label="Teléfono"
                      placeholder="+34 600 123 456"
                      defaultValue="+34 600 123 456"
                      type="tel"
                    />
                    <Textarea
                      label="Biografía"
                      placeholder="Escribe una breve descripción sobre ti"
                      defaultValue="Administrador de sistemas con más de 10 años de experiencia en gestión de proyectos y equipos."
                    />
                    <div className="flex justify-end gap-2">
                      <Button variant="flat">Cancelar</Button>
                      <Button color="primary">Guardar Cambios</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab key="account" title="Cuenta">
              <div className="pt-4 space-y-6">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Cambiar Contraseña</h3>
                  </CardHeader>
                  <CardBody className="space-y-4">
                    <Input
                      label="Contraseña Actual"
                      placeholder="Ingresa tu contraseña actual"
                      type="password"
                    />
                    <Input
                      label="Nueva Contraseña"
                      placeholder="Ingresa tu nueva contraseña"
                      type="password"
                    />
                    <Input
                      label="Confirmar Nueva Contraseña"
                      placeholder="Confirma tu nueva contraseña"
                      type="password"
                    />
                    <div className="flex justify-end">
                      <Button color="primary">Actualizar Contraseña</Button>
                    </div>
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Sesiones Activas</h3>
                  </CardHeader>
                  <CardBody className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-default-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary-100 rounded-full">
                          <Icon icon="lucide:monitor" className="text-primary-500" width={20} />
                        </div>
                        <div>
                          <p className="font-medium">Windows 10 - Chrome</p>
                          <p className="text-default-500 text-sm">Madrid, España - Activo ahora</p>
                        </div>
                      </div>
                      <Chip color="success" variant="flat">Actual</Chip>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-default-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-default-100 rounded-full">
                          <Icon icon="lucide:smartphone" className="text-default-500" width={20} />
                        </div>
                        <div>
                          <p className="font-medium">iPhone 13 - Safari</p>
                          <p className="text-default-500 text-sm">Madrid, España - Hace 2 horas</p>
                        </div>
                      </div>
                      <Button size="sm" variant="flat" color="danger">
                        Cerrar Sesión
                      </Button>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="flat" color="danger">
                        Cerrar Todas las Sesiones
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Tab>
            <Tab key="notifications" title="Notificaciones">
              <div className="pt-4 space-y-6">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Preferencias de Notificaciones</h3>
                  </CardHeader>
                  <CardBody>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Notificaciones por Correo</p>
                          <p className="text-default-500 text-sm">Recibe actualizaciones por correo electrónico</p>
                        </div>
                        <Switch defaultSelected color="primary" />
                      </div>
                      <Divider />
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Notificaciones Push</p>
                          <p className="text-default-500 text-sm">Recibe notificaciones en tiempo real</p>
                        </div>
                        <Switch defaultSelected color="primary" />
                      </div>
                      <Divider />
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Notificaciones de Proyectos</p>
                          <p className="text-default-500 text-sm">Actualizaciones sobre proyectos y tareas</p>
                        </div>
                        <Switch defaultSelected color="primary" />
                      </div>
                      <Divider />
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Notificaciones de Marketing</p>
                          <p className="text-default-500 text-sm">Recibe ofertas y novedades</p>
                        </div>
                        <Switch color="primary" />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Tab>
            <Tab key="appearance" title="Apariencia">
              <div className="pt-4 space-y-6">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Tema</h3>
                  </CardHeader>
                  <CardBody>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Modo Oscuro</p>
                          <p className="text-default-500 text-sm">Cambia entre tema claro y oscuro</p>
                        </div>
                        <Switch color="primary" />
                      </div>
                      <Divider />
                      <div>
                        <p className="font-medium mb-2">Densidad de Contenido</p>
                        <div className="flex gap-3">
                          <Button variant="flat" color="primary">Compacto</Button>
                          <Button variant="solid" color="primary">Normal</Button>
                          <Button variant="flat" color="primary">Espaciado</Button>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};