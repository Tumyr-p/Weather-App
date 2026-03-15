import './Preview2.scss'
import clearday from '@bybas/weather-icons/production/fill/all/clear-day.svg'
import cloudy from '@bybas/weather-icons/production/fill/all/cloudy.svg'
import snow from '@bybas/weather-icons/production/fill/all/snow.svg'
import overcast from '@bybas/weather-icons/production/fill/all/overcast-day.svg'

const Preview2 = () => {
    return (
        <div className='preview2'>
            <div className="svgPreview2">
              <div className="clearDay svgElement">
                  <img src={clearday} alt=""/>
              </div>
              <div className="cloudy svgElement">
                  <img src={cloudy} alt=""/>
              </div>
              <div className="snow svgElement">
                  <img src={snow} alt=""/>
              </div>
              <div className="overcast svgElement">
                  <img src={overcast} alt=""/>
              </div>
            </div>
            <div className="preview2Text">
                <h1 className="textDetailWeather">
                    Detailed Hourly<br/>
                    Weather
                </h1>
                <p className="underBaseText ">
                    Get detailed temperature <br/>
                    for the next 48 hours
                </p>
            </div>


        </div>
    )
}
export default Preview2