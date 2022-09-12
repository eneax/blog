import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import styled from 'styled-components';

import Layout from '@/components/layout';
import Seo from '@/components/seo';
import CustomLink from '@/components/customLink';

// Styles
const LinkWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
`;

// Types
interface Group {
  fieldValue: string;
  totalCount: number;
}

interface TagsPageProps {
  allMarkdownRemark: {
    group: Group[];
  };
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

// Query
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

// Components
export const Head = () => <Seo title="All Tags" />;

const TagsPage = ({
  location,
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}: PageProps<TagsPageProps>) => (
  <Layout location={location} title={title}>
    <section>
      <h1>All Tags</h1>

      {group.map((tag) => (
        <LinkWrapper>
          <CustomLink
            key={tag.fieldValue}
            path={`/tags/${kebabCase(tag.fieldValue)}/`}
          >
            {tag.fieldValue} ({tag.totalCount})
          </CustomLink>
        </LinkWrapper>
      ))}
    </section>
  </Layout>
);

export default TagsPage;
