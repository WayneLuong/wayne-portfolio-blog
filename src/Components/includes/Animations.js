import styled, { keyframes } from "styled-components";
import staticOn from '../../assets/img/static.gif'

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #e3f2fd;
  font-family: "Open Sans", sans-serif;
`;

//Animations
const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0) ;
    transform:translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0) ;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutRight = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`;

const switchOn = keyframes`
      10%{
        transform scale(1, 0.002)
      }
      35%{
        transform scale(0.2, 0.002)
        opacity 1
      }
      50%{
        transform scale(0.2, 0.002)
        opacity 0
      }
      85% {
        transform scale(1, 0.002)
        opacity 1
      }
      100%{
        transform scale(1, 1)
      }
`;
const switchOff = keyframes`
      10%{
        transform scale(1, 1)
      }
      35%{
        transform scale(1, 0.002)
        opacity 1
      }
      50%{
        transform scale(0.2, 0.002)
        opacity 0
      }
      85% {
        transform scale(0.2, 0.002)
        opacity 1
      }
      100%{
        transform scale(1, 0.002)
      }
`;
const staticOnAnim = keyframes`
  from {
    background-image:url(${staticOn})
  }
  to {
    background-image:url(${staticOn})
  }
`;
//Pages
export const HomePageElm = styled(Page)`
  &.page-enter {
    animation: ${staticOnAnim} 0.5s forwards;
  }
  &.page-exit {
    animation: ${switchOff} 0.3s forwards;
  }
`;

export const AboutPageElm = styled(Page)`
  &.page-enter {
    animation: ${staticOnAnim} 0.5s forwards;
  }
  &.page-exit {
    animation: ${switchOff} 0.3s forwards;
  }
`;

export const WorksPageElm = styled(Page)`
  &.page-enter {
    animation: ${staticOnAnim} 0.5s forwards;
  }
  &.page-exit {
    animation: ${switchOff} 0.3s forwards;
  }
`;

export const BlogsPageElm = styled(Page)`
  &.page-enter {
    animation: ${staticOnAnim} 0.5s forwards;
  }
  &.page-exit {
    animation: ${switchOff} 0.3s forwards;
  }
`;

export const ContactPageElm = styled(Page)`
  &.page-enter {
    animation: ${staticOnAnim} 0.5s forwards;
  }
  &.page-exit {
    animation: ${switchOff} 0.3s forwards;
  }
`;
