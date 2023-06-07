import TeamRentalDetail from 'components/team-rental/TeamRentalDetail';
import GymRentalList from 'components/common/GymRentalList';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const Index = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  if (id) {
    return (
      <Section>
        <TeamRentalDetail id={id} />
      </Section>
    );
  }

  return (
    <Section>
      <GymRentalList type="team-rental" />
    </Section>
  );
};

export default Index;

const Section = styled.div`
  max-width: 1180px;
  margin: auto;
`;
