import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { FlexColumn, FlexMiddle } from '~/shared/flexes';
import { useStoryblok } from '@storyblok/react';
import { render } from 'storyblok-rich-text-react-renderer';
import Header from '~/components/Header';
import { pageLayout } from '~/shared/LayoutStyle';
import { SectionTitle } from '~/shared/Texts';
import { SectionContainer } from '~/shared/SectionContainer';
import { Circle } from '~/components/Visuals';
import { IconChevronLeft } from '@tabler/icons-react';
import CTASection from '~/components/CTASection';
import useTimeToTextFormat from '~/components/utils/useTimeToTextFormat';
import circleSeperator from '~/assets/icons/circle-seperator.svg';
import Author from '~/components/Blog/Author';
const ArticleWrapper = styled(FlexColumn)`
  gap: 68px;
  background: white;
  color: black;
  margin: auto;
  max-width: 1000px;
  p {
    color: #52537a;
    line-height: 175%;
    font-size: 18px;
  }
  h2 {
    color: #292a3d; // secondary 11
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }
  h3 {
    color: #3d3e5c;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 0.5rem;
    margin-top: 2rem;
  }
  h4 {
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    font-size: 32px;
  }
`;

const Container = styled(FlexColumn)`
  padding: 0 0 48px 0;
  margin: 28px;
  border-radius: 24px;
  background-color: #f9f9fb;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 768px) {
    margin: 16px;
    border-radius: 16px;
  }
`;

const HeroWrapper = styled(FlexColumn)`
  ${pageLayout}
  max-width:1200px;
  padding-top: 200px;

  @media (max-width: 768px) {
    gap: 48px;
    padding: 0 20px;
  }
`;

const BlogPostImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 24px;
  object-fit: cover;
`;

const CustomCircle = styled(Circle)`
  z-index: 1;
`;

const ArticleBody = styled.div``;

const BlogLink = styled(Link)`
  display: flex;
  text-decoration: underline;
  color: #292a3d;
  width: fit-content;
  &:hover {
    color: #181eb4;
  }
`;

const StyledTag = styled.div`
  display: inline-block;
  padding: 4px 8px;
  background: #e8e8e8;
  border-radius: 4px;
  color: black;
  font-size: 12px;
  transition: 0.2s all;
  /* uncomment when category page is ready */
  /* &:hover {
    background: #181eb4;
    color: white;
    transition: 0.2s all;
  } */
`;

const Article = () => {
  const { slug } = useParams();
  const story = useStoryblok(`/${slug}`, { version: 'published' });
  const { title, authorImage, author, thumbnail, body } = story.content;
  return (
    <>
      <Container>
        <CustomCircle />
        <Header dark />
        <HeroWrapper>
          <FlexColumn gap="16">
            <BlogLink to="/blog">
              <IconChevronLeft /> Blog
            </BlogLink>
            <SectionTitle>{title}</SectionTitle>

            <FlexMiddle gap="12">
              <Author name={authorImage} image={author} />
              <img src={circleSeperator} width="20px" />
              {useTimeToTextFormat({ date: story.first_published_at })}
              <img src={circleSeperator} width="20px" />
              {story.tag_list?.map(tag => (
                <StyledTag>
                  {/* <a href={`${tag}`}> {tag} </a> TODO:Create a page for category */}
                  {tag}
                </StyledTag>
              ))}
            </FlexMiddle>
          </FlexColumn>
        </HeroWrapper>
      </Container>
      <SectionContainer $padding="50px 0">
        <ArticleWrapper>
          <BlogPostImage src={thumbnail?.filename} />
          <ArticleBody>{render(body)}</ArticleBody>
        </ArticleWrapper>
      </SectionContainer>
      <CTASection />
    </>
  );
};

export default Article;
