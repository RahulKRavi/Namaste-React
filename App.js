import React from 'react';
import ReactDom from 'react-dom/client'

const heading1 = React.createElement(
    "h1",
    {},
    "Heading 1"
);

const heading2 = <h2>Heading 2</h2>

const DivComponent = () => {
    return (
        <div>{heading1},{heading2}</div>
    )
}

const root = ReactDom.createRoot(document.getElementById('main'));
root.render(<DivComponent/>)