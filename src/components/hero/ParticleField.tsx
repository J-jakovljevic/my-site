import * as THREE from "three";

import { useParticleField } from "@hooks/useParticleField";
import { VERTEX_SHADER, FRAGMENT_SHADER } from "@models/particleField";

type ParticleFieldProps = {
  count: number;
  reducedMotion: boolean;
  interactive: boolean;
};

const ParticleField = ({
  count,
  reducedMotion,
  interactive,
}: ParticleFieldProps) => {
  const { groupRef, pointsRef, positions, colors, sizes } = useParticleField({
    count,
    reducedMotion,
    interactive,
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
          <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        </bufferGeometry>

        <shaderMaterial
          vertexShader={VERTEX_SHADER}
          fragmentShader={FRAGMENT_SHADER}
          transparent
          depthWrite={false}
          blending={THREE.NormalBlending}
        />
      </points>
    </group>
  );
};

export default ParticleField;
