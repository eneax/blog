import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '@/components/layout';
import Seo from '@/components/seo';

// Types
interface NotFoundPageProps {
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
  }
`;

// Components
export const Head = () => <Seo title="404: Not Found" />;

const NotFoundPage = ({ data, location }: PageProps<NotFoundPageProps>) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
