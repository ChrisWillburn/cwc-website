import React from 'react';
import { graphql } from 'gatsby';

export default function PodcastPage({ data }) {
  const podcast = data.allFeedAnchorPodcastFeed.edges[0].node;

  return (
    <div>
      <h1>{podcast.title}</h1>
      <img src={podcast.image} alt={podcast.title} />
      <div dangerouslySetInnerHTML={{ __html: podcast.description }} />
    </div>
  );
}

export const query = graphql`
  query {
    allFeedAnchorPodcastFeed {
      edges {
        node {
          title
          image
          description
        }
      }
    }
  }
`;
