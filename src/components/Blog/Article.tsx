import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FlexColumn, FlexRow } from '~/shared/flexes';

const ArticlebodyWrapper = styled(FlexColumn)<{ $featured: boolean }>`
  ${({ $featured }) =>
    $featured &&
    css`
      justify-content: center;
    `}
`;

const ArticleTitle = styled.h2<{ $featured?: boolean }>`
  font-size: 18px;
  font-weight: 700;
  ${({ $featured }) =>
    $featured &&
    css`
      font-size: 32px;
    `}
`;
const ArticleWrapper = styled(FlexRow)<{
  $vertical?: boolean;
  $imageSize?: [string, string];
  $featured?: boolean;
}>`
  gap: 12px;
  color: black;
  border-radius: 8px;
  overflow: hidden;
  flex-direction: ${({ $vertical }) => $vertical && 'column'};
  flex: 2;
  transition: all 0.3s ease-in-out;
  &:hover {
    ${ArticleTitle} {
      text-decoration: underline;
      transition: all 0.1s ease-in-out;
    }
  }
  img {
    width: ${({ $imageSize }) => $imageSize && `${$imageSize[0]}`};
    height: ${({ $imageSize }) => $imageSize && `${$imageSize[1]}`};
    margin-right: 16px;
    object-fit: cover;
    border-radius: 8px;
  }
  ${({ $featured }) =>
    $featured &&
    css`
      background: white;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
      padding: 24px;
      flex: 1;
      &:hover {
        outline: 1px solid #181eb4;
      }
    `}
`;

const MetaData = styled.div`
  color: #181eb4;
  font-size: 12px;
  font-weight: 600;
`;

const ArticleTeaserBodyText = styled.div`
  font-size: 18px;
  color: #667085;
`;

const Image = styled.img``;

const Article = ({
  title,
  slug,
  featured = false,
  imageSize = ['250px', '200px'],
  vertical = false,
  image = 'https://picsum.photos/200' // placeholder
}: {
  title: string;
  slug: string;
  featured?: boolean;
  vertical?: boolean;
  imageSize?: [string, string];
  image?: string;
}) => {
  return (
    // <Link to={`/blog/${slug}`}>
    <ArticleWrapper
      $vertical={vertical}
      $featured={featured}
      $imageSize={imageSize}
      as={Link}
      to={`/blog/${slug}`}
    >
      <Image src={image} />
      {/* <img src="https://picsum.photos/200" /> */}
      <ArticlebodyWrapper $featured={featured}>
        <MetaData>Olivia Rhye • 20 Jan 2022</MetaData>
        <ArticleTitle $featured={featured}>{title}</ArticleTitle>
        <ArticleTeaserBodyText>
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </ArticleTeaserBodyText>
      </ArticlebodyWrapper>
    </ArticleWrapper>
  );
};
export default Article;
