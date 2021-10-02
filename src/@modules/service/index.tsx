import { Navigate, PartialRouteObject } from "react-router-dom";

import ServiceCategoryCreatePage from "./service-category/routes/ServiceCategoryCreatePage";
import ServiceCategoryListPage from "./service-category/routes/ServiceCategoryListPage";
import ServiceCategoryUpdatePage from "./service-category/routes/ServiceCategoryUpdatePage";
import ServiceDetailPage from "./services/routes/ServiceDetailPage";
import ServicePackageCreatePage from "./service-package/routes/ServicePackageCreatePage";
import ServicePackageListPage from "./service-package/routes/ServicePackageListPage";
import ServicePackageUpdatePage from "./service-package/routes/ServicePackageUpdatePage";
import { ServiceUpdatePage } from "./services/routes/ServiceUpdatePage";
import { ServicesCreatePage } from "./services/routes/ServicesCreatePage";
import { ServicesListPage } from "./services/routes/ServicesListPage";

export const ServiceRoutes: PartialRouteObject[] = [
  { path: "", element: <Navigate to="/services/list" /> },
  { path: "detail/:id", element: <ServiceDetailPage /> },
  { path: "list", element: <ServicesListPage /> },
  { path: "create", element: <ServicesCreatePage /> },
  { path: "update/:id", element: <ServiceUpdatePage /> },
  {
    path: "serviceCategory",
    children: [
      { path: "", element: <Navigate to="/services/serviceCategory/list" /> },
      { path: "list", element: <ServiceCategoryListPage /> },
      { path: "create", element: <ServiceCategoryCreatePage /> },
      { path: "update/:id", element: <ServiceCategoryUpdatePage /> },
    ],
  },
  {
    path: "servicePackage",
    children: [
      { path: "", element: <Navigate to="/services/servicePackage/list" /> },
      { path: "list", element: <ServicePackageListPage /> },
      { path: "create", element: <ServicePackageCreatePage /> },
      { path: "update/:id", element: <ServicePackageUpdatePage /> },
    ],
  },

];

