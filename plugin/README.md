# @alexjorgef/gatsby-source-mixcloud

Source playlists from [Mixcloud](https://www.mixcloud.com/) into [Gatsby](https://www.gatsbyjs.com/).

## Install

```shell
npm install @alexjorgef/gatsby-source-mixcloud
```

## How to use

Add the plugin to your `gatsby-config` file:

```js:title=gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@alexjorgef/gatsby-source-mixcloud`,
      options: {}
    }
  ]
}
```

## Plugin Options

- [@alexjorgef/gatsby-source-mixcloud](#alexjorgefgatsby-source-mixcloud)
  - [Install](#install)
  - [How to use](#how-to-use)
  - [Plugin Options](#plugin-options)
    - [username (**required**)](#username-required)

### username (**required**)

The Mixcloud username to fetch.

**Field type**: `String`

```js
{
  resolve: `@alexjorgef/gatsby-source-mixcloud`,
  options: {
    username: `dzzzz`,
  },
}
```
