import Styled from "styled-components";

const Overlapgroup = Styled.div`
  position: absolute;
  height: 150px;
  width: 250px;
  border-radius: 15px;
  top: 10px;
  left: 10px;
  background: linear-gradient(30deg, rgba(33,52,231,1) 10%, rgba(51,226,243,1) 100%);

  h1,label,img {
      position: absolute;
      bottom: 2.5px;
      color: white;
      padding: 15px;
  }

  h1 {
      top: 30px;
      height: 40px;
      font-size:40px;
      min-width: 150px;
  }

  label{
      font-size:12px;
      letter-spacing: 0.4px;
  }

  img {
      top: 0px;
  }

  div{
      position: absolute;
      top: 102px;
      left: 150px;
      height: 30px;
      width: 75px;
      color: white;
      border: 0.5px solid #ffffff30;
      border-radius: 40px;
      background-color: #ffffff1f;
      padding: 0 3px;
      align-items: center;
  }

  div label{
      padding: 0;
      top: 6px;
      right: 18px;
      font-size: 16px ;
      text-align:center;
  }

  div img{
      padding: 0;
      left:65px;
      top: 12px;
}
  

`;

/* align-items: center; */

export default Overlapgroup;
