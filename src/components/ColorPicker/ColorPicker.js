import React from 'react';
import "./ColorPicker.css";

// Инлайн CSS**
/*const styles = {
    option: {
        display: 'inline-block',
        width: 40,
        height: 40,
        outline: '1px solid red',
        margin: 4,
    }
const ColorPicker = ({options}) => {
    
    return (
        <div>
            <h2>Color Picker</h2>
        <div>
                {options.map(({label, color}) => (
                    <span key={label}
                        className="ColorPicker-title-option"
                        style={{
                            ...styles.option,
                            backgroundColor: color,
                        }}>                           
                    </span>))}
                </div>
        </div>
    )
}*/
const ColorPicker = ({ options }) => {
    
    return (
        <div className="ColorPicker">
            <h2 className="ColorPicker-title">Color Picker</h2>
            <div>
                {options.map(({ label, color }) => (
                    <span key={label}
                        className="ColorPicker-title-option"
                        style={{ backgroundColor: color }}>
                    </span>))}
            </div>
        </div>
    );
};
export default ColorPicker;