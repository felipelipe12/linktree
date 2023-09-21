function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // if(html.classList.contains('light')) {
    //     html.classList.remove('light') 
    // } else {
    //     html.classList.add('light')
    // }

    const img = document.querySelector("section .container .profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', 'assets/img/profile_light.jpg')
        img.setAttribute('alt', "Profile Photo in Light Mode")
    } else {
        img.setAttribute('src', 'assets/img/profile_dark.jpg')
        img.setAttribute('alt', "Profile Photo in Dark Mode")
    }
}