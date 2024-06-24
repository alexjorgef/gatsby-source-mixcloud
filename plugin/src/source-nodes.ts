import type { GatsbyNode } from "gatsby"
import Mixjar from "mixjar"
// import { promisify } from "util"
import { ERROR_CODES, NODE_TYPE_BASE, NODE_SUBTYPE_USER } from "./constants"
import type { MixcloudNodePluginOptions } from "./types/plugin-options"

export const sourceNodes: GatsbyNode["sourceNodes"] = async (gatsbyApi, pluginOptions: MixcloudNodePluginOptions) => {
  const { username } = pluginOptions

  const mixcloud = new Mixjar.Mixcloud()

  let cloudcasts
  try {
    cloudcasts = await mixcloud.user_cloudcasts(username).asPromise()
  } catch (error) {
    gatsbyApi.reporter.panicOnBuild({
      id: ERROR_CODES.createMixcloudUser,
      context: {
        sourceMessage: error.message,
        username,
      },
    })
  }

  cloudcasts.data.forEach(async (cloudcast) => {
    await gatsbyApi.actions.createNode({
      ...cloudcast,
      id: gatsbyApi.createNodeId(`${NODE_TYPE_BASE}${NODE_SUBTYPE_USER}-${cloudcast.slug}`),
      parent: null,
      children: [],
      internal: {
        type: `${NODE_TYPE_BASE}${NODE_SUBTYPE_USER}`,
        content: JSON.stringify(cloudcast),
        contentDigest: gatsbyApi.createContentDigest(cloudcast),
      },
    })
  })
}
