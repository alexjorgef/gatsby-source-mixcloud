/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import { graphql } from "gatsby"
import * as React from "react"

const MixcloudUserLists = ({ userPlaylists }) => (
  <React.Fragment>
    {userPlaylists.map((p) => {
      if (!p.name) return null

      return (
        <React.Fragment key={p.name}>
          <h2>{p.name}</h2>
          <div className="img-grid">
            <figure key={p.name}>
              <img loading="lazy" alt={p.name} src={p.pictures.medium} />
            </figure>
          </div>
          <p>Name: {p.name}</p>
          <p>ID: {p.id}</p>
          <p>Key: {p.key}</p>
          <p>URL: {p.url}</p>
          <p>Created Time: {p.created_time}</p>
          <p>Updated Time: {p.updated_time}</p>
          <p>Play count: {p.play_count}</p>
          <p>Favorite count: {p.favorite_count}</p>
          <p>Comment count: {p.comment_count}</p>
          <p>Listener count: {p.listener_count}</p>
          <p>Repost count: {p.repost_count}</p>
          <p>Slug: {p.slug}</p>
          <p>Audio Length: {p.audio_length}</p>
          <p>Type: {p.type}</p>
          <p>Tags: {JSON.stringify(p.tags)}</p>
          <p>Pictures: {JSON.stringify(p.pictures)}</p>
          <p>User: {JSON.stringify(p.user)}</p>
        </React.Fragment>
      )
    })}
  </React.Fragment>
)

const IndexPage = ({ data: { allMixcloudUser } }: { data: Queries.IndexPageQuery }) => (
  <div className="wrapper">
    <main>
      <h1>@alexjorgef/gatsby-source-mixcloud</h1>
      <p>
        The user has <b>{allMixcloudUser.totalCount}</b> shows on Mixcloud
      </p>
      {allMixcloudUser.nodes &&
        (allMixcloudUser.nodes.length > 0 ? (
          <MixcloudUserLists userPlaylists={allMixcloudUser.nodes} />
        ) : (
          <p>No playlists found</p>
        ))}
    </main>
    <footer>
      Demo of @alexjorgef/gatsby-source-mixcloud –{` `}
      <a href="https://www.github.com/alexjorgef/gatsby-source-mixcloud">GitHub</a>
      {` `}– <a href="https://www.alexjorgef.com">Website</a>
    </footer>
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexPage {
    allMixcloudUser {
      totalCount
      nodes {
        name
        id
        key
        url
        tags {
          key
          name
          url
          type
        }
        created_time
        updated_time
        play_count
        favorite_count
        comment_count
        listener_count
        repost_count
        pictures {
          thumbnail
          small
          medium
        }
        slug
        user {
          key
          name
          url
          username
          pictures {
            thumbnail
            small
            medium
          }
          type
        }
        audio_length
        type
      }
    }
  }
`

export const Head = () => (
  <>
    <title>@alexjorgef/gatsby-source-mixcloud</title>
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🎨</text></svg>"
    />
  </>
)
