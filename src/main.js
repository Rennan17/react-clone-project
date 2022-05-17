function Main(){
    return(
        <div className='main'>
                <div className='center'>
                    <div className='menu'>
                        <div className='nav'>

                          <div className='logo'>
                              <h3>React</h3>
                          </div>
                          
                            <a href='#'>Documentação</a>
                            <a href='#'>Tutorial</a>
                            <a href='#'>Blog</a>
                            <a href='#'>Comunidade</a>
                            <input
                                id="searchbar"
                                onkeyup="search_animal()"
                                type="search"
                                placeholder=" Buscar docs">
                              </input>
                         
                            <div className='nav2'>
                                <a href='#'>v17.0.2</a>
                                <a href='#'>Languages</a>
                                <a href='#'>GitHub</a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
    )

}

export default Main;