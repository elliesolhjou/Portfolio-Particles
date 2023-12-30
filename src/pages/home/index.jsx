
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import particlesConfig from "../../helpers/particlesConfig";

const TestParticles = () => {
  const particleInit = async (main) => {
    console.log('particleInit called, main:', main);
    try {
      await loadFull(main);
    } catch (error) {
      console.error('Error in particleInit:', error);
    }
  };

  return (
    <Particles
      id="test-particles"
      init={particleInit}
      options={{particlesConfig}}
    />
  );
};

export default TestParticles;
