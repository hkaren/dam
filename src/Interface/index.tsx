export interface MainTabScreenHeaderProps {
    //onMoreIconClickHandler?: (e: any) => void
   // onMoreIconClickHandler(...args: any[]): any,
    showHumburgerIcon?: boolean | false,
    type?: 'page',
    navigation?: any,
    chosenProfileAccountId?: string
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