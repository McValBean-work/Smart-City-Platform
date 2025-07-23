import { useState , useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from '../api/axios-instance';
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export function UserSearchBar(){

  const [searchedUser, setSearchedUser] = useState();
   const [searchResults, setSearchResults] = useState();
  

  function GetSearchedUser(){

          console.log(searchedUser);
          setSearchResults(allUsers.filter(user => user.fullName.toLowerCase().includes(searchedUser.toLowerCase())));
        }

        console.log(searchResults);

  return(
    <>
     <div className=''>
          <button onClick={GetSearchedUser} className=''>
            <FontAwesomeIcon icon ={faMagnifyingGlass} className ='' />
          </button>
          <input type="text"
          placeholder="Enter user name here"
          value={searchedUser}
          onChange={ (e) =>
            {setSearchedUser(e.target.value); {GetSearchedUser} }
          } />
          <button className='' onClick={() => {setSearchedUser(''); setSearchResults('')}}>X</button>
        </div>
        {Array.isArray(searchResults) && (
          <div className="">
             { searchResults.map(result => (
             <span>
             <a href={`#${result._id}`}>{result.fullName}</a>

             
            </span>

            ))}
          </div>
        )}
    </>
  )
}

  function UserTable(){
        const [allUsers , setAllUsers] = useState([]);
        const [filteredUsers ,setFilteredUsers] = useState([]);
        const location = useLocation();
        const onDashboard = location.pathname === "/portal/dashboard"; // or whatever your dashboard path is
        const usersToDisplay = onDashboard ? allUsers.slice(-5) : filteredUsers;
        const [activeUserId , setActiveUserId] = useState(null);
        const [userToDelete, setUserToDelete] = useState(null);
        const [showPopUpId, setShowPopUpId] = useState(null);
        const [showDeletePrompt, setShowDeletePrompt] = useState(null);
        const [showMoreInfoUser, setShowMoreInfoUser] = useState(null);
        const [filterText, setFilterText] = useState('');
        
        
       console.log(filteredUsers)
        
        const [userDeleteEmail, setUserDeleteEmail] = useState({
            email:null
        });
        

        async function getUsers() {
                const response = await api.get("api/users");
                setAllUsers(response.data.accounts);
                setFilteredUsers(response.data.accounts);

                console.log("this is all users set use state", allUsers);
            }
                useEffect(()=>{
                    getUsers();
                    console.log("useEffect get users called");
                    },[]);
                    
  useEffect(() => {
  if (filterText && ['admin', 'supervisor', 'engineer'].includes(filterText)) {
    setFilteredUsers(allUsers.filter(user => user.role === filterText));
  } else {
    setFilteredUsers(allUsers);
  }
}, [filterText, allUsers]);





        function HandleUserOnClick(userEmail, userId){
            console.log(userId);
            console.log(userEmail);

            setUserDeleteEmail(
                { email: userEmail}
            );
            setActiveUserId(userId);
            setShowPopUpId(prev => (prev === userId ? null : userId));
        }

        async function HandleDeleteUser(){
            console.log(userDeleteEmail);
            console.log('active user id is', activeUserId)
            try{
                const res = await api.delete('api/users',  {data: userDeleteEmail});
                console.log(res.data);
                toast.success(res.data.message || 'Deleted Successfully');
            }
            catch(error){
                console.log(error);
                toast.error(error?.response.data.message);
            }
            finally{
                await getUsers();
                setActiveUserId(null);
                setShowDeletePrompt(false);
            }
        }

    function HandleMoreInfoOnClick(user){
        console.log(user);
        setShowMoreInfoUser(user);
    }

    return(
        <>
       
        <div className="">

        <h1>{onDashboard ? `Latest Users`
        : (
        <>
        <select name='filterText'
        value={filterText}
        onChange={(e)=> setFilterText(e.target.value)}
        className="">
          <option value="all_users">All Users</option>
          <option value="admin">Admins</option>
          <option value="supervisor">Supervisors</option>
          <option value="engineer">Engineers</option>
        </select>
        </>)}</h1>
        <table>
            <tr>
                <th>Role</th>
                <th>FullName</th>
                <th>Email Address</th>
            </tr>
             {Array.isArray(usersToDisplay) &&
       usersToDisplay.map((user)=>(
        <tr key={user._id} id={user._id}>
            <td>{user.role}</td>
            <td>{user.fullName}</td>
            <td>
                <span>
                    {user.email}
                <button
                className=''
                onClick={() =>HandleUserOnClick(user.email , user._id)}>:</button>
                {showPopUpId === user._id && (
                                    <div className=''>
                                      <button
                                        className="delete"
                                        onClick={() => {
                                          setShowDeletePrompt(true);
                                          setShowPopUpId(null);
                                          setUserToDelete(user.fullName);
                                          setActiveUserId(user._id);
                                        }}>
                                        delete user
                                      </button>
                                      <button onClick={()=> HandleMoreInfoOnClick(user)}>
                                        More Info
                                      </button>
                                    </div>
                                  )}
                </span>
            </td>
        </tr>
        ))
       }
        </table>
        {allUsers.length > 5 && onDashboard && (
        
          
        <>
        <Link to='/portal/user-management' className=""> View more <FontAwesomeIcon icon={faArrowRight} /></Link>
        </>
      
          
          )}
          {!onDashboard && (
          <>
          {filteredUsers.length} out of {allUsers.length}
          </>
        )}
        
        </div>
        {showDeletePrompt && (
        <div className='form-overlay'>
           <div className="">

              <button onClick={()=> setShowDeletePrompt(false)}
                className=''>X</button>
            <div>
              <span>Are you sure you want to delete {userToDelete}'s account?</span>
          <button
            onClick={HandleDeleteUser}
            className=""
          >
            Confirm Delete
          </button>

            </div>

        </div>
        </div>

      )}
    {showMoreInfoUser && (
        <div className=''>
           <div className="">
            <button onClick={()=> setShowMoreInfoUser(null)}
              className=''>X</button>
            
            <ul style={{ listStyle: 'none', paddingLeft: '10px' }}>
          <li><span className=''>Full Name:</span>  {showMoreInfoUser.fullName}</li>
          <li><span className=''>Email address:</span> {showMoreInfoUser.email}</li>
          <li><span className=''>Phone number:</span> {showMoreInfoUser.phoneNumber}</li>
          <li><span className=''>Role:</span> {showMoreInfoUser.role}</li>
          <li><span className=''>Date joined:</span> {showMoreInfoUser.createdAt.split("T")[0]}</li>
        </ul>

            
        </div>
        </div>

      )}
      
      
      
        </>
    )

}

export default UserTable;