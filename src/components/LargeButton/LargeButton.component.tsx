import React from "react";
import Bag from "../../assets/icons/bag";
import { LargeButtonProps } from "./LargeButton.types";
import { Body1base } from "../../styles/typography";
import { Button, Hidden } from "./LargeButton.style";
import { colors } from "../../styles";

const LargeButton: React.FC<LargeButtonProps> = (props) => {
    const { isDisabled, buttonType, title, icon, iconPosition } = props;
    const colorDisabled =  isDisabled ? colors.gray500 : colors.black
    const contentIcon = (icon ? icon : <Bag color={colorDisabled}/>)

    
    const contentNone = (<Body1base>{title}</Body1base>);

    const contentRight = (
      <>
        <Hidden />
        <Body1base color={colorDisabled}>
          {title}
        </Body1base>
       {contentIcon}
      </>
    );
  
    const contentLeft = (
      <>
        {contentIcon}
        <Body1base color={colorDisabled}>
          {title}
        </Body1base>
        <Hidden />
      </>
    );
    const contentCenterRight = (
        <>
          <Body1base marginRight={8} color={colorDisabled}>
            {title}
          </Body1base>
         {contentIcon}
        </>
      );
    
      const contentCenterleft = (
        <>
          {contentIcon}
          <Body1base marginLeft={8} color={colorDisabled}>
            {title}
          </Body1base>
        </>
      );

    return (
        <Button type='button' buttonType={buttonType} iconPosition={iconPosition} title={title} isDisabled={isDisabled}>

            {iconPosition === 'none' && contentNone}
            {iconPosition === 'right' && contentRight}
            {iconPosition === 'left' && contentLeft}
            {iconPosition === 'center-right' && contentCenterRight}
            {iconPosition === 'center-left' && contentCenterleft}
        </Button>
    )

}

export default LargeButton;