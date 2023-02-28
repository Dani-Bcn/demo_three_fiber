import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, SpotLightShadow } from '@react-three/drei'
import { SofaDark } from './assests/SofaDark'
import { Puf } from './assests/Puf'
import { Puf2 } from './assests/Puf2'
import { Taburete } from './assests/Taburete'
import { motion as m } from 'framer-motion'


import './App.css'


function App() {
  console.log(SpotLightShadow)
  const [colorFree, setColorFree] = useState(
    {
      color: "black"
    }

  )
  const [colorLegsPuf, setColorLegsPuf] = useState(
    {
      color: "white"
    }

  )

  const [iluminationFree, setIluminationFree] = useState(0.5)
  const [iluminationColor, setIluminationColor] = useState("rgb(250, 250, 250)")
  const [isSelected, setIsSelected] = useState(true)
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

  console.log(isSelected)
  const changeColor2black =(()=>{
      setColorLegsPuf( {
        color: "black"
      })
  })
  const changeColor2Red =(()=>{
    setColorLegsPuf( {
      color: "red"
    })
})
const changeColor2White =(()=>{
  setColorLegsPuf( {
    color: "white"
  })
})
const changeColor2Yellow =(()=>{
  setColorLegsPuf( {
    color: "yellow"
  })
})
const changeColor2Blue =(()=>{
  setColorLegsPuf( {
    color: "blue"
  })
})
const changeColor2Green =(()=>{
  setColorLegsPuf( {
    color: "green"
  })
})


  return (
    <div className="App">
     

      <aside>
        <button onClick={() => setIsSelected(!isSelected)}>Change Model</button>
      </aside>
      <section>
        <button onClick={() => colorIluminationWhite()}>Iluimination White</button>
        <button onClick={() => colorIluminationRed()}>Iluimination Red</button>
        <button onClick={() => colorIluminationGreen()}>Iluination Green</button>
        <button onClick={() => colorIluminationBlue()}>Ilumination Blue</button>
        <button onClick={() => colorIluminationYellow()}>Ilumination Yellow</button>
      </section>
      <section>
        <button onClick={() => changeColorWhite()}>Color model White</button>
        <button onClick={() => changeColorBlack()}>Color model Black</button>
        <button onClick={() => changeColorRed()}>Color model Red</button>
        <button onClick={() => changeColorGreen()}>Color model Green</button>
        <button onClick={() => changeColorBlue()}>Color model Blue</button>
        <button onClick={() => maxIlumination()}>Ligth +</button>
        <button onClick={() => minIlumination()}>Ligth -</button>
      </section>
      {
        !isSelected && (
          <aside className='buttons-legs'>
            <button onClick={()=>changeColor2black()}>Color Legs Black </button>
            <button onClick={()=>changeColor2Red()}>Color Legs Red </button>
            <button onClick={()=>changeColor2Blue()}>Color Legs Blue </button>
            <button onClick={()=>changeColor2Yellow()}>Color Legs Yellow </button>
            <button onClick={()=>changeColor2Green()}>Color Legs Green </button>
          </aside>
        )
      }

      <Canvas className='canvas'
        // Rotaciión  cámara X , Y , Z
        camera={{ position: [0, 0, 10], fov: 20 }}
      >

        //position X ,Y ,Z
        <spotLight position={[0, 10, -10]} intensity={[iluminationFree]} color={iluminationColor} />
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


    /*  useFrame((state, delta) => (ref.current.rotation.x += delta)) */


    return (
      <group>
        <mesh
          ref={ref}
          scale={clicked ? 2 : 1.5}
          /*  onClick={(event) => click(!clicked)} */
          onPointerOver={(event) => hover(true)}
          onPointerOut={(event) => hover(false)}>
          {
            isSelected && (
              <SofaDark
                customColor={{ color: colorFree.color }}
                position={[0, -0.5, 0]}
              />
            )
          }
        </mesh>
        <mesh
          ref={ref}
          scale={0.035}
          /*  onClick={(event) => click(!clicked)} */
          onPointerOver={(event) => hover(true)}
          onPointerOut={(event) => hover(false)}>
          {
            !isSelected && (
              <Puf2
                customColor={{ color: colorFree.color }}
                customColor2={{color2:colorLegsPuf.color}}
                position={[0, -20, 0]}
              />
            )
          }
        </mesh>
      </group>

    )
  }
}

export default App 
