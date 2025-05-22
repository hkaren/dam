import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';

export type DrawerParamList = {
  Home: undefined;
  Settings: undefined;
  About: undefined;
  Logout: undefined;
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