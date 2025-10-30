import SideBar from "../layout/sidebar";
import TopSection from "../dashboard/top-section";
import Main from "../layout/main";
import Settings from './settings';

function SettingsPage() {
  return (
    <div className="flex min-h-screen min-w-full">
      <SideBar />
      <div className='flex flex-col w-full'>
        <TopSection />
        <Main className='flex flex-1 min-w-full bg-gray-50'>
          <Settings />
        </Main>
      </div>
    </div>
  );
}




 

  export default SettingsPage;