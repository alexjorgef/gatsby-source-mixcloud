import type { GatsbyNode } from "gatsby"
import type { ObjectSchema } from "gatsby-plugin-utils"

const wrapOptions = (innerOptions) => `{
  resolve: \`@alexjorgef/gatsby-source-mixcloud\`,
  options: {
    ${innerOptions.trim()}
  },
}
`

export const pluginOptionsSchema: GatsbyNode["pluginOptionsSchema"] = ({ Joi }): ObjectSchema =>
  Joi.object({
    username: Joi.string()
      .required()
      .description(`The Mixcloud username to fetch.`)
      .meta({ example: wrapOptions(`username: \`dzzzz\`,`) }),
  })
