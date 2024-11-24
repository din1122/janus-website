import { getStoryblokApi } from '@storyblok/react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Article from '~/components/Article';
import CTASection from '~/components/CTASection';
import Header from '~/components/Header';
import { Circle } from '~/components/Visuals';
import { FlexColumn, FlexColumnCenter, FlexRow } from '~/shared/flexes';
import { pageLayout } from '~/shared/LayoutStyle';

import {
  DescriptionText,
  HeaderTitle,
  SectionTitle,
  Subtitle
} from '~/shared/Texts';

interface ArticleProps {
  slug: string;
  content: {
    title: string;
    slug: string;
    thumbnail: {
      filename: string;
      alt: string;
    };
  };
  uid: string;
}

const GRID_PADDING = '48';

const HeroWrapper = styled(FlexColumn)`
  ${pageLayout}
  padding-top:120px;

  @media (max-width: 768px) {
    gap: 48px;
    padding: 0 20px;
  }
`;

const Container = styled(FlexColumn)`
  padding: 0 0 100px 0;
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

const GridContainer = styled.div`
  display: grid;
  grid-auto-rows: minmax(0, 1fr);
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 30px;
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  margin: 0 auto auto auto;
  box-sizing: border-box;
  padding: 120px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 200px 12px 0 12px;
  }
`;

function BlogPage() {
  const [articles, setArticles] = useState<ArticleProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: 'published'
        // starts_with: '/'
        // is_startpage: false
      });
      setArticles(() =>
        data.stories.map((article: ArticleProps) => {
          article.content.slug = article.slug;
          return article;
        })
      );
    };
    fetchData();
  }, []);

  const nonFeaturedArticles = articles.slice(1);

  console.log(articles);

  return (
    <>
      <Container>
        <Header dark />
        <HeroWrapper>
          <HeroContainer>
            <FlexColumnCenter style={{ flex: 1 }} gap="80">
              <FlexColumnCenter gap="8">
                <Subtitle>Janus Blog</Subtitle>
                <HeaderTitle>Stories & Ideas</HeaderTitle>
                <DescriptionText>
                  Articles and ideas on Healthcare System, Health AI,
                  Interoperability, Health Innovation, and more..
                </DescriptionText>
              </FlexColumnCenter>

              <FlexRow gap={GRID_PADDING}>
                <Article
                  featured
                  // vertical
                  imageSize={['800px', '460px']}
                  title={articles[0]?.content?.title}
                  slug={articles[0]?.slug}
                  image={articles[0]?.content?.thumbnail?.filename}
                />
              </FlexRow>
            </FlexColumnCenter>
            <Circle />
          </HeroContainer>
          <FlexColumn gap="24">
            <SectionTitle $size="S">Most Popular Articles</SectionTitle>
            <GridContainer>
              {nonFeaturedArticles.map(
                ({ content, uid, slug }: ArticleProps) => {
                  return (
                    <Article
                      imageSize={['100%', '250px']}
                      vertical
                      title={content?.title}
                      key={uid}
                      slug={slug}
                      image={content?.thumbnail?.filename}
                    />
                  );
                }
              )}
            </GridContainer>
          </FlexColumn>
        </HeroWrapper>
      </Container>
      <CTASection />
    </>
  );
}
export default BlogPage;
