/* Visibility Toggle App */
// let visibility = false;
// const toggle = () => {
//     visibility = !visibility
//     render();
// }


// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//         <h1>Show Details</h1>
//         <button onClick={toggle}>
//             {visibility?'Hide Details':'Show Details'}
//         </button>
//         {visibility && (
//             <p>Here are some Details</p>
//         )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot)
// }
// render();

/* Visibility Toggle App with state components */

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            visibility: false
        }
    }
    toggle() {
        console.log(this.state.visibility);
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Show Details</h1>
                <button onClick={this.toggle}>{this.state.visibility?'Hide Detaile':'Show Details'}</button>
                {this.state.visibility && (
                    <p>Here are some Details</p>
                )}
            </div>
        );
    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

