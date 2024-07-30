import { useState } from 'react'

const EarnedWithMaxBoostCard: React.FC = () => {
  const [hideSmallBalances, setHideSmallBalances] = useState<boolean>(true)

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8 p-4 sm:col-span-12 md:col-span-8 lg:col-span-8">
        <div className="rounded bg-white p-4 shadow">
          <div className="mb-4 flex justify-between">
            <p className="text-base">Rewards</p>
            <div className="mt-2 flex items-center">
              <p className="mr-4 text-base">Hide Small Balances (&lt; 0.01)</p>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={hideSmallBalances}
                  onChange={() => setHideSmallBalances(!hideSmallBalances)}
                />
                <div className="peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600 peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4"></div>
              </label>
            </div>
          </div>
          <p className="text-base text-left">
            There are a number of ways to earn PRISMA, such as minting mkUSD or ULTRA against a collateral or by
            depositing mkUSD or ULTRA into the Stability Pool. Each week, the amount of PRISMA allocated to these
            actions changes depending on the outcome of the emissions vote.&nbsp;
            <a
              className="text-blue-600 underline"
              target="_blank"
              rel="noreferrer"
              href="https://docs.prismafinance.com/governance/prisma-emission-voting#voting-on-weekly-emissions"
            >
              Learn more
            </a>
          </p>
        </div>
      </div>

      <div className="col-span-4 p-4 sm:col-span-12 md:col-span-4 lg:col-span-4">
        <div className="rounded bg-white shadow-md pt-2 px-2">
          <p className="text-base">Earned with max boost</p>
          <div className="mt-4 flex items-center">
            <div className="flex-none">
              <svg width="45" height="53" viewBox="0 0 45 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  opacity="0.2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.7266 3.05381C23.7302 3.05027 23.7338 3.04696 23.7374 3.04389C23.7321 3.04573 23.7268 3.04793 23.7217 3.0505C23.8817 2.89042 24.1344 2.87891 24.3086 3.15723L26.7112 7.1734C37.0285 8.50328 45 17.3207 45 28C45 38.524 37.2586 47.2399 27.1598 48.7639L24.3633 52.7656C24.3633 52.7656 24.3383 52.7948 24.3104 52.8367L24.257 52.8901L24.2556 52.8908C24.0954 53.0502 23.8292 53.0498 23.6693 52.7833L20.8679 48.768C10.7555 47.2558 3 38.5336 3 28C3 17.3249 10.9652 8.51025 21.2766 7.17498L23.6366 3.16567C23.6366 3.16567 23.6512 3.13857 23.6733 3.10717C23.6733 3.10717 23.6929 3.08855 23.7266 3.05381ZM23.9902 52.6482V49H23.9895V52.6233L23.9896 52.6337L23.9902 52.6482Z"
                  fill="black"
                ></path>
                <circle cx="21" cy="26" r="20.75" fill="white" stroke="#E4E3E3" strokeWidth="0.5"></circle>
                <path
                  d="M25.03 6.42833L20.9887 8.80883V0.338676C20.9887 0.172594 20.8226 0.0618733 20.7119 0.117234C20.878 -0.0488477 21.1401 -0.0607874 21.3209 0.227955L25.03 6.42833Z"
                  fill="#FC306B"
                ></path>
                <path
                  d="M21.2666 51.8238C21.1005 51.9898 20.8237 51.9898 20.6576 51.713L12.3535 39.8105L20.9897 45.0698V45.1805V51.547C20.9897 51.7684 21.1558 51.8791 21.2666 51.8238Z"
                  fill="#4F28DD"
                ></path>
                <path
                  d="M20.9871 17.9544V27.9746L8.53125 20.667L13.0152 13.1934L20.9871 17.9544Z"
                  fill="#FEB92F"
                ></path>
                <path
                  d="M20.9961 38.0926V45.068L12.3599 39.8087L4.77552 28.7367C4.60944 28.4599 4.44336 28.1277 4.44336 27.9062C4.49872 28.1277 4.60944 28.3491 4.77552 28.4599L20.9961 38.0926Z"
                  fill="#1A78D7"
                ></path>
                <path
                  d="M20.9919 27.9638V38.0948L4.71595 28.4621C4.49451 28.3514 4.38379 28.1299 4.38379 27.9085V27.8531C4.38379 27.687 4.43915 27.5763 4.49451 27.4102L8.53582 20.6562L20.9919 27.9638Z"
                  fill="#0BB875"
                ></path>
                <path
                  d="M20.9898 8.805V13.3999V17.9395L13.0166 13.1767L17.0039 6.36914L20.9898 8.805Z"
                  fill="#F86E30"
                ></path>
                <path
                  d="M20.994 8.8112L17.0049 6.38367L20.6239 0.235658C20.6239 0.235658 20.639 0.207545 20.6619 0.174969C20.6619 0.174969 20.6822 0.155644 20.7172 0.119608C20.828 0.00888729 20.994 0.119608 20.994 0.34105V8.8112Z"
                  fill="#E91224"
                ></path>
                <path
                  d="M29.6818 39.8105L21.3773 51.6947C21.3773 51.6947 21.3514 51.7249 21.3224 51.7684L21.267 51.8238C21.1563 51.8791 20.9902 51.7684 20.9902 51.6023V45.0698L29.6818 39.8105Z"
                  fill="#827FF4"
                ></path>
                <path
                  d="M29.0175 13.1934L33.4463 20.667L20.9902 27.9746V17.9544L29.0175 13.1934Z"
                  fill="#FFC866"
                ></path>
                <path
                  d="M37.594 27.8809C37.594 28.1023 37.4323 28.5277 37.2662 28.7491L29.6818 39.8212L20.9902 45.0805V38.105L37.2662 28.4169C37.4189 28.2463 37.594 28.1023 37.594 27.8809Z"
                  fill="#53AEF9"
                ></path>
                <path
                  d="M37.5984 27.8004V27.8557C37.5984 28.0772 37.4323 28.2986 37.2662 28.4093L20.9902 38.0974V27.9665L33.4463 20.6035L37.4877 27.3575C37.5984 27.5236 37.5984 27.6897 37.5984 27.8004Z"
                  fill="#74CA38"
                ></path>
                <path
                  d="M25.0341 6.43164L29.0175 13.1873L20.9902 17.9479V8.81474L25.0341 6.43164Z"
                  fill="#F78F31"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-base font-bold">0.00</p>
              <p className="text-base font-bold">$0.00</p>
            </div>
          </div>
          <button className="text-gray-400 mt-4 w-full cursor-not-allowed rounded bg-gray-200 py-2" disabled>
            Lock All
          </button>
        </div>
      </div>
    </div>
  )
}

export default EarnedWithMaxBoostCard
