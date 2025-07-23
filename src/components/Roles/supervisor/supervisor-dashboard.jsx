import PropertyTable from "../property-table";
import TaskTable from "../task-table";
import ReportsTable from "../reports-table";

function SupervisorDashboard(){
    return(
        <>
        <div className="">
            <PropertyTable />
            <TaskTable />
            <ReportsTable />
        </div>
        </>
    )

}




export default SupervisorDashboard;