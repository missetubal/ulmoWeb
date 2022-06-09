import styled from "styled-components";
import { colors } from "../../styles";
import { GeneralStyleProps } from "../../types/general.types";
import { LargeButtonProps } from "./LargeButton.types";

export const backgroundColor: Record<LargeButtonProps['buttonType'], string> = {
    primary: colors.yellow400,
    secondary: colors.gray100,
    outline: colors.white,
    ghost: colors.transparent,
}

export const Align: Record<LargeButtonProps['iconPosition'], string> = {
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
    background-color:${(props) => (props.isDisabled && !props.buttonType.includes('outline')) ? colors.gray300 : backgroundColor[props.buttonType] };
    border:${(props) => !props.buttonType.includes('outline') ? colors.transparent : '2px solid '+(props.isDisabled ? colors.gray500 : colors.black)};
    justify-content: ${props => Align[props.iconPosition]};
    align-items: ${props => Align[props.iconPosition]};
    padding: 20px 16px;
    border-radius: 8px;
    align-items: center;
    cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
`

export const Hidden =styled.div`
    width: 24px;
    height: 24px;
`

