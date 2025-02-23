import { setupWorker } from "msw/browser";
import { userHandler } from "../../src/mocks/userHandler"; // Ajuste o caminho conforme necessário

export const server = setupWorker(...userHandler);

before(() => server.start());
afterEach(() => server.resetHandlers());
after(() => server.stop());
