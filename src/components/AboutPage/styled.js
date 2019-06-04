import styled from 'styled-components';

import Text from '../Text';
import Link from '../Link';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => `${theme?.spacing?.m}`};
`;

export const BreadText = styled(Text).attrs({
  tag: 'p',
})`
  width: 100%;
  line-height: 1.6;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 50%;
  max-width: 200px;
  margin-bottom: ${({ theme }) => theme?.spacing?.m};
`;

export const List = styled.ul`
  width: 100%;
  padding-left: ${({ theme }) => theme?.spacing?.xl};
`;

export const ListItem = styled(Text).attrs({
  size: 'default',
  tag: 'li',
})`
  margin-bottom: ${({ theme }) => theme?.spacing?.sm};
`;

export const EmailLink = styled(Link).attrs({
  href: ({ mailTo }) => `mailto:${mailTo}`,
})``;
