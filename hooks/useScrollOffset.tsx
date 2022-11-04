import {useState, useEffect} from 'react'

const useScrollOffset = (ref, screenPartition) => {
    const [offset, setOffset] = useState<number>(0);

    useEffect(() => {
        window.addEventListener('scroll', (event : any) => {
            const top = ref.current.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            const difference = screenHeight - top;

            const screenDivide = screenPartition ? screenPartition : 2.8

            if (top && difference > 0 && difference <= screenHeight / screenDivide) {
                setOffset((difference / (screenHeight / screenDivide)) * 100);
            } else if (difference > screenHeight / screenDivide) {
                setOffset(100);
            }
        })
    }, [])

    return offset;
}

export default useScrollOffset