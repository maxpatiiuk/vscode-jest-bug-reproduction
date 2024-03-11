import type { Config } from "@stencil/core";

// A tiny Stencil config for creating mock components in controllers tests
export const config: Config = {
  namespace: "test-components",
  sourceMap: true
};
