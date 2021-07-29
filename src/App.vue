<template>
  <div class="flex justify-center w-full min-h-screen p-12 bg-gray-200">
    <div class="w-64 overflow-y-scroll bg-gray-900 rounded-md">
      <div class="px-6 pt-8">
        <div class="flex items-center justify-between">
          <a
            href="#"
            class="bg-blue-600 p-1.5 rounded flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            ><svg
              class="w-5 h-5 text-white stroke-current"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg
          ></a>
          <button
            class="flex items-center justify-center p-0.5 rounded bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500"
          >
            <svg
              class="w-3 h-3 text-gray-300 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.25 6.75L4.75 12L10.25 17.25"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.25 12H5"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="px-6 pt-4">
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            class="w-full rounded pl-8 pr-4 py-2.5 text-xs font-light bg-gray-800 text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
            placeholder="search"
          />
        </div>
      </div>
      <div class="px-6 pt-4">
        <hr class="border-gray-700" />
      </div>
      <div class="px-6 pt-4">
        <ul class="flex flex-col space-y-2">
          <li class="relative text-gray-500 hover:text-white focus-within:text-white">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
            >
              <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9.75 8.75V19"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M5 8.25H19"
                ></path>
              </svg>
            </div>
            <a
              href="#"
              class="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
              >Dashboard</a
            >
          </li>
          <li class="">
            <div
              class="relative flex justify-between text-gray-500 hover:text-white focus-within:text-white"
            >
              <div class="flex items-center w-full">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
                >
                  <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M18 9.25H13.75V5"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M9.75 15.25H14.25"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M9.75 12.25H14.25"
                    ></path>
                  </svg>
                </div>
                <a
                  href="#"
                  class="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
                  >Content</a
                >
              </div>
              <button class="absolute right-0 flex items-center p-1" tabindex="-1">
                <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15.25 10.75L12 14.25L8.75 10.75"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="pt-2 pl-4">
              <ul class="flex flex-col pl-2 text-gray-500 border-l border-gray-700">
                <li>
                  <a
                    href="#"
                    class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white"
                    >Courses</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white"
                    >Categories</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white"
                    >Instructors</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white"
                    >Video Library</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="relative text-gray-500 hover:text-white focus-within:text-white">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
            >
              <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <a
              href="#"
              class="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
              >Design</a
            >
          </li>
          <li class="relative text-gray-500 hover:text-white focus-within:text-white">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
            >
              <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <circle cx="15" cy="9" r="1" fill="currentColor"></circle>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 4.75H19.25V12L12.5535 18.6708C11.7544 19.4668 10.4556 19.445 9.68369 18.6226L5.28993 13.941C4.54041 13.1424 4.57265 11.8895 5.36226 11.1305L12 4.75Z"
                ></path>
              </svg>
            </div>
            <a
              href="#"
              class="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
              >Market & sell</a
            >
          </li>
          <li class="relative text-gray-500 hover:text-white focus-within:text-white">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
            >
              <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M5.75 19.2502H6.25C6.80229 19.2502 7.25 18.8025 7.25 18.2502V15.75C7.25 15.1977 6.80229 14.75 6.25 14.75H5.75C5.19772 14.75 4.75 15.1977 4.75 15.75V18.2502C4.75 18.8025 5.19772 19.2502 5.75 19.2502Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M11.75 19.2502H12.25C12.8023 19.2502 13.25 18.8025 13.25 18.2502V12.75C13.25 12.1977 12.8023 11.75 12.25 11.75H11.75C11.1977 11.75 10.75 12.1977 10.75 12.75V18.2502C10.75 18.8025 11.1977 19.2502 11.75 19.2502Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.75 19.2502H18.25C18.8023 19.2502 19.25 18.8025 19.25 18.2502V5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H17.75C17.1977 4.75 16.75 5.19772 16.75 5.75V18.2502C16.75 18.8025 17.1977 19.2502 17.75 19.2502Z"
                ></path>
              </svg>
            </div>
            <a
              href="#"
              class="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
              >Reporting</a
            >
          </li>
          <li class="relative text-gray-500 hover:text-white focus-within:text-white">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
            >
              <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="7.25"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></circle>
                <circle
                  cx="12"
                  cy="12"
                  r="3.25"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></circle>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M7 17L9.5 14.5"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 17L14.5 14.5"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9.5 9.5L7 7"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M14.5 9.5L17 7"
                ></path>
              </svg>
            </div>
            <a
              href="#"
              class="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
              >Support</a
            >
          </li>
        </ul>
      </div>
      <div class="px-6 pt-8">
        <hr class="border-gray-700" />
      </div>
      <div class="px-6 pt-4 pb-8">
        <ul>
          <li class="relative text-gray-500 hover:text-white focus-within:text-white">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
            >
              <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13.1191 5.61336C13.0508 5.11856 12.6279 4.75 12.1285 4.75H11.8715C11.3721 4.75 10.9492 5.11856 10.8809 5.61336L10.7938 6.24511C10.7382 6.64815 10.4403 6.96897 10.0622 7.11922C10.006 7.14156 9.95021 7.16484 9.89497 7.18905C9.52217 7.3524 9.08438 7.3384 8.75876 7.09419L8.45119 6.86351C8.05307 6.56492 7.49597 6.60451 7.14408 6.9564L6.95641 7.14408C6.60452 7.49597 6.56492 8.05306 6.86351 8.45118L7.09419 8.75876C7.33841 9.08437 7.3524 9.52216 7.18905 9.89497C7.16484 9.95021 7.14156 10.006 7.11922 10.0622C6.96897 10.4403 6.64815 10.7382 6.24511 10.7938L5.61336 10.8809C5.11856 10.9492 4.75 11.372 4.75 11.8715V12.1285C4.75 12.6279 5.11856 13.0508 5.61336 13.1191L6.24511 13.2062C6.64815 13.2618 6.96897 13.5597 7.11922 13.9378C7.14156 13.994 7.16484 14.0498 7.18905 14.105C7.3524 14.4778 7.3384 14.9156 7.09419 15.2412L6.86351 15.5488C6.56492 15.9469 6.60451 16.504 6.9564 16.8559L7.14408 17.0436C7.49597 17.3955 8.05306 17.4351 8.45118 17.1365L8.75876 16.9058C9.08437 16.6616 9.52216 16.6476 9.89496 16.811C9.95021 16.8352 10.006 16.8584 10.0622 16.8808C10.4403 17.031 10.7382 17.3519 10.7938 17.7549L10.8809 18.3866C10.9492 18.8814 11.3721 19.25 11.8715 19.25H12.1285C12.6279 19.25 13.0508 18.8814 13.1191 18.3866L13.2062 17.7549C13.2618 17.3519 13.5597 17.031 13.9378 16.8808C13.994 16.8584 14.0498 16.8352 14.105 16.8109C14.4778 16.6476 14.9156 16.6616 15.2412 16.9058L15.5488 17.1365C15.9469 17.4351 16.504 17.3955 16.8559 17.0436L17.0436 16.8559C17.3955 16.504 17.4351 15.9469 17.1365 15.5488L16.9058 15.2412C16.6616 14.9156 16.6476 14.4778 16.811 14.105C16.8352 14.0498 16.8584 13.994 16.8808 13.9378C17.031 13.5597 17.3519 13.2618 17.7549 13.2062L18.3866 13.1191C18.8814 13.0508 19.25 12.6279 19.25 12.1285V11.8715C19.25 11.3721 18.8814 10.9492 18.3866 10.8809L17.7549 10.7938C17.3519 10.7382 17.031 10.4403 16.8808 10.0622C16.8584 10.006 16.8352 9.95021 16.8109 9.89496C16.6476 9.52216 16.6616 9.08437 16.9058 8.75875L17.1365 8.4512C17.4351 8.05308 17.3955 7.49599 17.0436 7.1441L16.8559 6.95642C16.504 6.60453 15.9469 6.56494 15.5488 6.86353L15.2412 7.09419C14.9156 7.33841 14.4778 7.3524 14.105 7.18905C14.0498 7.16484 13.994 7.14156 13.9378 7.11922C13.5597 6.96897 13.2618 6.64815 13.2062 6.24511L13.1191 5.61336Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13.25 12C13.25 12.6904 12.6904 13.25 12 13.25C11.3096 13.25 10.75 12.6904 10.75 12C10.75 11.3096 11.3096 10.75 12 10.75C12.6904 10.75 13.25 11.3096 13.25 12Z"
                ></path>
              </svg>
            </div>
            <a
              href="#"
              class="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
              >Settings</a
            >
          </li>
          <li class="relative text-gray-500 hover:text-white focus-within:text-white">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
            >
              <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.25 12V10C17.25 7.1005 14.8995 4.75 12 4.75C9.10051 4.75 6.75 7.10051 6.75 10V12L4.75 16.25H19.25L17.25 12Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9 16.75C9 16.75 9 19.25 12 19.25C15 19.25 15 16.75 15 16.75"
                ></path>
              </svg>
            </div>
            <a
              href="#"
              class="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
              >Notifications</a
            >
          </li>
          <li class="relative text-gray-500 hover:text-white focus-within:text-white">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
            >
              <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H9.25C9.80228 4.75 10.25 5.19772 10.25 5.75V9.25C10.25 9.80228 9.80228 10.25 9.25 10.25H5.75C5.19772 10.25 4.75 9.80228 4.75 9.25V5.75Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.75 14.75C4.75 14.1977 5.19772 13.75 5.75 13.75H9.25C9.80228 13.75 10.25 14.1977 10.25 14.75V18.25C10.25 18.8023 9.80228 19.25 9.25 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V14.75Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13.75 5.75C13.75 5.19772 14.1977 4.75 14.75 4.75H18.25C18.8023 4.75 19.25 5.19772 19.25 5.75V9.25C19.25 9.80228 18.8023 10.25 18.25 10.25H14.75C14.1977 10.25 13.75 9.80228 13.75 9.25V5.75Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13.75 14.75C13.75 14.1977 14.1977 13.75 14.75 13.75H18.25C18.8023 13.75 19.25 14.1977 19.25 14.75V18.25C19.25 18.8023 18.8023 19.25 18.25 19.25H14.75C14.1977 19.25 13.75 18.8023 13.75 18.25V14.75Z"
                ></path>
              </svg>
            </div>
            <a
              href="#"
              class="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
              >Apps</a
            >
          </li>
        </ul>
      </div>
      <div class="pl-6 pr-4 py-4 bg-[#232529] flex items-center justify-between">
        <div class="flex items-center">
          <div
            class="relative w-8 h-8 rounded-full before:absolute before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:right-0 before:bottom-0 before:ring-1 before:ring-white"
          >
            <img
              class="rounded-full"
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div class="flex flex-col pl-3">
            <div class="text-sm text-gray-50">Jane Doeson</div>
            <span class="text-xs text-[#acacb0] font-light tracking-tight">
              janedoeson@gmail.com
            </span>
          </div>
        </div>
        <button
          class="text-gray-400 bg-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white"
        >
          <svg class="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15.25 10.75L12 14.25L8.75 10.75"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
