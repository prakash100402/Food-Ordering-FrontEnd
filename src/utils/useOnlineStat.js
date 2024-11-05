import { useState,useEffect } from "react";

const useOnlineStat = () =>
{
    const [onlineStat ,setOnlineStat] = useState(true);

    useEffect(()=>{
        window.addEventListener('offline',()=>{
            setOnlineStat(false);
        });

        window.addEventListener('online',()=>{
            setOnlineStat(true);
        });
    },[]);

    return onlineStat;
};

export default useOnlineStat;