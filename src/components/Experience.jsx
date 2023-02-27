import { OrbitControls, Sky } from "@react-three/drei"
import MFA from "./MFA"
import Scene from "./Scene"


const Experience = () => {
    return (
        <>
            <OrbitControls />
            <ambientLight />
            <directionalLight
                position={[-5, 15, 5]}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <group position={[0, -1, 0]}>
                <Sky/>
                <MFA />
    <mesh position={[0,-0.01,0]} scale={[10,0.01,10]}>
        <boxBufferGeometry/>
        <meshPhysicalMaterial color='black'/>
      </mesh>
            </group>
            <mesh
                rotation={[-0.5 * Math.PI, 0, 0]}
                position={[0, -1, 0]}
                receiveShadow
            >
                <Scene/>
                <planeBufferGeometry args={[10, 10, 1, 1]} />
                <shadowMaterial transparent opacity={0.2} />
            </mesh>
            
        </>
    )
}

export default Experience