import { useState, useEffect } from "react";
import useSWR from "swr";

const adminAddresses = {
  "0xa58ad7c8beabff54ec9301f9f49f064aa4bcbd1d73d389e34f5fd42de66679f0": true,
};
export const handler = (web3, provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => {
      return web3 ? "web3/accounts" : null;
    },
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  //   const [account, setAccount] = useState(null);

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null));
  }, [provider]);

  return {
    data,
    isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...rest,
  };
};
