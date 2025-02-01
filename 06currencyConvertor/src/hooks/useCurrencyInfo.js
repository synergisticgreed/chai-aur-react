//js extension is better in this case as we dont return a jsx 
import {useEffect, useState} from "react"
function useCurrencyInfo(currency){    //custom hook
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/{currency}.json`)
        .then((res)=>res.json)
        .then((res)=>setData(res[currency]))
        console.log(data);
        
    },[currency])  //dependency array
    console.log(data);

    return data
}

export default useCurrencyInfo;