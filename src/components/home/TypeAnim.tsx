"use client";
import { TypeAnimation } from 'react-type-animation';

const TypeAnim = ({
  frenchStudent,
  frenchDeveloper,
  techSavvy,
  simRacer,
  carEnthusiast
}: {
  frenchStudent: string;
  frenchDeveloper: string;
  techSavvy: string;
  simRacer: string;
  carEnthusiast: string;
}) => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        frenchStudent,
        1500,
        frenchDeveloper,
        1500,
        techSavvy,
        1500,
        simRacer,
        1500,
        carEnthusiast,
        1500
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default TypeAnim;