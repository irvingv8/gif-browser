import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  width: 100%;
  background: white;
  padding: 15px;
  margin-bottom: 15px;
  position: relative;
  @media (min-width: 600px) {
    width: ${props => (props.full ? "100%" : "49%")};
  }
  @media (min-width: 1200px) {
    width: ${props => (props.full ? "100%" : "24%")};
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;
const Thumbnail = styled.div`
  background-image: url('${props => props.src}');
  background-size: cover;
  width: 100%;
  height: 250px;
`;

const Title = styled.h1`
  font-size: 20px;
  line-height: 20px;
  color: #7b1fa2;
`;

const Info = styled.span`
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

const Card = ({ title, thumbnail, info, onClick, full }) => (
  <Wrapper onClick={onClick} full={full}>
    {!full && <Thumbnail src={thumbnail} />}
    {full && <Image src={thumbnail} alt="" />}
    <Title>{title}</Title>
    <br />
    <Info>{info}</Info>
  </Wrapper>
);

export default Card;
