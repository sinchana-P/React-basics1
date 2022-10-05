/* Styling with classes */

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flex-box, line up the nav items horizontally, and
  put them inline with the React logo.
*/


function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <img src="./react-logo.png" width="40px" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer(){
    return(
    <footer>
        <small>© 2021 Ziroll development. All rights reserved.</small>
    </footer>
    )
}

function List(){ 
    return(
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be  
                 able to fit in with the cool kids!</li> 
                <li>I'm more likely to get a job as a developer 
                if I know React</li> 
             </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <List />
            <Footer />
        </div>
    )
}


ReactDOM.render(<Page />, document.getElementById("root"))