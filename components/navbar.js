
export default function NavBar({ title}) {
  return (
    <>
   <nav className="bg-white shadow dark:bg-gray-800">
  <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
    <div className="lg:flex lg:items-center">
      <div className="flex items-center justify-between">
        <div>
          <a
            className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            {title}
          </a>
        </div>
      </div>
      </div>
  </div>
</nav>
<hr/>
    </>
  )
}
