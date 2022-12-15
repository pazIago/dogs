import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return { x: item.title, y: Number(item.acessos) };
    });
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
    );
    setGraph(graphData);
  }, [data]);

  return (
    <motion.section
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="  mb-8 grid grid-cols-2 gap-8 max-sm:grid-cols-1"
    >
      <div className={`${statsItemStyle} col-span-full p-8 text-2xl`}>
        <p className="font-secondary">Acessos: {total}</p>
      </div>
      <div className={`${statsItemStyle}`}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, botton: 20, left: 80, right: 80 }}
          style={{
            data: { fillOpacity: 0.9, stroke: "#fff", strokeWidth: 2 },
            labels: { fontSize: 14, fill: "#333" },
          }}
        />
      </div>
      <div className={`${statsItemStyle}`}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </div>
    </motion.section>
  );
};

const statsItemStyle = "flex items-center justify-center rounded shadow-lg";

export default UserGraphs;
