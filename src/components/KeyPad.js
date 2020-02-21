import React from "react";
import useKeys from "../utils/useKeys";
import Key from "./Key";

const KeyPad = ({performCalculation}) => {
    const keys = useKeys();
    {/* console.log(keys) */}
    return (
        <div style={{ width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                {keys.map((key) => {
                    return <Key data={key} doCalculation={performCalculation}/>
                })}
            </div>
        </div>
    );
};

export default KeyPad;