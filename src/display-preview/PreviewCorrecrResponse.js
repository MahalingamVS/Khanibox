/**
 * @file Correct Response component for Matrix Interaction item type 
 * @author Rajaguru
 */
import React, {  useState } from "react";
import CorrectResponse from './CorrectResponse'
import MatrixCorrectResponse from './MatrixCorrectResponse'


const PreviewCorrecrResponse = ({ content, onUpdate }) => {

    const [itemCode, setItemCode] = useState(content.itemTypeCode);



  return (
    <div>
    {itemCode === "ST" && (
            <CorrectResponse content={content} onUpdate={onUpdate} />
    )}
    {itemCode !== "ST" && (
            <MatrixCorrectResponse content={content} onUpdate={onUpdate} />
    )}

   
    </div>
  );
};

export default PreviewCorrecrResponse;
