import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Options = () => {
  const [optionData, setOptionData] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const { data } = await axios.get("/api/option");
        setOptionData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchOptions();
  }, []);

  return (
    <div class="w-full max-w-md p-4  sm:p-8 ">
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-2 pt-0 sm:pt-0 sm:py-3">
            <div class="flex items-center justify-between mb-4">
              <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white px-4">
                Stocks
              </h5>
              <button
                href="#"
                class="text-sm font-medium bg-blue-100 px-2  py-1 rounded-l text-blue-600 hover:underline dark:text-blue-500"
              >
                Buy Now
              </button>
            </div>
          </li>

          {optionData.map((option) => (
            <li key={option.name} className="py-2 sm:py-3">
              <div className="flex items-center">
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-l text-gray-900 truncate dark:text-white">
                    {option.name}
                  </p>
                </div>
                <div className="inline-flex items-center text-base text-gray-900 dark:text-white">
                  <button
                    href="#"
                    className="text-sm bg-gray-200 mx-2 px-2 py-1 rounded-l"
                  >
                    	&#163;{option.price}
                  </button>
                  {option.today == "up"? (
                    <div className="text-green-600">
                      {option.percentage}%
                    </div>
                  ) : (
                    <div className="text-red-500">
                      {option.percentage}%
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Options;
