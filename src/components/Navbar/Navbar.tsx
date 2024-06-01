"use client";

const Navbar:React.FC=()=>{
    return(
        <>
            <header>
                <nav>
                    <div >
                        <a href="/">
                                <h3>Logo</h3>
                        </a>
                    </div>
                    <div>
                    <ul className="d-flex">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                    </div>
                    <div>
                        {/* last section */}
                    </div>
                </nav>

            </header>
        </>
    )
}

export default Navbar;