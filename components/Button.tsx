import React from 'react';
import { Button, ButtonProps } from 'antd';

type CustomButtonProps = ButtonProps & {
    label: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ label, ...props }) => {
    return <Button {...props}>{label}</Button>;
};

export default CustomButton;
