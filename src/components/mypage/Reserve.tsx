import React from 'react'
import styled from 'styled-components';
interface Props {
    Data :{
        name : string;
        content : string;
    }
    subData : {
        name : string;
        content : string ;
    }
}
const Reserve = ({Data,subData}:Props) => {
  return (
    
    <>
    {console.log(subData)}
    <div>{Data.name} {subData.name}</div>
    <EmptyBox></EmptyBox>
    </>
  )
}

export default Reserve


const EmptyBox = styled.div`
    height: 300px;
`