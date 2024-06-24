import "dotenv/config"
import type { GatsbyConfig, PluginRef } from "gatsby"
import type { MixcloudPluginOptions } from "@alexjorgef/gatsby-source-mixcloud"

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `@alexjorgef/gatsby-source-mixcloud`,
    siteUrl: `https://github.com/alexjorgef/gatsby-source-mixcloud/`,
  },
  jsxRuntime: `automatic`,
  graphqlTypegen: {
    generateOnBuild: true,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@alexjorgef/gatsby-source-mixcloud`,
      options: {
        username: process.env.username,
      } as MixcloudPluginOptions,
    },
  ] as PluginRef[],
}

export default config
