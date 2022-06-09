import styled from "styled-components";
import { colors } from ".";
import { GeneralStyleProps } from "../types/general.types";

export const Heading0base = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-size: ${props => props.fontSize || 48}px;
    line-height: ${props => props.lineHeight || 72}px;
    font-weight: ${props => props.fontWeight || 400};    
`

export const Heading1base = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 400};
    font-size: ${props => props.fontSize || 32}px;
    line-height: ${props => props.lineHeight || 42}px;
`

export const Heading2base = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 400};
    font-size: ${props => props.fontSize || 24}px;
    line-height: ${props => props.lineHeight || 32}px;
`

export const Body0base = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 400};
    font-size: ${props => props.fontSize || 18}px;
    line-height: ${props => props.lineHeight || 27}px;
`

export const Body1base = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 400};
    font-size: ${props => props.fontSize || 16}px;
    line-height: ${props => props.lineHeight || 24}px;
`

export const Body2base = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 400};
    font-size: ${props => props.fontSize || 14}px;
    line-height: ${props => props.lineHeight || 21}px;
`

export const Body3base = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 400};
    font-size: ${props => props.fontSize || 12}px;
    line-height: ${props => props.lineHeight || 16}px;
`
