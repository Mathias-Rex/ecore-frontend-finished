import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import { MainLayout } from './layouts/MainLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { Category } from './pages/Category';
import { SpacecraftDetail } from './pages/Spacecraft';
import { NotFound } from './pages/NotFound';
import { Admin } from './pages/Admin';
import { AdminAddSpacecraft } from './pages/AdminAddSpacecraft';
import { AdminSpacecrafts } from './pages/AdminSpacecrafts';
import { AdminEditSpacecraft } from './pages/AdminEditSpacecraft';
import { Login } from './pages/Login';

const rootRoute = createRootRoute({
  component: MainLayout,
  notFoundComponent: NotFound,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const aboutusRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/aboutus',
  component: About,
});

const careersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/careers',
  component: Careers,
});

const categoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/category/$category',
  component: Category,
});

const spacecraftRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/spacecraft/$id',
  component: SpacecraftDetail,
});

const adminLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminLayout,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});

const adminRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/',
  component: Admin,
});

const adminAddSpacecraftRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/add-spacecraft',
  component: AdminAddSpacecraft,
});

const adminSpacecraftsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/spacecrafts',
  component: AdminSpacecrafts,
});

const adminEditSpacecraftRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/edit-spacecraft/$id',
  component: AdminEditSpacecraft,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutusRoute,
  careersRoute,
  categoryRoute,
  spacecraftRoute,
  adminLayoutRoute,
  loginRoute,
]);

adminLayoutRoute.addChildren([adminRoute, adminAddSpacecraftRoute, adminSpacecraftsRoute, adminEditSpacecraftRoute]);

export const router = createRouter({ routeTree });
