import React from "react";
import "@testing-library/jest-dom";
import { server } from "./__mocks__/server";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

beforeAll(() => {
  server.listen();
  jest.spyOn(React, "useEffect");
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
