import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface SidebarProps {
  isOpen: boolean;
}

interface SidebarItemProps {
  to: string;
  icon: string;
  label: string;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon, label, isActive }) => {
  return (
    <Link to={to} className={`sidebar-item ${isActive ? "active" : ""}`}>
      <Icon icon={icon} width={20} className={`sidebar-icon ${isActive ? "text-primary-500" : ""}`} />
      <span>{label}</span>
    </Link>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  
  const sidebarItems = [
    { to: "/", icon: "lucide:layout-dashboard", label: "Dashboard" },
    { to: "/projects", icon: "lucide:briefcase", label: "Proyectos" },
    { to: "/calendar", icon: "lucide:calendar", label: "Calendario" },
    { to: "/analytics", icon: "lucide:bar-chart-2", label: "Analíticas" },
    { to: "/documents", icon: "lucide:file-text", label: "Documentos" },
    { to: "/settings", icon: "lucide:settings", label: "Configuración" },
  ];

  return (
    <motion.div
      className={`bg-content1 border-r border-divider h-screen overflow-y-auto flex-shrink-0 transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-0 sm:w-16"
      }`}
      initial={false}
      animate={{ width: isOpen ? 256 : 64 }}
      transition={{ duration: 0.3 }}
    >
      <div className="py-6 flex flex-col h-full">
        <div className="flex-1 flex flex-col gap-1 px-2">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.to}
              