import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei'
import { useRef } from 'react'
import type { Mesh } from 'three'

function Blob() {
  const ref = useRef<Mesh>(null!)
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.12
    }
  })
  return (
    <Float speed={1.3} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={ref} args={[1.45, 64, 64]} scale={1.1}>
        <MeshDistortMaterial color="#7165ff" emissive="#251b77" emissiveIntensity={0.75} roughness={0.16} metalness={0.45} distort={0.36} speed={1.5} />
      </Sphere>
    </Float>
  )
}

export default function Orb() {
  return <div className="orb-canvas" aria-label="Animated 3D digital orb">
    <Canvas camera={{ position: [0, 0, 5.2], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1.4} />
      <pointLight position={[3, 3, 3]} intensity={30} color="#6cdeff" />
      <pointLight position={[-3, -2, 1]} intensity={22} color="#9b5cff" />
      <Stars radius={45} depth={20} count={900} factor={2} saturation={0} fade speed={0.5} />
      <Blob />
    </Canvas>
  </div>
}
