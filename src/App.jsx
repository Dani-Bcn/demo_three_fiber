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
  const [iluminationColor, setIluminationColor] = useState("rgb(250, 250, 250)")
  const colorIluminationWhite = (() => {
    setIluminationColor("rgb(250, 250, 250)")
  })
  const colorIluminationRed = (() => {
    setIluminationColor("rgb(255, 211, 211)")
  })
  const colorIluminationGreen = (() => {
    setIluminationColor("rgb(218, 255, 211)")
  })
  const colorIluminationBlue = (() => {
    setIluminationColor("rgb(211, 226, 255)")
  })
  const colorIluminationYellow = (() => {
    setIluminationColor("rgb(255, 252, 211)")
  })
  const maxIlumination = (() => {
    setIluminationFree(iluminationFree => iluminationFree + 0.10)
  })
  const minIlumination = (() => {
    setIluminationFree(iluminationFree => iluminationFree - 0.10)
  })

  const changeColorWhite = (() => {
    setColorFree({
      color: "rgb(250, 250, 250)"
    })
  })

  const changeColorBlack = (() => {
    setColorFree({
      color: "rgb(10, 10,10)"
    })
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
      <button onClick={() => colorIluminationWhite()}>Iluimination White</button>
        <button onClick={() => colorIluminationRed()}>Iluimination Red</button>
        <button onClick={() => colorIluminationGreen()}>Iluination Green</button>
        <button onClick={() => colorIluminationBlue()}>Ilumination Blue</button>
        <button onClick={() => colorIluminationYellow()}>Ilumination Yellow</button>
        <button onClick={() => changeColorWhite()}>Color model White</button>
        <button onClick={() => changeColorBlack()}>Color model Black</button>
        <button onClick={() => changeColorRed()}>Color model Red</button>
        <button onClick={() => changeColorGreen()}>Color model Green</button>
        <button onClick={() => changeColorBlue()}>Color model Blue</button>
        <button onClick={() => maxIlumination()}>Ligth +</button>
        <button onClick={() => minIlumination()}>Ligth -</button>
      </section>

      <Canvas className='canvas'
        // Rotaciión  cámara X , Y , Z
        camera={{ position: [0, 0, 10], fov: 20 }}
      >

        //position X ,Y ,Z
        <spotLight position={[0, 0, 100]} intensity={[iluminationFree]} color={iluminationColor} />
        <spotLight position={[0, 0, 100]} intensity={[iluminationFree]} color={iluminationColor} />
        <spotLight position={[0, -100, 0]} intensity={[iluminationFree]} color={iluminationColor} />
        <spotLight position={[0, 0, -100]} intensity={[iluminationFree]} color={iluminationColor} />
        <spotLight position={[100, 0, 0]} intensity={[iluminationFree]} color={iluminationColor} />
        <spotLight position={[0, 100, 0]} intensity={[iluminationFree]} color={iluminationColor} />
        <spotLight position={[-100, 0, 0]} intensity={[iluminationFree]} color={iluminationColor} />
        <spotLight position={[0, 100, 0]} intensity={[iluminationFree]} color={iluminationColor} />
        <ambientLight intensity={[0.1]} />
        <Box position={[0, 0, 0]} />
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
          position={[0, -0.5, 0]}
        />
      </mesh>

    )
  }
}

export default App 
