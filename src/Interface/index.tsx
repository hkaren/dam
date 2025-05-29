import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';

export type DrawerParamList = {
  Home: { randomKey: number };
  Messages: { randomKey: number };
  GenerateToken: { randomKey: number };
  Settings: { randomKey: number };
  About: { randomKey: number };
  Logout: { randomKey: number };
};


export type DrawerNavigationProps = DrawerNavigationProp<DrawerParamList>;

export interface MainTabScreenHeaderProps {
    //onMoreIconClickHandler?: (e: any) => void
   // onMoreIconClickHandler(...args: any[]): any,
    showHumburgerIcon?: boolean | false,
    type?: 'page',
    navigation: DrawerNavigationProps,
    chosenProfileAccountId?: string,
    title?: string
}
export interface MainTabActivityScreenProps {
    navigation: DrawerNavigationProps,
    route: RouteProp<DrawerParamList, keyof DrawerParamList>,
}
export interface LoginFormProps {
    
}

export interface FormData {
    [key: string]: any;
}

export interface MenuItem {
    icon?: any;
    id: string;
    navigateTo: string;
    title: string;
    name?: string;
}
export interface SvgProps {
    name: string,
    isFocused?: boolean,
    onClickHandler?: (e: any) => void,
    cssClass?: React.CSSProperties[],
    color?: string,
    width?: string,
    height?: string
}

export interface InputOutlinedProps {
    label: string,
    value?: any,
    outlineStyleCustom?: Object,
    placeholderStyle?: Object,
    outlineStyle?: React.CSSProperties[],
    fieldCss?: React.CSSProperties[],
    onChange: (e: any) => void,
    keyboardType?: any,
    secureTextEntry?: boolean,
    multiline?: boolean,
    editable?: number,
    textArea?: boolean,
    onClickCallback?: () => void,
    fieldInfo?: any,
}

export interface SelectComponentProps {
    containerStyle?: {[key: string]: string | number}[],
    pickerBtnContStyle?: {[key: string]: string | number},
    pickerStyle?: {[key: string]: string | number},
    selectedTextStyle?: {[key: string]: string | number},
    arrowImgStyle?: {[key: string]: string | number},
    placeholderStyle?: {[key: string]: string | number},
    data: any,
    title: string
    outlineStyleCustom?: object
    type?: string
    keyItem?: string
    defaultValue?: string | number,
    idItem?: string | number,
    onSelected: (e: any) => void
}

export interface NoDataFoundPageProps {
    reInitHandler(...args: any[]): any,
    state?: boolean | false
    hideButton?: boolean,
    containerStyle?: Object,
}