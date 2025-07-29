import { useEffect, useRef } from "react"

const AnimatedPhoto = () => {
    const photoRef = useRef(null)

    useEffect(() => {
        const photo = photoRef.current
        let animationFrameId

        const animate = () => {
            const time = Date.now() * 0.00009 // Moderate speed for slimy movement
            
            // Controlled blob deformations that stay within reasonable bounds
            const blob1 = Math.sin(time) * 4 + Math.sin(time * 2.3 + Math.PI/3) * 2
            const blob2 = Math.cos(time * 1.4 + Math.PI/4) * 3.5 + Math.cos(time * 3.1 + Math.PI/2) * 1.8
            const blob3 = Math.sin(time * 0.8 + Math.PI/6) * 3.2 + Math.sin(time * 2.7 + Math.PI) * 1.5
            const blob4 = Math.cos(time * 1.6 + Math.PI/5) * 4.2 + Math.cos(time * 2.9 + Math.PI/7) * 2.1
            
            // Smaller wave ripples for surface texture
            const wave1 = Math.sin(time * 5.2 + Math.PI/8) * 1.2
            const wave2 = Math.cos(time * 4.7 + Math.PI/12) * 1.4
            const wave3 = Math.sin(time * 6.1 + Math.PI/9) * 1.1
            const wave4 = Math.cos(time * 5.8 + Math.PI/11) * 1.3
            
            // Continuous rotation with organic variation + constant rotation
            const rotationBase = time * 0.45
            const rotationWobble = Math.sin(time * 1.2) * 0.15 + Math.cos(time * 0.9) * 0.12
            const constantRotation = time * 30 // Constant rotation for the blob shape
            const rotationSpeed = rotationBase + rotationWobble + constantRotation
            const rotationRadius = 1.8 + Math.sin(time * 0.7) * 0.6
            
            // Constrained radii to prevent extreme deformation
            const radiusX = Math.max(35, Math.min(65, 50 + blob1 + blob2 + wave1 + wave2))
            const radiusY = Math.max(35, Math.min(65, 50 + blob3 + blob4 + wave3 + wave4))
            
            // Smooth center movement
            const centerX = 50 + Math.sin(rotationSpeed) * rotationRadius + Math.sin(time * 4.3) * 0.8
            const centerY = 50 + Math.cos(rotationSpeed) * rotationRadius + Math.cos(time * 3.9) * 0.7

            // Only apply clip-path, no transform rotation on the image
            photo.style.clipPath = `ellipse(${radiusX}% ${radiusY}% at ${centerX}% ${centerY}%)`
            animationFrameId = requestAnimationFrame(animate)
        }

        animationFrameId = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationFrameId)
    }, [])

    return (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-100 h-100 
        overflow-hidden z-20">
            <div
                ref={photoRef}
                className="w-full h-full bg-center bg-cover rounded-full border-3 border-black "
                style={{ backgroundImage: "url(/projects/Portfoliopfp.jpg)" }}
            />
        </div>
    )
}

export default AnimatedPhoto