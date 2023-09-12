import { IpFilter } from "express-ipfilter";
import { env } from "../environment";

export const isIpAllowed = IpFilter(env.api.ip_whitelist, { mode: "allow" });
