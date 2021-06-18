/**
 * @file Item component which facilitates features of correct response based on the item type...
 * @author 
 */

import React, { useState, useEffect, useCallback, useRef } from "react";

const Item = ({ correctResponse, onUpdate, itemType }) => {
    const itemObjDefault = {
        itemTypeCode: itemType.code
    };
    const [contentObj, setContentObj] = useState(itemObjDefault);

    useEffect(() => {
        switchItemCorrectResponse(contentObj.itemTypeCode);
    }, []); // eslint-disable-line


    const switchItemCorrectResponse = (code) => {
        switch (code) {
            case "ORD":
                setItemRepo(Ordering);
                break;
            case "PP":
                setItemRepo(Graph);
                break;
            case "ST":
                setItemRepo(SelectText);
                break;

            default:
                setItemRepo();
                break;
        }
    };
};

export default Item;