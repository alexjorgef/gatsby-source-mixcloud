import type { IPluginRefOptions, PluginOptions as GatsbyPluginOptions } from "gatsby"

export interface MixcloudPluginOptions extends IPluginRefOptions {
  username: string
}

export interface MixcloudNodePluginOptions extends GatsbyPluginOptions {
  username: string
}
