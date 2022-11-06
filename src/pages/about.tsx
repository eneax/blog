import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Bio from '@/components/bio';

// Types
interface AboutPageProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

// Query
export const aboutPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

// Components
export const Head = () => <Seo title="About" />;

const AboutPage = ({ data, location }: PageProps<AboutPageProps>) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <section>
        <h1>About</h1>

        <Bio />

        <p>
          Most of my open source projects focus on helping people learn more
          about programming, enabling them to start their own personal projects,
          and hopefully also inspire someone to do the same and contribute to
          open source communities. Check out my{' '}
          <a href="https://github.com/eneax">GitHub profile</a> to see
          everything I have build.
        </p>
      </section>
    </Layout>
  );
};

export default AboutPage;
