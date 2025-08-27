
// import { useEffect, useState } from "react";
// import api from "@/components/api/axios-instance";
// import { Card, CardContent } from "@/components/ui/card";
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

// export default function AdminDashboard() {
//   const [properties, setProperties] = useState([]);
//   const [tasks, setTasks] = useState([]);
//   const [reports, setReports] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const [propsRes, tasksRes, reportsRes] = await Promise.all([
//           api.get("/api/properties"),
//         api.get("/api/tasks"),
//           api.get("/api/reports"),
//         ]);

//         const [propsData, tasksData, reportsData] = await Promise.all([
//           propsRes.data,
//           tasksRes.data,
//           reportsRes.data,
//         ]);

//         setProperties(propsData);
//         setTasks(tasksData);
//         setReports(reportsData);
//       } catch (error) {
//         console.error("Error loading dashboard data:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   if (loading) return <p className="text-center mt-8">Loading dashboard...</p>;

//   // === Stats ===
//   const totalProperties = properties.length;
//   const workingProperties = properties.filter(p => p.state === "working").length;
//   const workingPercentage = totalProperties > 0 ? Math.round((workingProperties / totalProperties) * 100) : 0;

//   const openReports = reports.filter(r => r.status === "pending").length;
//   const tasksInProgress = tasks.filter(t => t.status === "in_progress").length;

//   // === Pie Data (state distribution) ===
//   const stateData = Object.entries(
//     properties.reduce((acc, p) => {
//       acc[p.state] = (acc[p.state] || 0) + 1;
//       return acc;
//     }, {})
//   ).map(([name, value]) => ({ name, value }));

//   // === Line Chart Data (reports per day) ===
//   const dailyReports = Object.entries(
//     reports.reduce((acc, r) => {
//       const date = new Date(r.createdAt).toLocaleDateString();
//       acc[date] = (acc[date] || 0) + 1;
//       return acc;
//     }, {})
//   ).map(([date, count]) => ({ date, count }));

//   return (
//     <div className="p-6 space-y-6">
//       {/* Top Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <Card className="p-4 shadow rounded-2xl">
//           <CardContent>
//             <h3 className="text-lg font-semibold">Total Properties</h3>
//             <p className="text-3xl font-bold">{totalProperties}</p>
//           </CardContent>
//         </Card>

//         <Card className="p-4 shadow rounded-2xl">
//           <CardContent>
//             <h3 className="text-lg font-semibold">Working Properties</h3>
//             <p className="text-3xl font-bold">{workingPercentage}%</p>
//           </CardContent>
//         </Card>

//         <Card className="p-4 shadow rounded-2xl">
//           <CardContent>
//             <h3 className="text-lg font-semibold">Open Reports</h3>
//             <p className="text-3xl font-bold">{openReports}</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Pie Chart */}
//         <Card className="p-4 shadow rounded-2xl">
//           <CardContent>
//             <h3 className="text-lg font-semibold mb-4">Properties by State</h3>
//             <ResponsiveContainer width="100%" height={250}>
//               <PieChart>
//                 <Pie data={stateData} dataKey="value" nameKey="name" outerRadius={80} fill="#8884d8" label>
//                   {stateData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={["#8884d8", "#82ca9d", "#ffc658"][index % 3]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>

//         {/* Line Chart */}
//         <Card className="p-4 shadow rounded-2xl">
//           <CardContent>
//             <h3 className="text-lg font-semibold mb-4">Reports Over Time</h3>
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart data={dailyReports}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import api from "@/components/api/axios-instance";

const AdminDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [users, setUsers] = useState([]);
  const [reports, setReports] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [propRes, userRes, reportRes, taskRes] = await Promise.all([
          api.get("api/properties"),
          api.get("api/users"),
          api.get("api/reports"),
          api.get("api/tasks"),
        ]);
        setProperties(propRes.data);
        setUsers(userRes.data);
        setReports(reportRes.data);
        setTasks(taskRes.data);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };
    fetchData();
  }, []);

  // Stats
  const activeProperties = properties.filter(p => p.status === "active").length;
  const inactiveProperties = properties.filter(p => p.status !== "active").length;
  const Users = users.length;
  const resolvedReports = reports.filter(r => r.status === "resolved").length;
  const pendingReports = reports.filter(r => r.status === "pending").length;

  // Reports by day (for LineChart)
  const dailyReports = reports.map(r => ({
    date: new Date(r.createdAt).toISOString().split("T")[0], // YYYY-MM-DD
    count: 1,
  }));

  // Property distribution by state (for PieChart)
  const stateData = Object.values(
    properties.reduce((acc, prop) => {
      acc[prop.state] = acc[prop.state] || { name: prop.state, value: 0 };
      acc[prop.state].value += 1;
      return acc;
    }, {})
  );

  const COLORS = [
    "#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00c49f",
    "#ff69b4", "#8dd1e1", "#d0ed57", "#a4de6c", "#ffbb28"
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Stats Cards */}
      <Card className="shadow-lg rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold">Properties</h2>
          <p className="text-2xl font-bold">{properties.length}</p>
          <p className="text-sm text-green-600">Active: {activeProperties}</p>
          <p className="text-sm text-red-600">Inactive: {inactiveProperties}</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold">Users</h2>
          <p className="text-2xl font-bold">{users.length}</p>
          <p className="text-sm text-green-600">Active: {Users}</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold">Reports</h2>
          <p className="text-2xl font-bold">{reports.length}</p>
          <p className="text-sm text-green-600">Resolved: {resolvedReports}</p>
          <p className="text-sm text-yellow-600">Pending: {pendingReports}</p>
        </CardContent>
      </Card>

      {/* Reports over Time */}
      <Card className="shadow-lg rounded-2xl col-span-1 md:col-span-2">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Reports Over Time</h2>
          {dailyReports.length === 0 ? (
            <p className="text-gray-500">No reports yet</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailyReports}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

      {/* Properties by State */}
      <Card className="shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Properties by State</h2>
          {stateData.length === 0 ? (
            <p className="text-gray-500">No property data</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stateData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                  fill="#8884d8"
                >
                  {stateData.map((entry, index) => (
                    <Cell
                      key={`cell-${entry.name}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
