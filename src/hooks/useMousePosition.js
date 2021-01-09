import {useState, useEffect} from 'react'

// custom hook must start with use
const useMousePosition = () =>
{
    const [position, setPosition] = useState({x: 0, y: 0});

    const handleMouseMove = (e) => {
        setPosition({
            x: e.pageX ,
            y: e.pageY
        })
    };

    // when state changes, component will re-render
    // pass in [] as second parameter so it acts like ComponentDidMount
    useEffect(() =>
    {
        document.addEventListener('mousemove', handleMouseMove)

        // ComponentWillUnmount, remove event listener when removing the item from list
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])

    return position
}

export {useMousePosition as default};