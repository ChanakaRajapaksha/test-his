import {
    RadialBarChart,
    RadialBar,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Total",
        count: 100,
        fill: "white",
    },
    {
        name: "Nurses",
        count: 45,
        fill: "#FAE27C",
    },
    {
        name: "Doctors",
        count: 55,
        fill: "#C3EBFA",
    },
];

const CountChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/* TITLE */}
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold">Medical Staff</h1>
            </div>
            {/* CHART */}
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={data}
                    >
                        <RadialBar
                            label={{ position: "insideStart", fill: "#fff" }}
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <img
                    src="/maleFemale.png"
                    alt="maleFemale"
                    width={50}
                    height={50}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>
            {/* BOTTOM */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="bg-[#C3EBFA] rounded-full w-5 h-5" />
                    <h1 className="font-bold">1,234</h1>
                    <h2 className="text-xs text-gray-300">Doctors (55%)</h2>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="bg-[#FAE27C] rounded-full w-5 h-5" />
                    <h1 className="font-bold">1,234</h1>
                    <h2 className="text-xs text-gray-300">Nurses (45%)</h2>
                </div>
            </div>
        </div>
    );
};

export default CountChart;
