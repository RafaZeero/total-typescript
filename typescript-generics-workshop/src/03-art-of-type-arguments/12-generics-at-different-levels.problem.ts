import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

const appConfig = {
  apiEndpoint: "https://api.example.com",
  apiVersion: "v1",
  apiKey: "1234567890",
  rawConfig: {
    featureFlags: {
      homePage: {
        showBanner: true,
        showLogOut: false,
      },
      loginPage: {
        showCaptcha: true,
        showConfirmPassword: false,
      },
    },
  },
};

type Config = typeof appConfig
type Flags = typeof appConfig.rawConfig.featureFlags.homePage

export const getFeatureFlags = (
  config: Config,
  override: (flags: Flags) => Flags,
) => {
  return override(config.rawConfig.featureFlags.homePage);
};

it("Should return the homePage flag object", () => {
  const flags = getFeatureFlags(appConfig, (flags) => flags);

  expect(flags).toEqual({
    showBanner: true,
    showLogOut: false,
  });

  type tests = [
    Expect<Equal<typeof flags, { showBanner: boolean; showLogOut: boolean }>>,
  ];
});

it("Should allow you to modify the result", () => {
  const flags = getFeatureFlags(appConfig, (flags) => ({
    ...flags,
    showBanner: false,
  }));

  expect(flags).toEqual({
    showBanner: false,
    showLogOut: false,
  });

  type tests = [
    Expect<Equal<typeof flags, { showBanner: boolean; showLogOut: boolean }>>,
  ];
});
