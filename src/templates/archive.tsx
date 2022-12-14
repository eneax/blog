import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Posts, { PostType } from '@/components/posts';
import Pagination from '@/components/pagination';

// Types
interface ArchiveProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    nodes: PostType[];
    totalCount: number;
  };
}

// Query
export const query = graphql`
  query Archive($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          description
        }
        excerpt
      }
    }
  }
`;

// Components
export const Head = ({ pageContext: { humanPageNumber, numberOfPages } }) => (
  <Seo title={`Archive - Page ${humanPageNumber} of ${numberOfPages}`} />
);

const Archive = ({ data, pageContext, location }: PageProps<ArchiveProps>) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.nodes;
  const totalPosts = data.allMarkdownRemark.totalCount;

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Archive: {totalPosts} posts</h1>
      <Posts posts={posts} />
      <Pagination pageContext={pageContext} />
    </Layout>
  );
};

export default Archive;
