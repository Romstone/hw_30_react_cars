const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {printGarage: false};
    }

    garageAdd = (e) => {
        e.preventDefault();
        let newCar = {};
        if (e.target.model.value.trim() === '' || e.target.manufacture.value.trim() === '' || e.target.year.value === '' || e.target.serialNum.value === '') {
            alert('Empty line!');
            return;
        }
        else {
            newCar = {
                model: e.target.model.value,
                manufacture: e.target.manufacture.value,
                year: e.target.year.value,
                serialNum: e.target.serialNum.value
            }
        }
        cars.push(newCar);
        this.setState({printGarage: true});
    }
    garagePrint = () => {
        return cars.map(item => (
            <div className={'card'} key={item.serialNum}>
                <h2>{item.model}</h2>
                <h3>{item.manufacture}</h3>
                <h3>{item.year}</h3>
                <h4>{item.serialNum}</h4>
            </div>
        ));
    }
    handlerPrintGarage = () => {
        this.setState({printGarage: !this.state.printGarage});
    }
    render() {
        if (this.state.printGarage)
            return (
                <div>
                    <button className={'btn btn-success'} onClick={this.handlerPrintGarage}>Add new Car</button>
                    <div className={'wrapper'}>
                        {this.garagePrint()}
                    </div>
                </div>

            );
        else
            return (
                <div>
                    <button className={'btn btn-success'} onClick={this.handlerPrintGarage}>Show Garage</button>
                    <form action="" className={'card'} onSubmit={this.garageAdd}>
                        <label htmlFor="model_input" className="form-label">Enter Model:</label>
                        <input type="text" className="form-control" id="model_input" name={"model"}/>

                        <label htmlFor="manufacture_input" className="form-label">Enter Manufacture:</label>
                        <input type="text" className="form-control" id="manufacture_input" name={"manufacture"}/>

                        <label htmlFor="year_input" className="form-label">Enter Year:</label>
                        <input type="number" className="form-control" id="year_input" name={"year"}/>

                        <label htmlFor="serialNum_input" className="form-label">Enter Serial Number:</label>
                        <input type="number" className="form-control" id="serialNum_input" name={"serialNum"}/>

                        <br/>
                        <button className={'btn btn-success'}>Add Car</button>
                    </form>
                </div>
            )
    }


}

root.render(<Car/>);