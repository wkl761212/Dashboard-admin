import React from 'react';
import { Button } from 'flowbite-react';
import { FaPlus, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";

// Define a mapping for button types to icons for flexibility
const iconMapping = {
  new: FaPlus,
  modify: FaPencilAlt,
  delete: FaRegTrashAlt,
};

function GroupButton({ buttons, color = "gray", gradient }) {
    return (
        <Button.Group outline>
            {buttons.map((button) => {
                const Icon = iconMapping[button.type]; // Get the icon based on button type
                return (
                    <Button key={button.type} color={color} gradientMonochrome={gradient}>
                        {Icon && <Icon className="mr-3 h-4 w-4" />}
                        {button.label}
                    </Button>
                );
            })}
        </Button.Group>
    );
}

export default GroupButton;
