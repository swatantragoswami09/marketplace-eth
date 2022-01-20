import { useEffect, useState } from "react";
import { useEthPrice } from "@components/hooks/useEthPrice";

const useCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }, []);
  return count;
};
const SimpleComponent = () => {
  const { eth } = useEthPrice();
  return <h1>Simpe Component - {eth.data}</h1>;
};

export default function HooksPage() {
  const { eth } = useEthPrice();
  return (
    <>
      <h1>Hello world - {eth.data}</h1>
      <SimpleComponent />
    </>
  );
}
