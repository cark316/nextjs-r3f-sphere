"use client"

import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
import { useState } from "react"

export default function Home() {

  const headerContainer = 'h-screen w-screen flex justify-center items-center'
  const textList = 'text-[96px] flex justify-center items-center'
  const btn = 'outline text-[46px] pr-[32px] pl-[32px] pt-[18px] pb-[18px] rounded-[16px] bg-gradient'
  const [newColor, setNewColor] = useState('red')
  const [newGeometry, setNewGeometry] = useState('')

  return (
    <header className={headerContainer}>
      Nice
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
          <motion.mesh
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={()=>[(setNewColor('blue')),(setNewGeometry())]}>
            <sphereGeometry />
            {newGeometry}
            <meshBasicMaterial color={newColor} />
          </motion.mesh>
      </Canvas>
    </header>
  )
}