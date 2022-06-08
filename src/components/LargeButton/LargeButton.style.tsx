import { cp } from "fs/promises";
import styled from "styled-components";
import { colors } from "../../styles";
import { GeneralStyleProps } from "../../types/general.types";
import { LargeButtonProps } from "./LargeButton.types";

export const backgroundColor: Record<LargeButtonProps['buttonType'], string> = {
    primary: colors.yellow400,
    secondary: colors.gray100,
    outline: colors.white,
    ghost: colors.transparent,
    disabled: colors.gray500,
}

export const justifyContent: Record<LargeButtonProps['iconPosition'], string> = {
    'none': 'center',
    'left' : 'space-between',
    'right' : 'space-between',
    'center-left': 'center',
    'center-right': 'center',
}

export const Button = styled.button<LargeButtonProps & GeneralStyleProps>`
    display: flex;
    width: ${props=> props.width || 100}%;
    height: ${props=> props.height || 100}%;
    color: ${props => props.isDisabled ? colors.gray500 : colors.black };
    background-color:${(props) => (props.isDisabled && !props.buttonType.includes('outline')) ? backgroundColor['disabled'] : backgroundColor[props.buttonType] };
    border-color:${(props) => !props.buttonType.includes('outline') ? colors.transparent : (props.isDisabled ? colors.gray500 : colors.black)};
    justify-content: ${props => justifyContent[props.iconPosition]};
    padding: 20px 16px;
    border-radius: 8px;
`

