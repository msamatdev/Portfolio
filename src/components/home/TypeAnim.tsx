"use client";
import { TypeAnimation } from 'react-type-animation';

const TypeAnim = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        'french student',
        1500,
        'french developer',
        1500,
        'tech savvy',
        1500,
        'sim racer',
        1500,
        'car enthusiast',
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