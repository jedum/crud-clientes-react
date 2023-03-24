import { Outlet, NavLink, useLocation } from "react-router-dom";

function Layout() {

    const location = useLocation()

  return (
    <div className="md:flex md:min-h-screeen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clientes
        </h2>
        <nav className="mt-10">
          <NavLink
            className={`${location.pathname === '/' ? 'text-blue-300': 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
            to="/"
          >
            Clientes
          </NavLink>
          <NavLink
            className={({isActive}) => isActive ? 'text-blue-300 text-2xl block mt-2 hover:text-blue-300' : 'text-white text-2xl block mt-2 hover:text-blue-300'  }
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </NavLink>
        </nav>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
