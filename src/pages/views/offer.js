import React from "react";
import DashNav from "../../components/DashNav";

const Offer = () => {
  const people = [
    {
      name: "The Hive Restaurant",
      message: "Yo!.........I would like this piece",
      offer: "10% off drinks for 300 CNTM every Wednesday",
      email: "jane.cooper@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "The palms Hotel",
      message: "I want this item",
      offer: " 15% off on weekends for 500 CNTM",
      email: "some.dude@example.com",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Baccd Resort",
      message: "I want this item",
      offer: "75 CNTM for each referral",
      email: "baccdresort@example.com",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Ekpoma Mall",
      message: "I want this item",
      offer: "Valley parking for 600 CNTM",
      email: "ekoomamall@example.com",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];
  return (
    <>
      <DashNav />
      <main className="bg-gray-400">
        <div className=" max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex flex-col ">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      {/* <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Message
                      </th> */}
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Offer
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {people.map((person) => (
                      <tr key={person.email}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={person.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {person.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {person.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        {/* <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {person.message}
                          </div>
                        </td> */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {person.offer}
                          </div>
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="lg:mt-2 xl:mt-0 mr-2 flex-shrink-0 inline-flex text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded">
                            Accept
                          </button>
                          <button className="lg:mt-2 xl:mt-0 ml-2 flex-shrink-0 inline-flex text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded">
                            Reject
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
              <h1 className="italic text-xl">Wow....Such empty</h1>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
};

export default Offer;
