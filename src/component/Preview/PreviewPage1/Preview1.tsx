import './Preview1.scss'
import overcast from '@bybas/weather-icons/production/fill/all/overcast-day.svg'
const Preview1 = () => {
    return (
        <div className="PreviewPage1">
            <div className="SvgPage-1">
                <img src={overcast} alt=""/>
            </div>
            <div className="Preview1Text">
                <div>
                    <h1 className="TitlePage-1">
                        WeatherNews
                    </h1>
                </div>
                <div>
                    <p>
                        This weather forecast app <br/> provides users with real-time <br/> weather updates.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Preview1