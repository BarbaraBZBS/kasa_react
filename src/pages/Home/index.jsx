import Banner from '../../components/Banner'
import Card from '../../components/Card'

export default function Home() {
    return <main className="h-mainContainer">
        <Banner />
        <section className='homeSection'>
            <Card />
        </section>
    </main>
}

