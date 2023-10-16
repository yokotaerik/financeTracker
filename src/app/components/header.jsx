import {ImStatsBars} from 'react-icons/im'

export default function Header(){
    
    return (
        <header className='container max-w-2xl px-6 py-6 mx-auto' >
        <div className="flex items-center justify-between">
            {/* Informacoes do usuario */}
          <div className="flex items-center gap-2">
            {/* image */}
            <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
            <img src="https://media.licdn.com/dms/image/C4E03AQEqXTzkM_RUeA/profile-displayphoto-shrink_800_800/0/1646253926606?e=2147483647&v=beta&t=F4z1sxdWuPFEWyEfOhu4HgNYrrMSKezg8eFu7Z6Uhf8" alt="Sua foto" className="object-cover w-full h-full" />
            </div>
  
            {/* name */}
            <small>Olá, Erik</small>
          </div>
  
          <div>
            <nav className="flex items-center gap-2">
              <div>
                <ImStatsBars className='text-xl'/>
              </div>
              <div><button className='btn bg-red-700 text-white border-red-700'>Logout</button></div>
            </nav>
          </div>
        </div>
      </header>
    )

}