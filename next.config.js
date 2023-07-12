/** @type {import('next').NextConfig} */
const nextConfig = {
 // in next js there is a problem that is next js not allow us to use the external images 
 // so to solve this problem next js offer a method to add the domain that we will use to get our images
 images:{
    domains:[
        "images.pexels.com"
    ]
 }

}

module.exports = nextConfig
