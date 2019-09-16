import styled from 'styled-components';

import Text from '../Text';
import { BRIGHTER_PURPLE } from '../../theme/colors';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: ${({ theme }) => `${theme?.spacing?.m}`};
`;

export const BreadText = styled(Text).attrs(() => ({
  tag: 'p',
}))`
  width: 100%;
  line-height: 1.6;
`;

export const H1 = styled.h1`
  font-size: ${({ theme }) => `${theme?.fontSize['xxl']};`};
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => `${theme?.fontSize['xl']};`};
`;

export const H3 = styled.h3`
  font-size: ${({ theme }) => `${theme?.fontSize['medium']};`};
  color: ${BRIGHTER_PURPLE};
`;

export const Details = styled.span`
  margin-bottom: 1rem;
`;

export const ListItem = styled.li`
  font-size: ${({ theme }) => `${theme?.fontSize['default']};`};
  margin-bottom: 0.5rem;
`;
