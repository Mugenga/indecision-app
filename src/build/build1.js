// Visibility Toggle App
let visibility = false;
const toggle = () => {
    visibility = !visibility
    render();
}


const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
        <h1>Show Details</h1>
        <button onClick={toggle}>
            {visibility?'Hide Details':'Show Details'}
        </button>
        {visibility && (
            <p>Here are some Details</p>
        )}
        </div>
    );
    ReactDOM.render(template, appRoot)
}
render();


