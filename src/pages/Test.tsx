const Test = () => {
    return (
        <div className="h-screen flex flex-col">
            <nav className="bg-white p-5">navegador</nav>

            <div id="div-superior" className="flex-1 relative bg-red-950">
                <div
                    id="div-imagen-fondo"
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1694016219825-62a6a5697027?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                ></div>

                <div
                    id="div-inferior"
                    className="absolute bottom-0 left-0 w-full bg-red-50 p-4"
                >
                    hola
                </div>
            </div>
        </div>


    )
}

export default Test