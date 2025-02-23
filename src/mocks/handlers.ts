import { userHandler } from "./userHandler";
import { checkoutHandler } from "./checkoutHandler";

export const handlers = [...userHandler, ...checkoutHandler];
