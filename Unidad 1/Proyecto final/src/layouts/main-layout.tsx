import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Badge } from "@heroui/react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Sidebar } from "../components/sidebar";
import { ThemeSwitcher } from "../components/theme-switcher";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar maxWidth="full" className="border-b border-divider">
          <NavbarContent className="sm:flex gap-4">
            <Button 
              isIconOnly 
              variant="light" 
              onPress={toggleSidebar}
              className="sm:hidden"
            >
              <Icon icon="lucide:menu" width={20} />
            </Button>
            <NavbarBrand>
              <div className="flex items-center gap-2">
                <div className="bg-primary-500 text-white p-1 rounded-md">
                  <Icon icon="lucide:briefcase" width={24} />
                </div>
                <p className="font-semibold text-inherit hidden sm:block">Business Suite</p>
              </div>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem>
              <ThemeSwitcher />
            </NavbarItem>
            <NavbarItem>
              <Button 
                isIconOnly 
                variant="light" 
                aria-label="Search"
              >
                <Icon icon="lucide:search" width={20} />
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Badge content="5" color="danger">
                <Button 
                  isIconOnly 
                  variant="light" 
                  aria-label="Notifications"
                >
                  <Icon icon="lucide:bell" width={20} />
                </Button>
              </Badge>
            </NavbarItem>
            <NavbarItem>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="primary"
                    name="John Doe"
                    size="sm"
                    src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Conectado como</p>
                    <p className="font-semibold">john.doe@empresa.com</p>
                  </DropdownItem>
                  <DropdownItem key="settings">Mi Perfil</DropdownItem>
                  <DropdownItem key="team_settings">Configuración de Equipo</DropdownItem>
                  <DropdownItem key="analytics">Analíticas</DropdownItem>
                  <DropdownItem key="help_and_feedback">Ayuda & Feedback</DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Cerrar Sesión
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};
