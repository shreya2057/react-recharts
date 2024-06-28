import { Box, Flex } from "@chakra-ui/react";
import { LineCharts } from "./components/LineCharts";
import { PieChartWithGap } from "./components/PieChartWithGap";

const colors = [
  { start: "#72C8FF", end: "#1E85C7" },
  { start: "#FF9A56", end: "#E37125" },
  { start: "#79FFB8", end: "#38A169" },
];

function App() {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ];
  const lineData = [
    {
      name: "Page A",
      scholarshipRequest: 4000,
      admissionRequest: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      scholarshipRequest: 3000,
      admissionRequest: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      scholarshipRequest: 2000,
      admissionRequest: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      scholarshipRequest: 2780,
      admissionRequest: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      scholarshipRequest: 1890,
      admissionRequest: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      scholarshipRequest: 2390,
      admissionRequest: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      scholarshipRequest: 3490,
      admissionRequest: 4300,
      amt: 2100,
    },
  ];

  return (
    <Flex
      maxW={"100%"}
      flexDirection={"column"}
      h={"100dvh"}
      background={"#F2F6FA"}
      p={4}
    >
      <Flex
        display={"flex"}
        direction={{ base: "column", xl: "row" }}
        width={"100%"}
        gap={6}
      >
        <Box
          display={"flex"}
          flex={"70%"}
          justifyContent={"center"}
          background={"white"}
          borderRadius={"14px"}
          p={6}
        >
          <LineCharts
            data={lineData}
            colors={["#E37125", "#1E85C7"]}
            dataKey={["scholarshipRequest", "admissionRequest"]}
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          background={"white"}
          borderRadius={"14px"}
          flex={"30%"}
          p={{ base: 3, sm: 6 }}
        >
          <PieChartWithGap
            hasLegend
            data={data}
            colors={colors}
            innerRadius={80}
            outerRadius={120}
            minHeight={96}
            labelProps={{
              label: { title: "20", description: "Student Applied" },
              diameter: "130px",
              topPosition: { base: "23%", sm: "23%" },
            }}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default App;
