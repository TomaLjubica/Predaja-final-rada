import Stil from "./Lokacija-stil";
import { Link } from "react-router-dom";

export default function Still() {
    let podatak1 = {ime:"Split", vaznosti:"Split je poznat po zvoniku svetog Duje i stadionu poljudu"}
    let podatak2 = {ime:"Plitvička jezera", vaznosti:"Plitvička jezera su poznata po svojoj netaknutoj prirodi i raznim endemskim vrstama"}
    let podatak3 = {ime:"Dubrovnik", vaznosti:"Dubrovnik je povjesni Hrvatski grad sa puno zanimljih lokacija, poput njegovih zidina"}
    let podatak4 = {ime:"Zadar", vaznosti:"Zadar ima mnogo starih ruševina i jedine morske orgulje u svijetu"}
    let podatak5 = {ime:"Crveno i Modro jezero", vaznosti:"Crveno i modro jezero, jedinstvena su destinacija, kaže se da je nemoguće baciti kamen u Crveno jezero"}
    let podatak6 = {ime:"Vis", vaznosti:"Vis je pun stare građe i predivnih obala, savršeno mjesto ako želite upoznati Hrvatsku tradiciju"}
    let podatak7 = {ime:"Ušče Neretve", vaznosti:"Ukoliko ste zainteresiran za kitesurfing, definitivno posjetite Ušče Neretve"}
    let podatak8 = {ime:"Mosor", vaznosti:"Ako ste zainteresirani za planinarenje, mosor je zimi odlična opcija"}
    let podatak9 = {ime:"Šibenik", vaznosti:"Ako posjetite Šibenik, zasigurno ćete pronaći tvrđavu st. Mihvila, sa nevjerojatnim pogledom"}
    let podatak10 = {ime:"Korčula", vaznosti:"Ukoliko dođete u pravo doba, viteške igre na Korčuli će vas zasigurno oduševiti"}
    let podatak11 = {ime:"Sinj", vaznosti:"Iako je relativno tiho mjesto, Sinj održava jedan od naj napetijih događaja u dalmaciji, Sinjsku alku"}
    let podatak12 = {ime:"Nacionalni park Krka", vaznosti:"Krka nije daleko udaljena od Šibenika, no njena priroda je idalje predivna, poglede na vodopade zasigurno će te zapamtiti"}

    return <div>
        <header>
            <h1>Potencijalne lokacije za posjet dalmaciji</h1>
            <div id="lokacije">
                <Link to='/'><p>Odvedi me na naslovnu</p></Link>
            </div>
        </header>
        <p>Ovo su neke od potencijalnih destinacija u dalmaciji</p>
        <div id="pomoc">
        <div id="grid">
            <Stil pr={podatak1}/>
            <Stil pr={podatak2}/>
            <Stil pr={podatak3}/>
            <Stil pr={podatak4}/>
            <Stil pr={podatak5}/>
            <Stil pr={podatak6}/>
            <Stil pr={podatak7}/>
            <Stil pr={podatak8}/>
            <Stil pr={podatak9}/>
            <Stil pr={podatak10}/>
            <Stil pr={podatak11}/>
            <Stil pr={podatak12}/>
            

        </div>
        </div>
    </div>
}