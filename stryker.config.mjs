// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "Configuração do StrykerJS para o projeto operacoes-mutante.",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress", "json"],
  testRunner: "jest",
  jest: {
    projectType: "custom",
    configFile: "package.json",
    enableFindRelatedTests: true
  },
  coverageAnalysis: "perTest",
  mutate: ["src/**/*.js"],
  concurrency: 2,
  timeoutMS: 60000,
};
export default config;
