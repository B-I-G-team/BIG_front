import { Button, Input, message, Modal, Select, Upload } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from 'antd/es/upload';

const { TextArea } = Input;

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

interface Props {
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const TeamCreateModal = ({ open, setOpen }: Props) => {
  const [teamName, setTeamName] = useState('');
  const [teamLocal, setTeamLocal] = useState('부산');
  const [teamIntroduce, setTeamIntroduce] = useState('');
  const [logoLoading, setLogoloading] = useState(false);
  const [logoImg, setLogoImg] = useState('');

  const onClickCreate = () => {
    console.log(teamName, teamLocal, teamIntroduce);
  };

  const uploadButton = (
    <div>
      {logoLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>,
  ) => {
    if (info.file.status === 'uploading') {
      setLogoloading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLogoloading(false);
        setLogoImg(url);
      });
    }
  };

  return (
    <StyledModal
      open={open}
      title={<Title>팀생성</Title>}
      footer={
        <FooterContainer>
          <Button type="primary" onClick={onClickCreate}>
            생성하기
          </Button>
          <Button>취소</Button>
        </FooterContainer>
      }
    >
      <Content>
        <Name>
          <Text>팀 이름</Text>
          <StyledInput
            value={teamName}
            onChange={({ target: { value } }) => setTeamName(value)}
          />
        </Name>

        <Logo>
          <Text>팀 로고</Text>
          <StyledUpload
            name="avatar"
            listType="picture-circle"
            showUploadList={false}
            onChange={handleChange}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          >
            {uploadButton}
          </StyledUpload>
        </Logo>

        <Local>
          <Text>지역</Text>
          <StyledSelect
            options={[
              { value: '서울', label: '서울' },
              { value: '부산', label: '부산' },
              { value: '대구', label: '대구' },
              { value: '인천', label: '인천' },
              { value: '광주', label: '광주' },
              { value: '대전', label: '대전' },
              { value: '울산', label: '울산' },
            ]}
            value={teamLocal}
            onChange={(value) => setTeamLocal(value as string)}
          />
        </Local>

        <Introduce>
          <Text>팀 소개</Text>
          <StyledTextArea
            rows={4}
            placeholder="maxLength is 32"
            maxLength={32}
            value={teamIntroduce}
            onChange={({ target: { value } }) => setTeamIntroduce(value)}
          />
        </Introduce>
      </Content>
    </StyledModal>
  );
};

export default TeamCreateModal;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
  }
`;

const Title = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  padding: 16px 20px;
`;

const Content = styled.div`
  padding: 16px 24px;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 30px;
`;

const Text = styled.div`
  width: 60px;
`;

const StyledUpload = styled(Upload)`
  flex: 1;
`;

const Logo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  margin-bottom: 24px;
`;

const Local = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 24px;
`;

const Introduce = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StyledTextArea = styled(TextArea)`
  flex: 1;
`;

const StyledInput = styled(Input)`
  flex: 1;
`;

const StyledSelect = styled(Select)`
  flex: 1;
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
`;
