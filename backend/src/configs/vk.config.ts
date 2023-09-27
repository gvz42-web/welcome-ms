import {VKOptions} from "vk-io/lib/types";

require('dotenv').config()

export const vkConfig = <VKOptions> {
  token : process.env.TOKEN
}