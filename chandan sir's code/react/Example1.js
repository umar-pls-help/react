import React, {useState,useEffect} from 'react';

function useMyCustomHook(data) {

  
    useEffect(() => {
document.title=data;        
    }, [data]);

    return 5;
}

function MyAwesomeComponent({someDataKey}) {

    const someValue = useMyCustomHook("vcet");

    return (<p>The new value is {someValue}</p>);
}

export default Example1;