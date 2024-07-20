import React from 'react'
import logo from "./logo.png"
import notification from "./notification.png"
import user from "./user.png"

const Header = () => {
  return (
    <div>

<nav class=" nav bg-[#7180BF] border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} className="h-8 rounded-full" class="h-8" alt="Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">FinTech</span>
  </a>
  <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <img src={notification} className='h-5 w-5 m-4' alt="notification" />
      <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-9 h-9 rounded-full" src={user} alt="user photo" />
      </button>
      
     
  </div>
  </div>
</nav>
    </div>
  )
}

export default Header

