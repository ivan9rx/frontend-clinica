const Header = () => {
    return (
        <header className="container-fluid d-flex justify-content-end">
            <div className="d-flex align-items-center">
                <div className="text-right mr-3">
                    <span className="d-block m-0 p-0 text-white">clínica dentaria</span>
                    <small className="m-o p-0">plano gold</small>
                </div>
                <img src="https://img.freepik.com/fotos-gratis/dentista-e-paciente-no-consultorio-odontologico-mulher-tendo-dentes-examinados-por-dentistas_170532-2309.jpg?size=626&ext=jpg"/>
                <span className="mdi mdi-arrow-down-bold-circle"></span>
            </div>
        </header>
    )
};

export default Header;
