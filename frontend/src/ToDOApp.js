import React, {useState, useEffect }  from 'react'

export const ToDOApp = () => {

    const[mydata, Setmydata] = useState("")

    useEffect(() => {
        //Define  URL
        const url = "http://127.0.0.1:8000/todo/"
        //Create the asynchronous function
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                
                Setmydata(json);   // update value of  state 
                } catch (error) {
                console.log("error", error);
                }
        }; fetchData();
    }, [])

  return (
    <>
        <div>
            {/* {
                mydata.map((curElem) => {
                    return (
                        <h2>{curElem.date}</h2>
                    )
                }

                )  
            } */}

        </div>
    </>
  )
}



