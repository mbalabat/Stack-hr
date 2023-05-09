import React, { useState } from "react";
import "./../components/style.css";
import axios from "axios";


function AddNew({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

const [ date, setDate ] = useState("")
const [ category, setCategory ] = useState("")
const [ amount, setamount ] = useState("")
const [ receipt, setReceipt ] = useState("")



  const handleSave = () => {
    axios
      .post("http://localhost:4000/expense", {

      date: date,
      category: category,
      amount: amount
        
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded relative">
        {/* Close button */}
        <button
          className="absolute top-0 right-0 m-2 shadow-sm"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
<form onSubmit={handleSave}>
        <div className="bg-white p-2 rounded">
          <div className="flex flex-col md:flex-row md:items-center">
            {/* Date picker */}
            <div className="w-full md:w-auto mb-2 md:mb-0 md:mr-2 mt-5">
              <label class="block mb-2 font-bold">
                Available Funds: <span class="text-blue-500">₱8900</span>
              </label>

              <label class="block mb-2 font-bold" for="date">
                Choose a date:
              </label>
              <input
                type="date"
                className="p-2 rounded border-gray-300 w-full"
                value={date}
                onChange={(e)=> setDate(e.target.value)}
              />
            </div>

            {/* Dropdown */}
            <div className="w-full md:w-auto mb-2 md:mb-0 md:mx-2">
              <label class="block mb-2 font-bold" for="date">
                Choose a Category:
              </label>
              <select className="p-2 rounded border-gray-300 w-full" 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              
              >
                <option value="Transportation">Transportation</option>
                <option value="Other Expenses">Other Expenses</option>
                <option value="Non-Coding Activity">Non-Coding Activity</option>
                <option value="Internet">Internet</option>
                <option value=">Office Supplies">Office Supplies</option>
                <option value="Meals">Meals</option>
                <option value="Medicine">Medicine</option>


              </select>
            </div>

            {/* Amount input */}
            <div className="w-full md:w-auto mb-2 md:mb-0 md:mx-2 relative">
              <label class="block mb-2 font-bold" for="date">
                Enter Amount:
              </label>
              <input
                type="number"
                className="p-2 rounded border-gray-300 w-full"
                placeholder="Enter amount"
                value={amount}
                onChange={(e)=> setamount(e.target.value)}
              />
            </div>
          </div>

          {/* Upload image */}

          <label class="block mb-2 font-bold" for="date">
            Upload Receipt
          </label>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
            
          />

         
          {/* Add new button */}
          <div className="flex justify-end m-1 md:m-2">
            <button type="submit" class="bg-gradient-to-br from-orange-400 via-f0b673 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Add New
            </button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}


export default AddNew;
