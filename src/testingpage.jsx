import {useState} from 'react'
function Testingpage(){
    //useState Variable 
    const [num1,setNum1]=useState(0) 
    const [num2,setNum2]=useState(0)
    return(
        <>
            <input type="text" 
            onChange={
                (e)=>{
                 setNum1(e.target.value)
                }
            }/>
            {num1}
            <input type="text"
            onChange={
                (e)=>{
                  setNum2(e.target.value)
                }
            }
            />
            {num2}
            <button onClick={()=>{
                let sum;
                sum=Number(num1)+Number(num2)
                alert(sum)
            }}>
                Add
            </button>
        </>
    )
}

export default Testingpage;