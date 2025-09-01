import SideBar from "../layout/sidebar";
import TopSection from "../dashboard/top-section";
import Main from "../layout/main";
import TaskTable from './task-table';


function TasksPage(){
    return(
        <>
            <div className="flex min-h-screen min-w-full">
                <SideBar />
                <div className='flex flex-col w-full'>
                    <TopSection />
                    <Main className='flex flex-1 min-w-full bg-gray-50'>
                        <TaskTable />
                    </Main>
                </div>
            </div>
        </>
    )
}

export default TasksPage;