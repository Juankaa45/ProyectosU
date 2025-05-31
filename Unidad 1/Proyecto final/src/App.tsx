import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { MainLayout } from "./layouts/main-layout";
import { Dashboard } from "./pages/dashboard";
import { Projects } from "./pages/projects";
import { Calendar } from "./pages/calendar";
import { Analytics } from "./pages/analytics";
import { Documents } from "./pages/documents";
import { Settings } from "./pages/settings";
import { ToastProvider } from "@heroui/react";

export default function App() {
  return (
    <Router>
      <ToastProvider />
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/projects" component={Projects} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/documents" component={Documents} />
          <Route path="/settings" component={Settings} />
          <Redirect to="/" />
        </Switch>
      </MainLayout>
    </Router>
  );
}