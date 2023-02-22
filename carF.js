const root = ReactDOM.createRoot(document.getElementById('root'));

const garagePrint = () => {
    return cars.map(item => (
        <div className={'card'} key={item.serialNum}>
            <h2>{item.model}</h2>
            <h3>{item.manufacture}</h3>
            <h3>{item.year}</h3>
            <h4>{item.serialNum}</h4>
        </div>
    ));
}

function App(props) {
    const isGaragePrinted = props.isGaragePrinted;
    if (isGaragePrinted)
        return (
            <div>
                <button className={'btn btn-success'} onClick={hideGarage}>Hide Garage</button>
                <div className={'wrapper'}>{garagePrint()}</div>
            </div>
        );
    else
        return (
            <div>
                <button className={'btn btn-success'} onClick={showGarage}>Show Garage</button>
            </div>
        );
}

const hideGarage = () => {root.render(<App isGaragePrinted={false}/>);}

const showGarage = () => {root.render(<App isGaragePrinted={true}/>);}

root.render(<App isGaragePrinted={false}/>);

