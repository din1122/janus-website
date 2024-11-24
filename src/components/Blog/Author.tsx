import styled from 'styled-components';
import { FlexMiddle } from '~/shared/flexes';

const AuthorImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
`;

const AuthorName = styled.span`
  font-weight: 700;
`;

const Author = ({ name, image }: { name: string; image: string }) => {
  return (
    <FlexMiddle gap="4">
      <AuthorImage src={name} />
      <AuthorName>{image}</AuthorName>
    </FlexMiddle>
  );
};
export default Author;
