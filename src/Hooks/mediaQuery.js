import { useState, useEffect } from "react";

function getResolution(){
    const { innerWidth: width, innerHeight: height } = window
    return { width, height }
}

export const useMediaQuery = () => {
    const [resolution, setResolution] = useState(getResolution())
    const [dimensions, setDimensions] = useState({
        isMobile: false,
        isDesktop: false,
        isLargeDesktop: false,
        isTablet: false,
        isSmallTablet: false
    })

    function resolveSize(resolution){
        const { width } = resolution
        const shell = {
            isMobile: width <= 480 ? true : false,
            isDesktop: ((width >= 1025) && (width <= 1280)) ? true : false,
            isLargeDesktop: width >= 1281 ? true : false,
            isTablet: ((width >= 768)  && (width <= 1024)) ? true : false,
            isSmallTablet: ((width >= 481)  &&  (width <= 767)) ? true : false
        }
        setDimensions({ ...dimensions, ...shell })
    }

    useEffect(() =>  {
        function handleResize(){
            setResolution(getResolution())
        }
        
        window.addEventListener("resize", handleResize)
        // console.log("fired!!!")
    }, [])

    useEffect(() => {
        resolveSize(resolution)
    }, [resolution])

    return { dimensions }
}
