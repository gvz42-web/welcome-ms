import {StepScene} from "@vk-io/scenes";
import registration from "./registration";
import mainMenu from "./mainMenu";
import profile from "./profile";
import apply from "./apply";

export const scenes = [
  new StepScene('registration', registration),
    new StepScene('mainMenu', mainMenu),
    new StepScene('profile', profile),
    new StepScene('apply', apply)

]