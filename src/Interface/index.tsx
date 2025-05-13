export interface MainTabScreenHeaderProps {
    //onMoreIconClickHandler?: (e: any) => void
   // onMoreIconClickHandler(...args: any[]): any,
    showHumburgerIcon?: boolean | false,
    type?: 'page',
    navigation?: any,
    chosenProfileAccountId?: string,
    openDrawerModalCallback?: () => void,
    title?: string
}
export interface MainTabActivityScreenProps {
    navigation: any,
    route: any,
}
export interface LoginFormProps {
    
}

export interface FormData {
    [key: string]: any;
}

export interface MenuItem {
    icon?: any;
    id: number;
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