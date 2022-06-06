export interface GeneralStyleProps {
    display?: string;
    flex?: number,
    alignItems?: string,
    justifyContent?: string,
    width?: number | string,
    height?: number | string,
    padding?: number,
    backgroundColor?: string,
    alignSelf?: string,
    textAlign?: string,
    fontFamily?: string,
    fontSize?: number,
    fontWeight?: number,
    color?: string,
    letterSpacing?: number,
    marginTop?: number | string,
    marginRight?: number | string,
    marginBottom?: number | string,
    marginLeft?: number | string,
    paddingTop?: number | string,
    paddingRight?: number | string,
    paddingBottom?: number | string,
    paddingLeft?: number | string,
    borderRadius?: number,
    bold?: boolean,
    borderLeftWidth?: string,
    borderLeftColor?: string,
    paddingVertical?: number | string,
    paddingHorizontal?: number | string,
    marginVertical?: number | string,
    marginHorizontal?: number | string,
    opacity?:number;
    opacityColor?:number;
    position?: string;
    flexDirection?:string;
    lineHeight?: number;
    minWidth?: string | number;
    maxWidth?: string | number;
    borderPosition?: 'top' | 'bottom' | undefined;
    borderTop?: boolean;
    top?: number;
    active?: boolean,
  }
  