"use client";

import React, { useRef, useMemo, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Environment } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/utils";

// Refined 3D Sphere radius so it floats serenely in the center of the dark universe canvas
const RADIUS = 2.1;

const ArtCanvasMesh = ({ 
  onClick, 
  textureUrl = "/images/sphere_madhubani.jpg",
  ringColor = "#C87A38"
}: { 
  onClick?: () => void, 
  textureUrl?: string,
  ringColor?: string
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const frameRef = useRef<THREE.Mesh>(null);

  // Load authentic high-res Madhubani folk art texture
  const colorMap = useTexture(textureUrl);

  useMemo(() => {
    if (colorMap) {
      colorMap.colorSpace = THREE.SRGBColorSpace;
      colorMap.anisotropy = 16;
      colorMap.generateMipmaps = true;
      colorMap.minFilter = THREE.LinearMipmapLinearFilter;
      colorMap.magFilter = THREE.LinearFilter;
      colorMap.needsUpdate = true;
    }
  }, [colorMap]);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.07;
    if (frameRef.current) frameRef.current.rotation.y += delta * 0.07;
  });

  return (
    <group 
      onClick={onClick}
      onPointerOver={() => document.body.style.cursor = 'pointer'} 
      onPointerOut={() => document.body.style.cursor = 'auto'}
    >
      {/* Central High-Quality 3D Art Canvas Sphere */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <sphereGeometry args={[RADIUS, 128, 128]} />
        <meshPhysicalMaterial 
          map={colorMap} 
          roughness={0.28}
          metalness={0.10}
          clearcoat={0.65}
          clearcoatRoughness={0.12}
          reflectivity={0.85}
        />
      </mesh>

      {/* Decorative Metallic Ochre-Gold Halo Bevel Ring */}
      <mesh ref={frameRef} rotation={[Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[RADIUS + 0.16, 0.04, 32, 128]} />
        <meshPhysicalMaterial 
          color={ringColor} 
          roughness={0.18}
          metalness={0.92}
          clearcoat={0.4}
        />
      </mesh>
    </group>
  );
};

const particlesCount = 60000; 
const [ringPositions, ringColors, ringRandoms] = (() => {
  const pos = new Float32Array(particlesCount * 3);
  const col = new Float32Array(particlesCount * 3);
  const rnd = new Float32Array(particlesCount);

  for(let i=0; i<particlesCount; i++) {
    const angle = Math.random() * Math.PI * 2;

    const rDist = Math.pow(Math.random(), 1.5);
    const radius = 2.3 + rDist * 2.2; 

    const thickness = 0.4 - (rDist * 0.2); 
    const ySpread = (Math.random() + Math.random() + Math.random() - 1.5);
    const y = ySpread * thickness; 

    pos[i*3] = Math.cos(angle) * radius;
    pos[i*3+1] = y;
    pos[i*3+2] = Math.sin(angle) * radius;

    const intensity = 1.0 - rDist; 

    const paletteType = Math.random();
    let baseR, baseG, baseB;

    // Organic Art Mineral Pigment Palette: Terracotta Red, Golden Ochre, Indigo Blue
    if (paletteType < 0.65) {
      // Golden Ochre / Mineral Amber
      baseR = 0.88; baseG = 0.58; baseB = 0.22;
    } else if (paletteType < 0.88) {
      // Terracotta Rust Red
      baseR = 0.80; baseG = 0.32; baseB = 0.20;
    } else {
      // Deep Peacock Indigo Blue
      baseR = 0.12; baseG = 0.48; baseB = 0.78;
    }

    baseR = Math.min(1.0, Math.max(0.0, baseR + (Math.random() - 0.5) * 0.1));
    baseG = Math.min(1.0, Math.max(0.0, baseG + (Math.random() - 0.5) * 0.1));
    baseB = Math.min(1.0, Math.max(0.0, baseB + (Math.random() - 0.5) * 0.1));

    const sparkle = Math.random() > 0.95 ? 2.5 : 1.0;

    col[i*3] = baseR * intensity * sparkle;     
    col[i*3+1] = baseG * intensity * sparkle;   
    col[i*3+2] = baseB * intensity * sparkle;   
    rnd[i] = Math.random();
  }
  return [pos, col, rnd];
})();

const ParticleRing = ({ ringState, massiveAsteroidsRef }: { ringState: 'hidden' | 'animating' | 'visible', massiveAsteroidsRef: React.MutableRefObject<Float32Array> }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const uniforms = useRef({
    uProgress: { value: ringState === 'visible' ? 1.0 : 0.0 },
    uAsteroids: { value: new Float32Array(75 * 4) },
    time: { value: 0 }
  });

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.02;
      pointsRef.current.updateMatrix();

      const invMat = new THREE.Matrix4().copy(pointsRef.current.matrix).invert();
      const localAsteroids = new Float32Array(75 * 4);
      for(let i=0; i<75; i++) {
        const ast = new THREE.Vector3(
          massiveAsteroidsRef.current[i*4],
          massiveAsteroidsRef.current[i*4+1],
          massiveAsteroidsRef.current[i*4+2]
        );
        ast.applyMatrix4(invMat);
        localAsteroids[i*4] = ast.x;
        localAsteroids[i*4+1] = ast.y;
        localAsteroids[i*4+2] = ast.z;
        localAsteroids[i*4+3] = massiveAsteroidsRef.current[i*4+3];
      }
      uniforms.current.uAsteroids.value = localAsteroids;
    }
    uniforms.current.time.value = state.clock.elapsedTime;

    if (ringState === 'animating') {
      uniforms.current.uProgress.value += delta * 0.35; 
      if (uniforms.current.uProgress.value > 1.0) uniforms.current.uProgress.value = 1.0;
    } else if (ringState === 'visible') {
      uniforms.current.uProgress.value = 1.0;
    } else {
      uniforms.current.uProgress.value = 0.0;
    }
  });

  const onBeforeCompile = (shader: any) => {
    shader.uniforms.uProgress = uniforms.current.uProgress;
    shader.uniforms.uAsteroids = uniforms.current.uAsteroids;
    shader.uniforms.time = uniforms.current.time;

    shader.vertexShader = `
      uniform float uProgress;
      uniform vec4 uAsteroids[75];
      uniform float time;
      attribute float aRandom;
      varying float vProgress; 
      ${shader.vertexShader}
    `;

    shader.vertexShader = shader.vertexShader.replace(
      `#include <begin_vertex>`,
      `
      vec3 transformed = vec3(position);

      float angle = atan(transformed.x, transformed.z);
      float normalizedAngle = abs(angle) / 3.14159265359;
      float spawnThreshold = 1.0 - normalizedAngle; 

      float progressValue = (uProgress * 1.4) - spawnThreshold;
      float particleProgress = smoothstep(0.0, 0.4, progressValue);
      vProgress = particleProgress;

      transformed.y += sin(angle * 10.0 + time) * 0.05 * aRandom;

      if (uProgress > 0.5) {
        for(int i = 0; i < 75; i++) {
          vec4 astData = uAsteroids[i];
          vec3 delta = transformed - astData.xyz;
          float dist = length(delta);

          float rad = astData.w * 2.0 + 0.15;

          if (dist < rad) {
             float force = pow((rad - dist) / rad, 2.0); 
             transformed += normalize(delta) * force * 0.4;
             transformed.y += force * 0.20 * (aRandom - 0.5);
          }
        }
      }

      float swirl = (1.0 - particleProgress) * 4.0; 
      float s = sin(swirl);
      float c = cos(swirl);
      transformed.xz = mat2(c, -s, s, c) * transformed.xz;

      transformed.y += (1.0 - particleProgress) * (transformed.y >= 0.0 ? 1.0 : -1.0);

      vec3 moonSurface = normalize(transformed) * 2.2;
      transformed = mix(moonSurface, transformed, particleProgress);
      `
    );

    shader.fragmentShader = `
      varying float vProgress;
      ${shader.fragmentShader}
    `;

    shader.fragmentShader = shader.fragmentShader.replace(
      `#include <color_fragment>`,
      `
      #include <color_fragment>

      diffuseColor.a *= vProgress;
      `
    );
  };

  return (
    <points ref={pointsRef} rotation={[-Math.PI / 2, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={particlesCount}
          array={ringPositions}
          itemSize={3}
          args={[ringPositions, 3]}
        />
        <bufferAttribute 
          attach="attributes-color" 
          count={particlesCount}
          array={ringColors}
          itemSize={3}
          args={[ringColors, 3]}
        />
        <bufferAttribute 
          attach="attributes-aRandom" 
          count={particlesCount}
          array={ringRandoms}
          itemSize={1}
          args={[ringRandoms, 1]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.009} 
        vertexColors 
        transparent 
        opacity={0.85} 
        sizeAttenuation={true} 
        blending={THREE.AdditiveBlending} 
        depthWrite={false} 
        onBeforeCompile={onBeforeCompile} 
      />
    </points>
  );
};

const generateAsteroids = (count: number) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    const baseRadius = 2.7 + Math.random() * 1.8; 
    const radialAmplitude = 0.4 + Math.random() * 1.2; 
    const radialSpeed = 0.15 + Math.random() * 0.25; 
    const phase = Math.random() * Math.PI * 2;

    const angle = Math.random() * Math.PI * 2;
    const zOffset = (Math.random() - 0.5) * 0.8; 

    const speed = (0.04 + Math.random() * 0.08) * (Math.random() > 0.5 ? 1 : -1);

    const rotationSpeedX = (Math.random() - 0.5) * 0.05;
    const rotationSpeedY = (Math.random() - 0.5) * 0.05;
    const rotationSpeedZ = (Math.random() - 0.5) * 0.05;

    const scale = 0.025 + Math.pow(Math.random(), 4) * 0.2;

    data.push({
      angle, baseRadius, radialAmplitude, radialSpeed, phase, zOffset, speed,
      rx: Math.random() * Math.PI, ry: Math.random() * Math.PI, rz: Math.random() * Math.PI,
      rsx: rotationSpeedX, rsy: rotationSpeedY, rsz: rotationSpeedZ,
      scale
    });
  }
  data.sort((a, b) => b.scale - a.scale);
  return data;
};

const AsteroidBelt = ({ ringState, massiveAsteroidsRef }: { ringState: 'hidden' | 'animating' | 'visible', massiveAsteroidsRef: React.MutableRefObject<Float32Array> }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const colorMap = useTexture('/images/sphere_madhubani.jpg');

  const count = 75; 
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const [asteroids] = useState(() => generateAsteroids(count));

  const scaleRef = useRef(0);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const targetScale = ringState === 'hidden' ? 0 : 1;
    const lerpSpeed = ringState === 'hidden' ? 5 : 2;
    scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, targetScale, delta * lerpSpeed);

    if (scaleRef.current < 0.01) {
      meshRef.current.visible = false;
      return;
    }
    meshRef.current.visible = true;

    asteroids.forEach((ast, i) => {

      ast.angle += ast.speed * delta; 

      ast.phase += ast.radialSpeed * delta;
      let currentRadius = ast.baseRadius + Math.sin(ast.phase) * ast.radialAmplitude;

      if (currentRadius < 2.25) {
        const penetration = 2.25 - currentRadius;
        currentRadius = 2.25 + penetration * 0.85;
      }

      const x = Math.cos(ast.angle) * currentRadius;
      const y = Math.sin(ast.angle) * currentRadius;

      massiveAsteroidsRef.current[i * 4] = x;
      massiveAsteroidsRef.current[i * 4 + 1] = y;
      massiveAsteroidsRef.current[i * 4 + 2] = ast.zOffset;
      massiveAsteroidsRef.current[i * 4 + 3] = ast.scale;

      ast.rx += ast.rsx;
      ast.ry += ast.rsy;
      ast.rz += ast.rsz;

      dummy.position.set(x, y, ast.zOffset);
      dummy.rotation.set(ast.rx, ast.ry, ast.rz);
      dummy.scale.setScalar(ast.scale * scaleRef.current);
      dummy.updateMatrix();

      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} castShadow receiveShadow>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        map={colorMap} 
        bumpMap={colorMap} 
        bumpScale={0.08}
        color="#ffffff"
        roughness={0.6}
        metalness={0.2}
      />
    </instancedMesh>
  );
};

export interface LunarGravityCardProps {
  className?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  artTextureUrl?: string;
  ringColor?: string;
  hintText?: string;
}

export default function LunarGravityCard({ 
  className,
  artTextureUrl = "/images/sphere_madhubani.jpg",
  ringColor = "#C87A38",
  hintText = "Click 3D orb to ignite cosmic minerals",
  title,
  description
}: LunarGravityCardProps) {
  const [ringState, setRingState] = useState<'hidden' | 'animating' | 'visible'>('hidden');
  const massiveAsteroidsRef = useRef<Float32Array>(new Float32Array(75 * 4));

  return (
    <div className={cn("w-full h-full bg-transparent rounded-none flex flex-col md:flex-row relative overflow-hidden border-none shadow-none", className)}>
      
      {title || description ? (
        <div className="w-full md:w-[45%] flex flex-col justify-center px-6 sm:px-10 py-8 md:p-0 md:pl-12 relative z-20 pointer-events-none">
          {title && (
            <h2 className="text-[2.8rem] sm:text-[3.8rem] md:text-[4.5rem] font-bold tracking-tighter leading-[0.95] mb-4 sm:mb-6">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-medium leading-relaxed max-w-[340px]">
              {description}
            </p>
          )}
        </div>
      ) : null}
     
      <div className={cn("relative w-full h-full pointer-events-auto z-0 flex items-center justify-center bg-transparent", title || description ? "md:absolute md:right-0 md:top-0 md:w-[65%]" : "w-full")}>
        <div className="absolute inset-0 w-full h-full touch-pan-y" style={{ touchAction: "pan-y" }}>
          <Canvas shadows camera={{ position: [0, 2.0, 8.8], fov: 45 }} dpr={[1, 2]} style={{ touchAction: "pan-y" }}>
            {/* Dramatic Cinematic Studio Lighting */}
            <ambientLight intensity={0.65} />
            <directionalLight position={[8, 6, 6]} intensity={2.8} color="#FFFDF9" castShadow shadow-mapSize={[2048, 2048]} />
            <directionalLight position={[-8, -2, -4]} intensity={1.2} color={ringColor} />
            <pointLight position={[0, 4, 4]} intensity={1.5} color="#F5E6C8" />

            <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />

            <group rotation={[Math.PI / 9, 0, 0]}>
              <Suspense fallback={null}>
                <ArtCanvasMesh 
                  textureUrl={artTextureUrl} 
                  ringColor={ringColor}
                  onClick={() => { if(ringState === 'hidden') setRingState('animating') }} 
                />
                <ParticleRing ringState={ringState} massiveAsteroidsRef={massiveAsteroidsRef} />
                <AsteroidBelt ringState={ringState} massiveAsteroidsRef={massiveAsteroidsRef} />
              </Suspense>
            </group>
          </Canvas>
        </div>

        {/* Dynamic Hint Overlay Pill */}
        <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-30 pointer-events-none bg-[#FFFDF9]/95 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-[#C4B9A3]/50 text-[10px] sm:text-xs font-semibold tracking-wider text-[#1C1917] shadow-md flex items-center gap-1.5 sm:gap-2 max-w-[calc(100%-1.5rem)]">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C87A38] animate-pulse shrink-0" />
          <span className="truncate uppercase text-[9px] sm:text-[10px]">{hintText}</span>
        </div>
      </div>

    </div>
  );
}

export { LunarGravityCard as Component };

