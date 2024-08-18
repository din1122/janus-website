import styled, { css } from 'styled-components';
import { FlexColumn } from '~/shared/flexes';
import Button from '../shared/Button';
import SectionTitle from '~/shared/Texts/SectionTitle';

const FormWrapper = styled(FlexColumn)`
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  flex: 1;
  z-index: 1;
`;

const commonInputStyles = css`
  padding: 12px;
  border: 1px solid #8586ad;
  border-radius: 8px;
  background: transparent;
  color: #292a3d;
  font-family: 'Greycliff CF';
  &:focus-visible {
    outline: 1px solid #8586ad;
  }
  &:hover {
    outline: 1px solid #e0e1eb;
    background-color: #f9f9fb;
  }
`;

const StyledInput = styled.input`
  ${commonInputStyles}
`;

const StyledTextArea = styled.textarea`
  ${commonInputStyles}
`;

const StyledLabel = styled.label`
  font-size: 14px;
  color: #292a3d;
`;

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      style={{
        display: 'flex',
        flex: 1,
        width: '100%'
      }}
    >
      <FormWrapper gap="24">
        <SectionTitle style={{ fontSize: '26px' }}>Contact Us</SectionTitle>
        <FlexColumn gap="24" style={{ flex: 1 }}>
          <input type="hidden" name="form-name" value="contact" />
          <FlexColumn gap="12">
            <StyledLabel>Full name:</StyledLabel>
            <StyledInput
              placeholder="John Doe"
              type="text"
              name="name"
              className="test"
            />
          </FlexColumn>
          <FlexColumn gap="12">
            <StyledLabel htmlFor="email">Email Address:</StyledLabel>
            <StyledInput
              placeholder="John.doe@example.com"
              type="email"
              name="email"
            />
          </FlexColumn>
          <FlexColumn gap="12">
            <StyledLabel htmlFor="email">Message:</StyledLabel>
            <StyledTextArea name="email" rows={6} />
          </FlexColumn>

          <Button black fullwidth type="submit">
            Send
          </Button>
        </FlexColumn>
      </FormWrapper>
    </form>
  );
};
export default ContactForm;
