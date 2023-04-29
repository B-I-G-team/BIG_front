import { Modal } from 'antd';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
`;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
  }
`;

export const Title = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  padding: 16px 20px;
`;
export const Content = styled.div`
  padding: 16px 24px;
`;
