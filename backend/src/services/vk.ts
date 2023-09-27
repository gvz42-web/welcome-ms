import {VK} from "vk-io";
import {vkConfig} from "../configs/vk.config";

import {SceneManager} from "@vk-io/scenes";
import {SessionManager} from "@vk-io/session";
import {scenes} from "./vk/scenes";


const vk: VK = new VK(vkConfig);

const sessionManager = new SessionManager();
const sceneManager = new SceneManager();

vk.updates.on('message_new', sessionManager.middleware);
vk.updates.on('message_new', sceneManager.middleware);
vk.updates.on('message_new', sceneManager.middlewareIntercept);

sceneManager.addScenes(scenes)
vk.updates.on('message_new', (context, next) => {
    if (context.text === '/signup') {
        return context.scene.enter('registration');
    }

    return next();
});

export = vk