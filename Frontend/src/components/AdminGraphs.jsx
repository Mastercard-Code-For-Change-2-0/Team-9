import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AdminGraphs = () => {
  // Example summary data
  const totalData = [
    { name: "Enrolled", value: 1200 },
    { name: "Placed", value: 850 },
    { name: "Active Beneficiaries", value: 670 },
  ];

  // Year-on-Year Growth Data (Placed split into Tier1, Tier2, Tier3)
  const yearlyData = [
    { year: 2021, Enrolled: 500, Tier1: 120, Tier2: 110, Tier3: 70, Active: 200 },
    { year: 2022, Enrolled: 800, Tier1: 200, Tier2: 180, Tier3: 120, Active: 400 },
    { year: 2023, Enrolled: 1000, Tier1: 280, Tier2: 260, Tier3: 160, Active: 550 },
    { year: 2024, Enrolled: 1200, Tier1: 350, Tier2: 300, Tier3: 200, Active: 670 },
    { year: 2025, Enrolled: 1400, Tier1: 420, Tier2: 360, Tier3: 220, Active: 800 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
      {/* Total Enrolled / Placed / Active Beneficiaries */}
      <div className="p-4 bg-white shadow rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">Totals</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={totalData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#845ec2" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Year-on-Year Growth */}
      <div className="p-4 bg-white shadow rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">Year-on-Year Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={yearlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />

            
            <Bar dataKey="Tier1" stackId="placed" fill="#f9f871" />
            <Bar dataKey="Tier2" stackId="placed" fill="#ffc75f" />
            <Bar dataKey="Tier3" stackId="placed" fill="#ff9671" />
            <Bar dataKey="Enrolled" fill="#ff6f91" />
            <Bar dataKey="Active" fill="#d65db1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminGraphs;
