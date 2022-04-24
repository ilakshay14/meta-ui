import React, { HTMLAttributes } from "react";
import StyledSelect from "./index.styles";

interface OptionType {
    id: string | number;
    name: string;
    value: string;
}

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
    options: [OptionType];
    name: string;
    id?: string;
    width: string;
    height: string;
    onChange: () => void;
    border?: string;
    borderRadius?: string;
    padding?: string;
    disabled?: boolean;
    isError?: boolean;
    color?: string;
    style?: object;
}

const SelectBox = (props: SelectProps) => {
    return (
        <StyledSelect {...props}>
            <option value=''>Select an option</option>
            {props.options.length ? (
                props.options.map((item) => (
                    <option value={item.value} key={item.id}>
                        {item.name}
                    </option>
                ))
            ) : (
                <option value=''>No Options provided</option>
            )}
        </StyledSelect>
    );
};

export default SelectBox;

SelectBox.defaultProps = {
    options: [
        {
            id: 1,
            name: "test 1",
            value: "test 1",
        },
        {
            id: 2,
            name: "test 2",
            value: "test 2",
        },
    ],
    name: "select-tag",
    width: "200px",
    height: "30px",
    border: "2px solid #b5b5b5",
    borderRadius: "3px",
    padding: "5px",
    disabled: false,
    onChange: () => {},
};
