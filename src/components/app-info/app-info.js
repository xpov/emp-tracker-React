import "./app-info.css";

const AppInfo = ({increased, employees}) => {
    

    return (
        <div className="app-info">
            <h1>Employee Management at Company Lotus</h1>
            <h2>Total Number of Employees: {employees}</h2>
            <h2>Employees Eligible for a Bonus: {increased}</h2>
        </div>
    )
}

export default AppInfo;