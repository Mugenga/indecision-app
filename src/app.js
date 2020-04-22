console.log("App is running")

// JSX - Javascript XML

var app = {
    title:'Indecision App',
    subtitle:'Indecision App',
    options: ['One', 'Two']
}

var template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'no options'} </p>
    <ol>
        <li>List one</li>
    </ol>
</div> 
);
var user = {
    name:'Andrew',
    age:22,
    location:'Rwanda'
};

function getLocation(location) {
    if (location) {
        return <p>Location:{location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1> {user.name ? user.name : 'Anonymous'} </h1>
        { (user.age && user.age > 19) && <p>Age: {user.age}</p> }
        {
            getLocation(user.location)
        }
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);