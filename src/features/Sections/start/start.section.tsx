import { Section } from "../../../components/Section/Section";
import { StartStyled } from "./start.style";

// @ts-ignore
import flowers from '../../../assets/images/flowers.png';
// @ts-ignore
import flower1 from '../../../assets/images/flower1.png';

export const StartSection = () => {
  return (
    <Section>
      <StartStyled>
        <div className="block">
          <h1 className='title'>Lalibella</h1>
          <h2 className='subtitle'>flowers</h2>
        </div>
        <img className='buket' src={flowers} alt=""/>
        <img className='flower flower1' src={flower1} alt=""/>
      </StartStyled>
    </Section>
  );
};