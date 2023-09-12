import { Router } from "express";

import addressRoute from "./address.route";
import authRoutes from "./auth.route";
import appRoutes from "./app.route";
import countryRoutes from "./country.route";
import deliveryRoutes from "./delivery.route";
import departmentRoutes from "./department.route";
import deviceRoutes from "./device.route";
import employeeRoutes from "./employee.route";
import jobRoutes from "./job.route";
import licenseRoutes from "./license.route";
import orderRoutes from "./order.route";
import permissionRoutes from "./permission.route";
import productRoutes from "./product.route";
import projectRoutes from "./project.route";
import roleRoutes from "./role.route";
import softwareRoutes from "./software.route";
import supplierRoutes from "./supplier.route";
import todoRoutes from "./todo.route";
import salaryRoutes from "./salary.route";
import warehouseRoutes from "./warehouse.route";
import ticketRoutes from "./ticket.route";
import ticketCommentRoutes from "./ticketComment.route";
import ticketCategoryRoutes from "./ticketCategory.route";
import { isAuthenticated } from "../middleware/authentication.middleware";
import { isIpAllowed } from "../middleware/ipWhitelist.middleware";

export default class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.router
      .use("/auth", isIpAllowed, authRoutes)
      .use("/address", isAuthenticated, isIpAllowed, addressRoute)
      .use("/app", isAuthenticated, isIpAllowed, appRoutes)
      .use("/country", isAuthenticated, isIpAllowed, countryRoutes)
      .use("/delivery", isAuthenticated, isIpAllowed, deliveryRoutes)
      .use("/department", isAuthenticated, isIpAllowed, departmentRoutes)
      .use("/device", isAuthenticated, isIpAllowed, deviceRoutes)
      .use("/employee", isAuthenticated, isIpAllowed, employeeRoutes)
      .use("/salary", isAuthenticated, isIpAllowed, salaryRoutes)
      .use("/job", isAuthenticated, isIpAllowed, jobRoutes)
      .use("/license", isAuthenticated, isIpAllowed, licenseRoutes)
      .use("/order", isAuthenticated, isIpAllowed, orderRoutes)
      .use("/permission", isAuthenticated, isIpAllowed, permissionRoutes)
      .use("/product", isAuthenticated, isIpAllowed, productRoutes)
      .use("/project", isAuthenticated, isIpAllowed, projectRoutes)
      .use("/role", isAuthenticated, isIpAllowed, roleRoutes)
      .use("/software", isAuthenticated, isIpAllowed, softwareRoutes)
      .use("/supplier", isAuthenticated, isIpAllowed, supplierRoutes)
      .use("/todo", isAuthenticated, isIpAllowed, todoRoutes)
      .use("/warehouse", isAuthenticated, isIpAllowed, warehouseRoutes)
      .use("/ticket", isAuthenticated, isIpAllowed, ticketRoutes)
      .use("/ticketComment", isAuthenticated, isIpAllowed, ticketCommentRoutes)
      .use(
        "/ticketCategory",
        isAuthenticated,
        isIpAllowed,
        ticketCategoryRoutes
      );
  }
}
