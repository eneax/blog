import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

// Styles
const BioWrapper = styled.section`
  display: block;

  .bio-avatar,
  .gatsby-image-wrapper img {
    min-width: 50px;
    border-radius: 50%;
    margin-right: var(--spacing-8);
    margin-bottom: var(--spacing-0);
    float: left;
    clip-path: circle();
    shape-outside: circle();
  }

  .bio-avatar {
    border: 1px dashed var(--color-primary);
    transition: all 0.25s ease;
    &:hover {
      border: 1px solid;
      transform: scale(1.05);
    }
  }
`;

// Components
const Bio = ({ showAvatar }: { showAvatar?: boolean }) => (
  <BioWrapper>
    <Link to="/about">
      {showAvatar && (
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={['auto', 'webp', 'avif']}
          src="../images/profile-pic.png"
          width={100}
          height={100}
          quality={95}
          placeholder="blurred"
          alt="Profile picture"
        />
      )}
    </Link>
    <p>
      Hey, I'm Enea, the creator of this starter blog. This project is built
      with <a href="https://www.gatsbyjs.com">Gatsby</a>,{' '}
      <a href="https://www.typescriptlang.org">TypeScript</a> and{' '}
      <a href="https://styled-components.com">styled-components</a>. You can
      find the open source code on{' '}
      <a href="https://github.com/eneax/blog">GitHub</a>.
    </p>
  </BioWrapper>
);

export default Bio;
