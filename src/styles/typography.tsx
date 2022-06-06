import styled from "styled-components";
import { colors } from ".";
import { GeneralStyleProps } from "../types/general.types";


export const Heading0SemiBold = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 600};
    font-size: ${props => props.fontSize || 48}px;
    line-height: ${props => props.lineHeight || 72}px;
`
export const Heading0Regular = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 400};
    font-size: ${props => props.fontSize || 48}px;
    line-height: ${props => props.lineHeight || 72}px;
`
export const Heading0Light = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 300};
    font-size: ${props => props.fontSize || 48}px;
    line-height: ${props => props.lineHeight || 72}px;
`
export const Heading1SemiBold = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 600};
    font-size: ${props => props.fontSize || 32}px;
    line-height: ${props => props.lineHeight || 42}px;
`
export const Heading1Regular = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 400};
    font-size: ${props => props.fontSize || 32}px;
    line-height: ${props => props.lineHeight || 42}px;
`
export const Heading1Light = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 300};
    font-size: ${props => props.fontSize || 32}px;
    line-height: ${props => props.lineHeight || 42}px;
`
export const Heading2SemiBold = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 600};
    font-size: ${props => props.fontSize || 24}px;
    line-height: ${props => props.lineHeight || 32}px;
`
export const Heading2Regular = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 400};
    font-size: ${props => props.fontSize || 24}px;
    line-height: ${props => props.lineHeight || 32}px;
`
export const Heading2Light = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 300};
    font-size: ${props => props.fontSize || 24}px;
    line-height: ${props => props.lineHeight || 32}px;
`
export const Body0Medium = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 500};
    font-size: ${props => props.fontSize || 18}px;
    line-height: ${props => props.lineHeight || 27}px;
`
export const Body0Regular = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 400};
    font-size: ${props => props.fontSize || 18}px;
    line-height: ${props => props.lineHeight || 27}px;
`
export const Body0Thin = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 300};
    font-size: ${props => props.fontSize || 18}px;
    line-height: ${props => props.lineHeight || 27}px;
`
export const Body1Medium = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 500};
    font-size: ${props => props.fontSize || 16}px;
    line-height: ${props => props.lineHeight || 24}px;
`
export const Body1Regular = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 400};
    font-size: ${props => props.fontSize || 16}px;
    line-height: ${props => props.lineHeight || 24}px;
`
export const Body1Thin = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 300};
    font-size: ${props => props.fontSize || 16}px;
    line-height: ${props => props.lineHeight || 24}px;
`
export const Body2Medium = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 500};
    font-size: ${props => props.fontSize || 14}px;
    line-height: ${props => props.lineHeight || 21}px;
`
export const Body2Regular = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 400};
    font-size: ${props => props.fontSize || 14}px;
    line-height: ${props => props.lineHeight || 21}px;
`
export const Body2Thin = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 300};
    font-size: ${props => props.fontSize || 14}px;
    line-height: ${props => props.lineHeight || 21}px;
`
export const Body3Medium = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 500};
    font-size: ${props => props.fontSize || 12}px;
    line-height: ${props => props.lineHeight || 16}px;
`
export const Body3Regular = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 400};
    font-size: ${props => props.fontSize || 12}px;
    line-height: ${props => props.lineHeight || 16}px;
`
export const Body3Thin = styled.p<GeneralStyleProps>`
    color: ${props => props.color || colors.black};
    font-weight: ${props => props.fontWeight || 300};
    font-size: ${props => props.fontSize || 12}px;
    line-height: ${props => props.lineHeight || 16}px;
`
