import React, { useState } from "react";

const Counter = () => {
    const [value, setValue] = useState(10);

    const addValue = () => {
        if (value < 20) {
            setValue(value + 1);
        }
    }
    const removeValue = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    }
    return (
        <>
            <div style={{background:"darkgrey",padding:"20px",marginTop:"180px",width:"100%"}}>
                <h1 style={{ marginTop: "10px", color: "#ffffff",textTransform:"capitalize",fontWeight:"700" }}>counter app</h1>
                <h1 style={{ textAlign: "center",marginTop:"10px",marginBottom:"20px" }}>{value}</h1>
                <button style={{ marginRight: "10px", padding: "8px", width: "100px", fontSize: "12px", border: "none", background: "#000", color: "#ffffff", borderRadius: "5px" }} onClick={addValue}>Add Value</button>
                <button style={{ marginRight: "10px",marginBottom:"20px", padding: "8px", width: "100px", fontSize: "12px", border: "none", background: "#000", color: "#ffffff", borderRadius: "5px" }} onClick={removeValue}>Subtract value</button>
            </div>
        </>
    )
}
export default Counter;