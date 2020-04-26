'use strict';

// Visibility Toggle App
var visibility = false;
var toggle = function toggle() {
    visibility = !visibility;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Show Details'
        ),
        React.createElement(
            'button',
            { onClick: toggle },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'p',
            null,
            'Here are some Details'
        )
    );
    ReactDOM.render(template, appRoot);
};
render();
