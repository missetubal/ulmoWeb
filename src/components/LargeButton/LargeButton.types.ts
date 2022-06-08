import { ButtonPosition, ButtonType } from "../../types/button.types";

export interface LargeButtonProps{
    title: string,
    buttonType: ButtonType,
    isDisabled: boolean,
    icon?: Element, 
    iconPosition: ButtonPosition,
}