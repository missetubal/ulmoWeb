import React from "react";
import Bag from "../../assets/icons/bag";
import { LargeButtonProps } from "./LargeButton.types";
import { Body1Medium } from "../../styles/typography";
import { Button } from "./LargeButton.style";

const LargeButton: React.FC<LargeButtonProps> = (props) => {
    const { isDisabled, buttonType, title } = props;

    return (
        <Button type='button' buttonType={buttonType} iconPosition={'none'} title={title} isDisabled={isDisabled}>
            <Body1Medium>{title}</Body1Medium>
            <Bag />
        </Button>
    )

}

export default LargeButton;