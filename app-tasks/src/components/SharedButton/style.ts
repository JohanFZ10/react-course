import styled from 'styled-components'
import {SharedButtonsProps, SharedButtonContainerProps} from '../../constants/types/sharedComponentsProps'
import {ButtonsTypes} from '../../constants/theme/buttons'
//import {myFunction} from '../../utils/Buttons/utils'

export const Button = styled.button<SharedButtonsProps>`
    width: ${({width})=>width};
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 20px;
    background-color: ${myFunction("#cfe")};
    font-size: 14px;
`

export const ButtonContainer = styled.div<SharedButtonContainerProps>`
    width: ${({width})=> width || "50%"};
    display: flex;
    justify-content: space-around;
    padding: 5px;
    background-color: #ccc;
`