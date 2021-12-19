import BasicLayout from "../Templates/BasicLayout"
import Logo from './hobLogo.png'

const Home = () => {
    return (
        <BasicLayout>
            <main className="flex justify-center items-center">
                <img src={Logo} />
            </main>
        </BasicLayout>
    )
}

export default Home;