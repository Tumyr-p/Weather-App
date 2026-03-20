import { useState } from "react"
import Preview1 from './PreviewPage1/Preview1'
import Preview2 from './PreviewPage2/Preview2'
import SelectCountry from '@/component/Preview/SelectCountry and City/SelectCountry.tsx'
import Arow from '@/icon/Arow/Arow.tsx'
import {Link} from "react-router-dom";
import './Preview.scss'


const Preview = () => {
    const [page, setPage] = useState<1 | 2 | 3>(1)
    return (
        <div>
            <div>
                {page === 1 && <Preview1/>}
                {page === 2 && <Preview2/>}
                {page === 3 && <SelectCountry/>}
            </div>
            <div className='Button'>
                <div className="back">
                    {page > 1 &&  <button className='borderrad' onClick={() => setPage((page - 1) as 1|2|3)}><Arow className={"Arow rot180"}/></button>}
                </div>
                {page <= 2 && <Link to="selectWeather">Skip</Link>}
                <div className="forward">
                    {page < 3 && <button className='borderrad' onClick={() => setPage((page + 1) as 1|2|3)}><Arow className={`Arow rot135`}/></button>}
                </div>
            </div>
        </div>
    )
}
export default Preview