import React, {useState,useEffect} from 'react';
function useMyCustomHook(data) {

    useEffect(() => {
document.title=data;        
    }, [data]);
    return data;
}

function Hook2() {
    const someValue = useMyCustomHook("vcet1");
    return (<p>The new value is {someValue}</p>);
}

export default Hook2;