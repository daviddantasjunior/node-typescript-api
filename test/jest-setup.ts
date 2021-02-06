import { SetupServe } from "@src/serve"
import supertest from "supertest";

beforeAll(() => {
  const server = new SetupServe();
  server.init();
  global.testRequest = supertest(server.getApp());

})