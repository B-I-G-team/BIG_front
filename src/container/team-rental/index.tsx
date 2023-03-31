import TeamRentalDetail from 'components/team-rental/TeamRentalDetail';
import TeamRentalList from 'components/team-rental/TeamRentalList';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Index = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  if (id) {
    return <TeamRentalDetail id={id} />;
  }

  return <TeamRentalList />;
};

export default Index;
