import { describe, expect, it } from "vitest";
import type { Model } from "./model.js";
import { ModelZoo } from "./model-zoo.js";

const mistral: Model = {
  id: "mistral-7b-instruct-v0-3",
  name: "Mistral-7B-Instruct-v0.3",
  org: "mistralai",
  task: "text-generation",
  parameters: 7.2,
  downloads: 1_420_000,
  license: "apache-2.0",
};

const devstral: Model = {
  id: "devstral-small",
  name: "Devstral-Small",
  org: "mistralai",
  task: "text-generation",
  parameters: 24,
  downloads: 310_000,
};

const whisper: Model = {
  id: "whisper-large-v3",
  name: "whisper-large-v3",
  org: "openai",
  task: "speech-to-text",
  parameters: 1.55,
  downloads: 4_100_000,
  license: "apache-2.0",
};

describe("ModelZoo extras", () => {
  it("computes total downloads", () => {
    const zoo = new ModelZoo();

    zoo.addModel(mistral);
    zoo.addModel(devstral);
    zoo.addModel(whisper);

    expect(zoo.getTotalDownloads()).toBe(5_830_000);
  });

  it("returns model names for a task", () => {
    const zoo = new ModelZoo();

    zoo.addModel(mistral);
    zoo.addModel(devstral);
    zoo.addModel(whisper);

    expect(zoo.getModelNamesByTask("text-generation")).toEqual([
      "Mistral-7B-Instruct-v0.3",
      "Devstral-Small",
    ]);
  });

  it("returns each organisation once", () => {
    const zoo = new ModelZoo();

    zoo.addModel(mistral);
    zoo.addModel(devstral);
    zoo.addModel(whisper);

    expect(zoo.getOrganisations()).toEqual(["mistralai", "openai"]);
  });
});
