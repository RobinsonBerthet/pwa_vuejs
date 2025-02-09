<template>
  <nav v-if="!isNotFoundPage">
    <a class="titlePwa" href="/">Robinson's PWA</a>
    <div class="nav-links">
      <router-link class="navLinksBtns" to="/pictures"><svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="#00fb9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z" stroke="#00fb9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg><span>Pictures</span></router-link>
      <router-link class="navLinksBtns" to="/phone"><svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z" stroke="#00fb9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg><span>Phone</span></router-link>
      <router-link class="navLinksBtns" to="/gps"><svg width="27" height="27" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#00fb9b" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M31.56,56.51S14.41,37.67,14.41,25.39c0-14.49,9.48-17.84,17.15-17.84,7.06,0,16.13,3.79,16.13,17.84C47.69,38.07,31.56,56.51,31.56,56.51Z"></path><circle cx="31.05" cy="22.24" r="6.93"></circle></g></svg><span>GPS</span></router-link>
      <router-link class="navLinksBtns" to="/otp"><svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="4.8"> <path d="M15.6807 14.5869C19.1708 14.5869 22 11.7692 22 8.29344C22 4.81767 19.1708 2 15.6807 2C12.1907 2 9.3615 4.81767 9.3615 8.29344C9.3615 9.90338 10.0963 11.0743 10.0963 11.0743L2.45441 18.6849C2.1115 19.0264 1.63143 19.9143 2.45441 20.7339L3.33616 21.6121C3.67905 21.9048 4.54119 22.3146 5.2466 21.6121L6.27531 20.5876C7.30403 21.6121 8.4797 21.0267 8.92058 20.4412C9.65538 19.4167 8.77362 18.3922 8.77362 18.3922L9.06754 18.0995C10.4783 19.5045 11.7128 18.6849 12.1537 18.0995C12.8885 17.075 12.1537 16.0505 12.1537 16.0505C11.8598 15.465 11.272 15.465 12.0067 14.7333L12.8885 13.8551C13.5939 14.4405 15.0439 14.5869 15.6807 14.5869Z" stroke="#00fb9b" stroke-width="1.5" stroke-linejoin="round"></path> <path opacity="0.5" d="M17.8851 8.29353C17.8851 9.50601 16.8982 10.4889 15.6807 10.4889C14.4633 10.4889 13.4763 9.50601 13.4763 8.29353C13.4763 7.08105 14.4633 6.09814 15.6807 6.09814C16.8982 6.09814 17.8851 7.08105 17.8851 8.29353Z" stroke="#00fb9b" stroke-width="1.5"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M15.6807 14.5869C19.1708 14.5869 22 11.7692 22 8.29344C22 4.81767 19.1708 2 15.6807 2C12.1907 2 9.3615 4.81767 9.3615 8.29344C9.3615 9.90338 10.0963 11.0743 10.0963 11.0743L2.45441 18.6849C2.1115 19.0264 1.63143 19.9143 2.45441 20.7339L3.33616 21.6121C3.67905 21.9048 4.54119 22.3146 5.2466 21.6121L6.27531 20.5876C7.30403 21.6121 8.4797 21.0267 8.92058 20.4412C9.65538 19.4167 8.77362 18.3922 8.77362 18.3922L9.06754 18.0995C10.4783 19.5045 11.7128 18.6849 12.1537 18.0995C12.8885 17.075 12.1537 16.0505 12.1537 16.0505C11.8598 15.465 11.272 15.465 12.0067 14.7333L12.8885 13.8551C13.5939 14.4405 15.0439 14.5869 15.6807 14.5869Z" stroke="#00fb9b" stroke-width="1.5" stroke-linejoin="round"></path> <path opacity="0.5" d="M17.8851 8.29353C17.8851 9.50601 16.8982 10.4889 15.6807 10.4889C14.4633 10.4889 13.4763 9.50601 13.4763 8.29353C13.4763 7.08105 14.4633 6.09814 15.6807 6.09814C16.8982 6.09814 17.8851 7.08105 17.8851 8.29353Z" stroke="#00fb9b" stroke-width="1.5"></path> </g></svg><span>OTP</span></router-link>
      <router-link class="navLinksBtns" to="/chat"><svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="4.8"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#00fb9b" stroke-width="1.5"></path> <path opacity="0.5" d="M8 10.5H16" stroke="#00fb9b" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M8 14H13.5" stroke="#00fb9b" stroke-width="1.5" stroke-linecap="round"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#00fb9b" stroke-width="1.5"></path> <path opacity="0.5" d="M8 10.5H16" stroke="#00fb9b" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M8 14H13.5" stroke="#00fb9b" stroke-width="1.5" stroke-linecap="round"></path> </g></svg><span>Chat</span></router-link>
    </div>
  </nav>
  <nav class="bottomNavBar">
    <router-link class="navLinksBtns" to="/pictures"><svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="#00fb9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z" stroke="#00fb9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg><span>Pictures</span></router-link>
      <router-link class="navLinksBtns" to="/phone"><svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z" stroke="#00fb9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg><span>Phone</span></router-link>
      <router-link class="navLinksBtns" to="/gps"><svg width="27" height="27" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#00fb9b" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M31.56,56.51S14.41,37.67,14.41,25.39c0-14.49,9.48-17.84,17.15-17.84,7.06,0,16.13,3.79,16.13,17.84C47.69,38.07,31.56,56.51,31.56,56.51Z"></path><circle cx="31.05" cy="22.24" r="6.93"></circle></g></svg><span>GPS</span></router-link>
      <router-link class="navLinksBtns" to="/otp"><svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="4.8"> <path d="M15.6807 14.5869C19.1708 14.5869 22 11.7692 22 8.29344C22 4.81767 19.1708 2 15.6807 2C12.1907 2 9.3615 4.81767 9.3615 8.29344C9.3615 9.90338 10.0963 11.0743 10.0963 11.0743L2.45441 18.6849C2.1115 19.0264 1.63143 19.9143 2.45441 20.7339L3.33616 21.6121C3.67905 21.9048 4.54119 22.3146 5.2466 21.6121L6.27531 20.5876C7.30403 21.6121 8.4797 21.0267 8.92058 20.4412C9.65538 19.4167 8.77362 18.3922 8.77362 18.3922L9.06754 18.0995C10.4783 19.5045 11.7128 18.6849 12.1537 18.0995C12.8885 17.075 12.1537 16.0505 12.1537 16.0505C11.8598 15.465 11.272 15.465 12.0067 14.7333L12.8885 13.8551C13.5939 14.4405 15.0439 14.5869 15.6807 14.5869Z" stroke="#00fb9b" stroke-width="1.5" stroke-linejoin="round"></path> <path opacity="0.5" d="M17.8851 8.29353C17.8851 9.50601 16.8982 10.4889 15.6807 10.4889C14.4633 10.4889 13.4763 9.50601 13.4763 8.29353C13.4763 7.08105 14.4633 6.09814 15.6807 6.09814C16.8982 6.09814 17.8851 7.08105 17.8851 8.29353Z" stroke="#00fb9b" stroke-width="1.5"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M15.6807 14.5869C19.1708 14.5869 22 11.7692 22 8.29344C22 4.81767 19.1708 2 15.6807 2C12.1907 2 9.3615 4.81767 9.3615 8.29344C9.3615 9.90338 10.0963 11.0743 10.0963 11.0743L2.45441 18.6849C2.1115 19.0264 1.63143 19.9143 2.45441 20.7339L3.33616 21.6121C3.67905 21.9048 4.54119 22.3146 5.2466 21.6121L6.27531 20.5876C7.30403 21.6121 8.4797 21.0267 8.92058 20.4412C9.65538 19.4167 8.77362 18.3922 8.77362 18.3922L9.06754 18.0995C10.4783 19.5045 11.7128 18.6849 12.1537 18.0995C12.8885 17.075 12.1537 16.0505 12.1537 16.0505C11.8598 15.465 11.272 15.465 12.0067 14.7333L12.8885 13.8551C13.5939 14.4405 15.0439 14.5869 15.6807 14.5869Z" stroke="#00fb9b" stroke-width="1.5" stroke-linejoin="round"></path> <path opacity="0.5" d="M17.8851 8.29353C17.8851 9.50601 16.8982 10.4889 15.6807 10.4889C14.4633 10.4889 13.4763 9.50601 13.4763 8.29353C13.4763 7.08105 14.4633 6.09814 15.6807 6.09814C16.8982 6.09814 17.8851 7.08105 17.8851 8.29353Z" stroke="#00fb9b" stroke-width="1.5"></path> </g></svg><span>OTP</span></router-link>
      <router-link class="navLinksBtns" to="/chat"><svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="4.8"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#00fb9b" stroke-width="1.5"></path> <path opacity="0.5" d="M8 10.5H16" stroke="#00fb9b" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M8 14H13.5" stroke="#00fb9b" stroke-width="1.5" stroke-linecap="round"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#00fb9b" stroke-width="1.5"></path> <path opacity="0.5" d="M8 10.5H16" stroke="#00fb9b" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M8 14H13.5" stroke="#00fb9b" stroke-width="1.5" stroke-linecap="round"></path> </g></svg><span>Chat</span></router-link>
  </nav>
  <router-view />
  <!-- <AppFooter /> -->
</template>

<script>
// import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    // AppFooter,
  },
  computed: {
    isNotFoundPage() {
      return this.$route.name === 'NotFound';
    },
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || "Robinson's PWA";
    },
  },
};
</script>

<style>
#app {
  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body
{
  background-color: black;

}

.nav-links router-link{
  flex-direction: row;
}

nav {
  width: 100%;
  background-color: #1b1b1b;
  display: flex;
  padding: 10px 0;
}

nav .titlePwa {
  font-family: "Caveat", serif !important;
  color: rgb(0, 251, 155);
  text-decoration: none;
  font-size: 25px;
  transition: background 0.3s;
  margin-right: auto; /* Pousse les nav-links à droite */
}

.nav-links {
  display: flex;
  gap: 1em; /* Espacement entre les liens */
  margin-right: 20px;
}

.nav-links .navLinksBtns {
  color: rgb(255, 255, 255) !important;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 0.4em;
  transition: background 0.3s;
}

.navLinksBtns {
}

nav a {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 18px;
  transition: background 0.3s;
}

.nav-links .navLinksBtns:hover {
  color: rgb(0, 255, 157) !important;
  background-color: rgba(0, 255, 157, 0.186);
  border-radius: 0.4em;
}

.nav-links .navLinksBtns.router-link-exact-active {
  color: rgb(0, 255, 157) !important;
  background-color: rgba(0, 255, 157, 0.186);
  border-radius: 0.4em;
}

.bottomNavBar .navLinksBtns:hover {
  color: rgb(0, 255, 157) !important;
  background-color: rgba(0, 255, 157, 0.186);
  border-radius: 0.4em;
}

.bottomNavBar .navLinksBtns.router-link-exact-active {
  color: rgb(0, 255, 157) !important;
  background-color: rgba(0, 255, 157, 0.186);
  border-radius: 0.4em;
}

.titlePwa {
  color: rgb(0, 251, 155);
  text-decoration: none;
  padding: 10px 20px;
  font-size: 18px;
  transition: background 0.3s;
  margin-left: 20px;
}
.navLinksBtns {
  display: flex;
  flex-direction: row;
  align-items: center; /* Centrer horizontalement */
  text-decoration: none; /* Supprime le soulignement du texte */
  color: inherit; /* Conserve la couleur du texte par défaut */
}

.navLinksBtns span {
  vertical-align: middle;
  text-align: center;
  margin-left: 0.2em;
  margin: auto;
}

/* Largeur de la scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

/* Couleur de fond de la scrollbar */
::-webkit-scrollbar-track {
  background: #1b1b1b;
  border-radius: 0px;
}

/* Couleur et forme du curseur de la scrollbar */
::-webkit-scrollbar-thumb {
  background: rgb(0, 251, 155);
  border-radius: 10px;
}

/* Au survol */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.bottomNavBar {
  display: none;
  position: fixed;
  z-index: 5;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #1b1b1b;
  padding-left: 0.6em;
  padding-right: 0.6em;
  justify-content: center;
  gap: 1em;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
}

.bottomNavBar .navLinksBtns {
  color: white !important;
  text-decoration: none;
  box-sizing: border-box;
  width: 20%;
  padding:0px;
  border-radius: 0.4em;
  transition: background 0.3s;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .bottomNavBar {
    display: flex;
  }
    .navLinksBtns {
    font-size: 10px; /* Réduit la taille du texte */
    border-radius: 0.4em;

  }
}

</style>
