import React from "react";

export default function CalculatorOpen({ toggleCalculator }) {
    return(
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 16 16" className="calculator-open" onClick={toggleCalculator}>
            <path d="M12.997,0H3.003C2.449,0,2,0.444,2,1.001v13.998C2,15.552,2.456,16,3.003,16h9.994
                C13.551,16,14,15.556,14,14.999V1.001C14,0.448,13.544,0,12.997,0z M6,14H4v-2h2V14z M6,11H4V9h2V11z M6,8H4V6h2V8z M9,14H7v-2h2
                V14z M9,11H7V9h2V11z M9,8H7V6h2V8z M12,14h-2v-2h2V14z M12,11h-2V9h2V11z M12,8h-2V6h2V8z M13,4H3V1h10V4z"/>
        </svg>     
    );
}