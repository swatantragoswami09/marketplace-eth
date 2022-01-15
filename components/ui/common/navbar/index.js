import { useWeb3 } from "@components/providers";
import Link from "next/link";

export default function Navbar() {
  const { connect, isLoading, web3 } = useWeb3();
  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </Link>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  MarketPlace
                </a>
              </Link>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Blog
                </a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Wishlist
                </a>
              </Link>

              {!isLoading && web3 ? (
                <span
                  onClick={connect}
                  style={{ cursor: "pointer" }}
                  className="px-8 py-3 border rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Connect
                </span>
              ) : (
                <span
                  onClick={connect}
                  style={{ cursor: "pointer" }}
                  className="px-8 py-3 border rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Install metamask
                </span>
              )}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
