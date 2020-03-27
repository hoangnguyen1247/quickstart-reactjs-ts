import React, { ChangeEventHandler, KeyboardEventHandler } from "react";
import classNames from "classnames";
import { 
    Input,
    FormFeedback,
    FormGroup,
    FormText,
    Label,
} from "reactstrap";
import { InputType } from "reactstrap/lib/Input";

type Props = {
    type?: InputType,
    className?: string,
    inputClassName?: string,
    label?: string,
    placeholder?: string,
    id?: string,
    name?: string,
    value?: string | number,
    errorMessage?: string,
    helpText?: string,
    disabled?: boolean,
    innerRef?: any,
    rightIcon?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    onKeyPress?: KeyboardEventHandler,
    onRightIconClick?: Function,
};

const defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
    name: "",
    errorMessage: "",
    helpText: "",
    disabled: false,
};

export function InputFormGroup({
    type,
    innerRef,
    className,
    inputClassName,
    id,
    name,
    value, 
    label, 
    placeholder, 
    errorMessage, 
    helpText,
    rightIcon,
    disabled, 
    onRightIconClick,
    onChange, 
    onKeyPress,
    ...props
}: Props) {

    return (
        <FormGroup className={className}>
            {label && <Label for={id || "input_form_group_01"}>{label}</Label>}
            <div className={classNames("d-flex align-items-center", { "form-control-wrap is-invalid": !!errorMessage })}>
                <Input
                    type={type}
                    innerRef={innerRef}
                    className={inputClassName}
                    placeholder={placeholder}
                    name={name} 
                    value={value}
                    invalid={!!errorMessage}
                    disabled={disabled}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    {...props}
                />
                {!!rightIcon && !!onRightIconClick &&
                    <i 
                        className="mdi mdi-magnify mdi-24px pointer" 
                        style={{ marginLeft: "-32px" }} 
                        // onClick={onRightIconClick}
                    />
                }
            </div>
            {!!errorMessage &&
                <FormFeedback>{errorMessage}</FormFeedback>
            }
            {!!helpText &&
                <FormText>{helpText}</FormText>
            }
        </FormGroup>
    );
};

InputFormGroup.defaultProps = defaultProps;
