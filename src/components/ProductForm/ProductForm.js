import OptionSize from '../OptionSize/OptionSize'
import OptionColor from '../OptionColor/OptionColor'
import Button from '../Button/Button'

import clsx from 'clsx';
import { useState } from 'react'

const ProductForm = ({
    sizes, 
    colors, 
setCurrentColor,
setCurrentSize,
currentColor,
currentSize
}) => {
    return (
        <form>
            <OptionSize sizes = {sizes} setCurrentsize = {setCurrentSize} currentSize = {currentSize}/>
            <OptionColor colors ={colors} setCurrentColor = {setCurrentColor} currentColor = {currentColor}/>
            <Button />
        </form>
    )
};
export default ProductForm