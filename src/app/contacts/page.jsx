import Link from 'next/link'
import React from 'react'

const contacts = () => {
  return (
   <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <div className="max-w-xl w-full bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center text-gray-800">Contact Me</h2>
        <form className="w-full space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Emailgit add</label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={5}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
            />
          </div>

          <Link href='mailto:salahudeenrahmat99@gmail.com'
            type="submit"
            className="w-[ful] h-[50px] bg-[#FF6464] text-[#FFFF] flex items-center justify-center font-extrabold rounded-[10px]"
          >
            Send Message
          </Link>
        </form>
      </div>
    </div>

  )
}

export default contacts