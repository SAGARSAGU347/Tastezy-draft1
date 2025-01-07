import { Sidebar } from "./Sidebar";

export default function ProfilePage() {
    return (
      <div className="flex h-screen">
        {/* Sidebar */}
        
  
        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50 mt-5">
          
  
          <div className="space-y-4">
            {/* Enter Name */}
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Enter your Name"
                className="flex p-2 border border-gray-300 rounded"
              />
              <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                Save
              </button>
            </div>
  
            {/* Email and OTP */}
            <div className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Mail Id"
                className="flex p-2 border border-gray-300 rounded"
              />
              <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                Send OTP
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <input
                type="text"
                placeholder="Enter OTP"
                className="flex p-2 border border-gray-300 rounded"
              />
              <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                Verify
              </button>
            </div>
  
            {/* Mobile Number */}
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Mobile Number"
                className="flex p-2 border border-gray-300 rounded"
              />
              <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                Save
              </button>
            </div>
  
            {/* Gender Selection */}
            <div >
              <h3 className="font-medium mb-2">Select Gender</h3>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="gender" className="text-orange-500" />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="gender" className="text-orange-500" />
                  <span>Female</span>
                </label>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  