import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { TChangeMode, TModeIcon } from "../../types/ChangeMode";


export const ChangeModeHelper = ({  ChangeModeFunction, ChangeFunctionAttr }:TChangeMode) => {
    const handleClick = useCallback(() => {
        ChangeModeFunction(ChangeFunctionAttr);
    }, [ChangeModeFunction, ChangeFunctionAttr]);
    
    return handleClick;
};

export const ChangeModeComp = ({onClickFunction, src, modeText,icon, isImage = true}:TModeIcon) =>{
    const { t } = useTranslation();
    const ModeContainer = memo(() => (
        <div className="MenuChange" onClick={onClickFunction}>
            {isImage
            ? <img className="mode_image" alt='ModeImage' src={src} width={20} height={20} />
            : icon
            }
            {t(modeText)}
        </div>
      ));
      return <ModeContainer />;
}
