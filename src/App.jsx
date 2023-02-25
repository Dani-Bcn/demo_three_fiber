import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './App.css'


import React, { useState} from 'react'
import { useGLTF } from '@react-three/drei'
import { Color } from 'three'
import { Model } from './assests/Sofa'




function App() {


  return (
    <div className="App">
     
      <Canvas
        style={{
          width: "100vh", 
          height: "100vh",
          backgroundColor: "rgba(46,46,46,0)"
        }}>
        <OrbitControls />
        <Model />
        <ambientLight intensity={-0.1} /> 
        <directionalLight position={[0, 0, 5]} />
        

        {/*    
      
     <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[0,0,1]}>
          <cylinderGeometry args={[0.5, 0.5, 1, 50 ]} />
          <meshBasicMaterial color={"blue"} />
        </mesh>   */}
      </Canvas>
    </div>
  ) 
}

export default App 
