"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * A dark faceted core with thin orbital rings and scattered luminous
 * nodes, some connected by hairline arcs. Represents individual minds
 * (points) becoming a network (connections) around a shared body of
 * knowledge (the core). Rotates almost imperceptibly; reacts to the
 * cursor with subtle parallax rather than direct manipulation.
 */

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function Core({ reduced }: { reduced: boolean }) {
  const coreRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Group>(null);
  const ring2 = useRef<THREE.Group>(null);
  const ring3 = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const { viewport } = useThree();

  useEffect(() => {
    function onMove(e: PointerEvent) {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  // Node positions: scattered luminous points implying individual minds
  const nodes = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const count = 22;
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      pts.push(new THREE.Vector3(x, y, z).multiplyScalar(1.55));
    }
    return pts;
  }, []);

  // A sparse set of connections between nearby nodes (constellation lines)
  const connections = useMemo(() => {
    const lines: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodes.length; i++) {
      let closest = -1;
      let closestDist = Infinity;
      for (let j = 0; j < nodes.length; j++) {
        if (i === j) continue;
        const d = nodes[i].distanceTo(nodes[j]);
        if (d < closestDist) {
          closestDist = d;
          closest = j;
        }
      }
      if (closest !== -1 && Math.random() > 0.35) {
        lines.push([nodes[i], nodes[closest]]);
      }
    }
    return lines;
  }, [nodes]);

  useFrame((_, delta) => {
    const speed = reduced ? 0 : 1;
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.045 * speed;
      coreRef.current.rotation.x = Math.sin(Date.now() * 0.00007) * 0.06;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.02 * speed;
    }
    if (ring1.current) ring1.current.rotation.z += delta * 0.03 * speed;
    if (ring2.current) ring2.current.rotation.x += delta * 0.022 * speed;
    if (ring3.current) ring3.current.rotation.y += delta * 0.018 * speed;

    current.current.x += (target.current.x - current.current.x) * 0.03;
    current.current.y += (target.current.y - current.current.y) * 0.03;

    if (coreRef.current) {
      coreRef.current.rotation.y += current.current.x * 0.0012;
      coreRef.current.position.x = current.current.x * 0.12;
      coreRef.current.position.y = -current.current.y * 0.08;
    }
  });

  const scale = Math.min(viewport.width / 6.2, 1.15);

  return (
    <group ref={coreRef} scale={scale}>
      {/* Faceted core */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshStandardMaterial
          color="#0c0c14"
          roughness={0.35}
          metalness={0.6}
          emissive="#3a2b7a"
          emissiveIntensity={0.12}
          flatShading
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.86, 1]} />
        <meshBasicMaterial
          color="#8b6bff"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Orbital rings */}
      <group ref={ring1} rotation={[Math.PI / 2.3, 0, 0]}>
        <mesh>
          <torusGeometry args={[1.35, 0.0025, 8, 128]} />
          <meshBasicMaterial color="#8b6bff" transparent opacity={0.35} />
        </mesh>
      </group>
      <group ref={ring2} rotation={[0.4, Math.PI / 3, 0]}>
        <mesh>
          <torusGeometry args={[1.62, 0.0022, 8, 128]} />
          <meshBasicMaterial color="#6de0ff" transparent opacity={0.22} />
        </mesh>
      </group>
      <group ref={ring3} rotation={[1.1, 0, Math.PI / 5]}>
        <mesh>
          <torusGeometry args={[1.85, 0.002, 8, 128]} />
          <meshBasicMaterial color="#5b7fff" transparent opacity={0.16} />
        </mesh>
      </group>

      {/* Luminous nodes */}
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.014 + (i % 3) * 0.006, 8, 8]} />
          <meshBasicMaterial color={i % 5 === 0 ? "#6de0ff" : "#f5f4f8"} />
        </mesh>
      ))}

      {/* Hairline connections */}
      {connections.map(([a, b], i) => (
        <line key={i}>
          <bufferGeometry
            attach="geometry"
            onUpdate={(g) => {
              g.setFromPoints([a, b]);
            }}
          />
          <lineBasicMaterial
            attach="material"
            color="#8b6bff"
            transparent
            opacity={0.14}
          />
        </line>
      ))}

      <pointLight position={[2, 1, 2]} intensity={8} color="#8b6bff" distance={6} />
      <pointLight position={[-2, -1, -1]} intensity={4} color="#6de0ff" distance={6} />
    </group>
  );
}

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export function KnowledgeCore() {
  const reduced = useReducedMotion();
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(hasWebGL());
  }, []);

  if (!supported) {
    return (
      <div
        aria-hidden="true"
        className="relative h-[420px] w-[420px] max-w-[80vw] mx-auto"
      >
        <div className="absolute inset-0 rounded-full border border-line" />
        <div className="absolute inset-8 rounded-full border border-line-strong" />
        <div className="absolute inset-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet shadow-[0_0_40px_10px_rgba(139,107,255,0.35)]" />
      </div>
    );
  }

  return (
    <div
      className="relative h-[460px] w-full max-w-[560px] mx-auto md:h-[560px]"
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.8]}
        camera={{ position: [0, 0, 5.4], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.15} />
        <Core reduced={reduced} />
      </Canvas>
    </div>
  );
}
