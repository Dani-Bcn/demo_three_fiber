

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {

  


  const { nodes, materials } = useGLTF('/sofa.gltf')
  console.log(materials.Fabric_Couch.color.r= 0.15)
  return (
    <group {...props} dispose={null}>
     
      <mesh geometry={nodes.Cushion_Seats_002_Cushion_Seats.geometry} material={materials.Fabric_Couch}  />
      <mesh geometry={nodes.Cushion_Seats_003_Cushion_Seats.geometry} material={materials.Fabric_Couch} />
      <mesh geometry={nodes.Cushion_Seats001_Cushion_Seats.geometry} material={materials.Fabric_Couch} />
      <mesh geometry={nodes.William_302_Zanotta_Legs001.geometry} material={materials.Metal}  />
      <mesh geometry={nodes.William_302_Zanotta003.geometry} material={materials.Fabric_Couch} />
      <mesh geometry={nodes.William_302_Zanotta004.geometry} material={materials.Fabric_Couch} />
      <mesh geometry={nodes.William_302_Zanotta005.geometry} material={materials.Fabric_Couch} />
      <mesh geometry={nodes.William_Cushion_side.geometry} material={materials.Fabric_Couch} />
      <mesh geometry={nodes.William_Cushion_side001.geometry} material={materials.Fabric_Couch} />
      <mesh geometry={nodes.William_Cushion003.geometry} material={materials.Fabric_Couch} />
      <mesh geometry={nodes.William_Cushion004.geometry} material={materials.Fabric_Couch} />
      <mesh geometry={nodes.William_Cushion005.geometry} material={materials.Fabric_Couch} />
    </group>
  )
}

useGLTF.preload('/sofa.gltf')
