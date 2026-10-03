import './CardsHome.css'
import { CardsHomeData } from './CardsHome.ts'
export function CardsHome() {
    return (
        <>
            <div className='cards'>
                {
                    CardsHomeData.map((item) => {
                        const Icon = item.icon
                        return (
                            <div key={item.id} className='card'>
                                <Icon className='icon' />
                                <p className='desc'>{item.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}