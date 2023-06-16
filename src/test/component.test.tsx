import{render, screen} from "@testing-library/react"
import WelcomeUser from "../components/WelcomeUser";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

describe("WelcomeUser component", ()=>{
    test("", ()=>{
        render(<WelcomeUser name="Miriane" age={22} />);
        expect(screen.getByText("Welcome Miriane !")).toBeDefined();
    });
    test("", ()=>
    {
        render(<WelcomeUser name="Miriane" age={22}/>)
        expect(screen.getByText(`Apparement vous aurez ${22 +2} ans dans 2 ans`)).toBeDefined()
    })
})

describe("Navbar component", () =>{
    test("should find the correct pages", ()=>{
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )
        expect(screen.getByText("Home")).toBeDefined()
        expect(screen.getByText("Todo")).toBeDefined()
        expect(screen.getByText("Freelance")).toBeDefined()
        expect(screen.getByText("Mon Profil")).toBeDefined()
    })
    test("should find the url of 'Mon Profil'", ()=>{
        render(<MemoryRouter><Navbar/></MemoryRouter>)
        const profileLink = screen.getByText("Mon Profil")
        expect(profileLink).toBeDefined()
        const linkHref=profileLink.getAttribute("href")
        expect(linkHref).toEqual("/profile/@Miriane")
    })
})