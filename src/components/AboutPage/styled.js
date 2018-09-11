import styled from 'styled-components';

import Text from '../Text';

export const Wrapper = styled.div`
  position: relative;
  height: ${({ theme }) => `calc(100vh - ${theme?.header?.height})`};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => `${theme?.spacing?.medium}`};

  & > span {
    font-size: ${({ theme }) => `${theme?.fontSize['large']}`};
  }
`;

export const BreadText = styled(Text).attrs({
  size: 'medium',
  tag: 'p',
})``;

export const Image = styled.img`
  border-radius: 50%;
  width: 50%;
  max-width: 200px;
  margin-bottom: ${({ theme }) => theme?.spacing?.medium};
`;
