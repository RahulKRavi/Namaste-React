import React from 'react';
import ReactDom from 'react-dom/client'

const heading1 = React.createElement(
    "h1",
    {},
    "Heading 1"
);

const heading2 = React.createElement(
    "h2",
    {},
    "Heading 2"
);

const div = React.createElement(
    "div",
    {
        id: "container"
    },
    [heading1,heading2]
);

const root = ReactDom.createRoot(document.getElementById('main'));
root.render(div)