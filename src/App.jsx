import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, SpotLightShadow } from '@react-three/drei'
import { Model } from './assests/Boom'
import { SofaDark } from './assests/SofaDark'

import './App.css'

function App() {
  console.log(SpotLightShadow)

  const [colorFree, setColorFree] = useState(
    {
      color: "black"
    }

  )
  const [iluminationFree, setIluminationFree] = useState(0.5)
  const maxIlumination = (() => {
    setIluminationFree(iluminationFree => iluminationFree + 0.10)
  })
  const minIlumination = (() => {
    setIluminationFree(iluminationFree => iluminationFree - 0.10)
  })
  const changeColorRed = (() => {
    setColorFree({
      color: "rgb(140, 31, 48)"
    })
  })
  const changeColorGreen = (() => {
    setColorFree({
      color: "rgb(100, 131, 8)"
    })
  })
  const changeColorBlue = (() => (
    setColorFree({
      color: "rgb(20, 100, 150)"
    })
  ))

  console.log(colorFree.color)

  return (
    <div className="App">
      <section>
        <button onClick={() => changeColorRed()}>Color Red</button>
        <button onClick={() => changeColorGreen()}>Color Green</button>
        <button onClick={() => changeColorBlue()}>Color Blue</button>
        <button onClick={() => maxIlumination()}>Ligth +</button>
        <button onClick={() => minIlumination()}>Ligth -</button>
      </section>

      <Canvas className='canvas'
        // Rotaciión  cámara X , Y , Z
        camera={{ position: [0, 0, 10], fov: 20 }}
      >

        //position X ,Y ,Z
        <spotLight position={[0, 0, 100]} intensity={[iluminationFree]} color={"red"} />
        <spotLight position={[0, 0, 100]} intensity={[iluminationFree]} />
        <spotLight position={[0, -100, 0]} intensity={[iluminationFree]} />
        <spotLight position={[0, 0, -100]} intensity={[iluminationFree]} />
        <spotLight position={[100, 0, 0]} intensity={[iluminationFree]} />
        <spotLight position={[0, 100, 0]} intensity={[iluminationFree]} />
        <spotLight position={[-100, 0, 0]} intensity={[iluminationFree]} />
        <spotLight position={[0, 100, 0]} intensity={[iluminationFree]} />
        <ambientLight intensity={[0.1]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  )
  function Box() {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    
    // Subscribe this component to the render-loop, rotate the mesh every frame
    /*  useFrame((state, delta) => (ref.current.rotation.x += delta)) */
    // Return the view, these are regular Threejs elements expressed in JSX

    return (

      <mesh
        ref={ref}
        scale={clicked ? 2 : 1.5}
        /*  onClick={(event) => click(!clicked)} */
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <SofaDark
          customColor={{ color: colorFree.color }}
        />
      </mesh>

    )
  }
}

export default App 
