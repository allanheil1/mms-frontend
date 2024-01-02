import React from "react";
import Button, { ButtonPropsColorOverrides } from "@mui/material/Button";
import styled from 'styled-components';

type ButtonColorType = keyof ButtonPropsColorOverrides | "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
interface ActionButtonProps {
    variant: 'contained' | 'outlined' | 'text';
    onClick: () => void;
    text: string;
    buttonColor: ButtonColorType,
    textColor: string;
    disabled: boolean;
    icon?: React.ComponentType;
}

function ActionButton({ variant, onClick, text, buttonColor, textColor, disabled, icon: IconComponent }: ActionButtonProps): JSX.Element {
    return (
        <Button
            variant={variant}
            onClick={onClick}
            color={buttonColor}
            disabled={disabled}
            sx={{ height: "40px", color: textColor }}>
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
