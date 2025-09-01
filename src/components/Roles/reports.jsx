import SideBar from "../layout/sidebar";
import TopSection from "../dashboard/top-section";
import Main from "../layout/main";
import ReportsTable from './reports-table';



function ReportsPage() {
  return (
    <div className="flex min-h-screen min-w-full">
      <SideBar />
      <div className='flex flex-col w-full'>
        <TopSection />
        <Main className='flex flex-1 min-w-full bg-gray-50'>
          <ReportsTable />
        </Main>
      </div>
    </div>
  );
}

export default ReportsPage;
