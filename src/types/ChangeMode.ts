
export type TChangeMode = {
    ChangeModeFunction?:any
    ChangeFunctionAttr:string
};

export type TModeIcon = {
    onClickFunction: () => void;
    src?: string;
    modeText: string;
    isImage?: boolean;
    icon?: JSX.Element;
}