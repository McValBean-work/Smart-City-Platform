import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import api from "@/components/api/axios-instance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCheckSquare, faFile } from "@fortawesome/free-regular-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

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
        setUsers(userRes.data.accounts);
        setReports(reportRes.data.reports);
        setTasks(taskRes.data);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };
    fetchData();
  }, []);

  // Stats
  const activeProperties = properties.filter(p => p.state === "working").length;
  const CurrentUser = JSON.parse(localStorage.getItem("userData") || "{}");
  const role = CurrentUser?.role;
  const Users = users.length;
  const resolvedTasks = tasks.filter(t => t.status === "resolved").length;
  const pendingTasks = tasks.filter(t => t.status === "pending").length;
  const pendingReports = reports.filter(r => r.status === "pending").length;


  // Reports by day (for LineChart)
  const dailyReports = reports.map(r => ({
    date: new Date(r.submittedAt).toISOString().split("T")[0], // YYYY-MM-DD
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
    <div className="min-h-screen bg-gray-50 w-full">
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">
            Welcome back, {CurrentUser?.fullName}. Here's what's happening in your city.
          </p>
        </div>
        <span variant="success" className="text-sm bg-primary/20 px-2 py-2 rounded text-primary font-medium">
          {role?.charAt(0).toUpperCase() + role?.slice(1)} View
        </span>
      </div>
      </div>
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {/* Stats Cards */}
      <Card className="shadow-lg rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-700">Total Properties</CardTitle>
                <FontAwesomeIcon icon={faBuilding} className="h-4 w-4 text-blue-600" />
              </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-blue-900">{properties.length}</p>
          <p className="text-xs text-blue-600 pb-4">City infrastructure items</p>
          {/* <p className="text-sm text-green-600">Active: {activeProperties}</p>
          <p className="text-sm text-red-600">Inactive: {inactiveProperties}</p> */}
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-green-700">Working Status</CardTitle>
                <FontAwesomeIcon icon={faChartLine} className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-900">{Math.round((activeProperties/properties.length)*100)}%</div>
                <p className="text-xs text-green-600">Properties functioning</p>
              </CardContent>
            </Card>
      <Card className="shadow-lg rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-orange-700">Open Reports</CardTitle>
                <FontAwesomeIcon icon={faFile} className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-900">{reports.length}</div>
                <p className="text-xs text-orange-600">Pending resolution</p>
              </CardContent>
            </Card>

     
            <Card className="shadow-lg rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-purple-700">Tasks in Progress</CardTitle>
                <FontAwesomeIcon icon={faCheckSquare} className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-900">{tasks.length}</div>
                <p className="text-xs text-purple-600">Active work items</p>
              </CardContent>
            </Card>

      <Card className="shadow-lg rounded-2xl col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Daily Reports (Last 30 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            {dailyReports.length === 0 ? (
            <p className="text-gray-500">No reports yet</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailyReports}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(value) => new Date(value).getDate().toString()}
                />
                <YAxis />
                <Tooltip 
                  labelFormatter={(value) => new Date(value).toLocaleDateString()}
                />
                <Line 
                  type="monotone" 
                  dataKey="count" 
                  stroke="#16a34a" 
                  strokeWidth={2}
                  dot={{ fill: '#16a34a' }}
                />
              </LineChart>
            </ResponsiveContainer>)}
          </CardContent>
        </Card>

      {/* Task over Time */}
      <Card className="shadow-lg rounded-2xl col-span-1 md:col-span-2">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Tasks Over Time</h2>
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

       <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Faults by Property Type</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={reports.propertyType} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="type" width={100} />
                <Tooltip />
                <Bar dataKey="count" fill="#16a34a" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
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
    </div>
  );
 
};

export default AdminDashboard;
