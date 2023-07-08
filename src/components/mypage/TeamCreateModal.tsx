import { Button, Input, Select, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from 'antd/es/upload';
import {
  usePresignedQuery,
  useTeamsPOSTMutation,
} from 'api/axios-client/Query';
import Swal from 'sweetalert2';
import { Body3 } from 'api/axios-client';
import {
  FooterContainer,
  StyledModal,
  Title,
} from 'components/styled/modal-common';
import { getBase64, uploadFile } from 'utils/common';

const { TextArea } = Input;

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TeamCreateModal = ({ open, setOpen }: Props) => {
  const [teamName, setTeamName] = useState('');
  const [teamLocal, setTeamLocal] = useState('부산');
  const [teamIntroduce, setTeamIntroduce] = useState('');
  const [logoImgFile, setLogoImgFile] = useState<File>();
  const [previewImg, setPreviewImg] = useState('');

  const { data: presigendData, refetch: presignedQueryRefetch } =
    usePresignedQuery('png');

  const { mutate: teamCreateMutate } = useTeamsPOSTMutation({
    onSuccess: () => {
      setTeamName('');
      setTeamLocal('');
      setTeamIntroduce('');
      setLogoImgFile(undefined);
      setPreviewImg('');

      setOpen(false);
      Swal.fire({
        icon: 'success',
        title: '팀 생성 성공',
      });
    },
    onError: () => {
      Swal.fire({
        icon: 'error',
        title: '팀 생성 실패',
      });
    },
  });

  const onClickCreate = async () => {
    if (teamName && teamLocal && teamIntroduce && logoImgFile) {
      presignedQueryRefetch();
    } else {
      Swal.fire({
        icon: 'error',
        title: '팀 생성 실패',
      });
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>,
  ) => {
    setLogoImgFile(info.file.originFileObj);

    getBase64(info.file.originFileObj as RcFile, (url) => {
      setPreviewImg(url);
    });
  };

  useEffect(() => {
    const createTeam = async () => {
      if (presigendData && logoImgFile) {
        const { presigned, url } = presigendData;
        const success = await uploadFile(logoImgFile as File, presigned);

        if (success) {
          teamCreateMutate(
            new Body3({
              name: teamName,
              local: teamLocal,
              image: url,
              introduction: teamIntroduce,
            }),
          );
        }
      }
    };
    createTeam();
  }, [presigendData, logoImgFile]);

  return (
    <StyledModal
      open={open}
      onCancel={() => setOpen(false)}
      title={<Title>팀생성</Title>}
      footer={
        <FooterContainer>
          <Button type="primary" onClick={onClickCreate}>
            생성하기
          </Button>
          <Button onClick={() => setOpen(false)}>취소</Button>
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
            customRequest={() => {}}
          >
            {previewImg ? (
              <img src={previewImg} alt="avatar" style={{ width: '100%' }} />
            ) : (
              uploadButton
            )}
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
