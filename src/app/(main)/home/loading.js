"use client"

import { useState, useEffect } from 'react';

export default function Loading() {
    const [dots, setDots] = useState('');
    const [dotCnt, setDotCnt] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(dotCnt < 3){
                setDotCnt(dotCnt + 1)

            }
            else {
                setDotCnt(0)
            }
            
        }, 1000);  // 점이 추가되는 속도 조절

        return () => clearInterval(interval);
    }, [dotCnt]);

    useEffect(() => {
        const dotStr = dotCnt === 0 ? "" : " . ".repeat(dotCnt)
        setDots(dotStr)
    }, [dotCnt])

    return (
        <div className="loading_container">
            <div className="loading_cube">
                <div className={`cube_face cube_face1`}>L</div>
                <div className={`cube_face cube_face2`}>U</div>
                <div className={`cube_face cube_face3`}>P</div>
                <div className={`cube_face cube_face4`}>A</div>
                <div className={`cube_face cube_face5`}>N</div>
                <div className={`cube_face cube_face6`}>G</div>
            </div>
            <div className={["loading_text", "textDefault", "eng"].join(" ")}>Loading{dots}</div>
        </div>
    );
}

