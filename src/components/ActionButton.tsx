import React from "react";
import Button from "@mui/material/Button";
import styled from 'styled-components';

interface ActionButtonProps {
    onClick: () => void;
    text: string;
    buttonColor: any;
    textColor: string;
    disabled: boolean;
    icon?: React.ComponentType;
}

function ActionButton({ onClick, text, buttonColor, textColor, disabled, icon: IconComponent }: ActionButtonProps): JSX.Element {
    return (
        <Button
            variant="contained"
            onClick={onClick}
            color= {buttonColor}
            disabled={disabled}
            sx={{ height: "40px", color: textColor}}>
            <ButtonContent>
                {IconComponent && <IconComponent />}
                {text}
            </ButtonContent>
        </Button>
    );
}


const ButtonContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    margin-right: 5%
`;

export default ActionButton;
