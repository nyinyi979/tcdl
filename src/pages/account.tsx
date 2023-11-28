import AccountSidebar from "../components/account_components/account_sidebar";
import Accounts from "../components/account_components/account_slide";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { bg6Class, h1Class } from "../components/utilities";
export default function Account(){
    return(
        <div className={bg6Class}>
            <Navbar currentLink="."/>
            <h1 className={`${h1Class} text-primary text-center pt-16`}>My Account</h1>
            <div className="mx-auto w-full md:my-8 my-4 table clear-both py-20">
                <AccountSidebar />
                <Accounts />
            </div>
            <Footer />
        </div>
    )
}