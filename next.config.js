/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: "imgix",
    path: "http://localhost:3000/",
  },
  reactStrictMode: true,
}