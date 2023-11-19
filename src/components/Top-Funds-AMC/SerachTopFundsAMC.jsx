import React from 'react'
import LazyLoader from '../Common-features/LazyLoader';
import HDFC from '../../assets/images/mf-top-funds/hdfc-mutual-fund.svg';
import ICICI from '../../assets/images/mf-top-funds/icici-mutual-fund.svg';
import SBI from '../../assets/images/mf-top-funds/sbi-mutual-fund.svg';
import AB from '../../assets/images/mf-top-funds/aditya-birla-mutual-fund.svg';
import Kotak from '../../assets/images/mf-top-funds/kotak-mutual-fund.svg';
import Franklin from '../../assets/images/mf-top-funds/franklin-mutual-fund.svg';
import DSP from '../../assets/images/mf-top-funds/dsp-mutual-fund.svg';
import IDFC from '../../assets/images/mf-top-funds/idfc-mutal-fund.svg';
import Mirae from '../../assets/images/mf-top-funds/mirae-mutual-fund.svg';
import Motilal from '../../assets/images/mf-top-funds/motilal-oswal-mutual-fund.svg';


function SerachTopFunds() {
    const [data, setData] = useState([]);
    const [trigger, setTrigger] = useState();
    const [filteredData, setFilteredData] = useState([]);
    const getAMCList = () => {
        rest.getAMCList().then(
            res => {
                setData(res.Response);
                setFilteredData(res.Response)
                console.log("res", res.Response)
            }
        )
    }
    useEffect(() => {

        setTrigger(true)
        if (trigger === true) {
            getAMCList()
        }

    }, [trigger])
    const fundhandleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredResults = data.filter((res) => res.name.toLowerCase().includes(searchTerm));
        setFilteredData(filteredResults);
    }
  return (
    <>
    <section className='search-funds-sec' id='showForm'>
        <div className='container'>
            <div className='row justify-content-end'>
                <div className='col-xl-5 col-md-6 col-sm-12'>
                    <div className='search-bar'>
                        <input type="text" className="input-control search-icon"  placeholder="Search" onChange={fundhandleSearch}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='search-items-sec'>
                        <div className='search-items'>
                            <div className='circle'>
                                <a href="/">
                                <LazyLoader src={HDFC} className={'img-fluid'} height={"93"} width={"144"} alt={""} /> 
                                </a>
                            </div>
                            <h4 className='mf-com-name'>
                                <a href="/">HDFC Mutual Fund</a>
                            </h4>
                        </div>
                        <div className='search-items'>
                            <div className='circle'>
                                <a href="/">
                                <LazyLoader src={ICICI} className={'img-fluid'} height={"74"} width={"126"} alt={""} /> 
                                </a>
                            </div>
                            <h4 className='mf-com-name'>
                                <a href="/">ICICI Prudential Mutual Fund</a>
                            </h4>
                        </div>
                        <div className='search-items'>
                            <div className='circle'>
                                <a href="/">
                                <LazyLoader src={SBI} className={'img-fluid'} height={"42"} width={"154"} alt={""} /> 
                                </a>
                            </div>
                            <h4 className='mf-com-name'>
                                <a href="/">SBI Mutual Fund</a>
                            </h4>
                        </div>
                        <div className='search-items'>
                            <div className='circle'>
                                <a href="/">
                                <LazyLoader src={AB} className={'img-fluid'} height={"73"} width={"130"} alt={""} /> 
                                </a>
                            </div>
                            <h4 className='mf-com-name'>
                                <a href="/">Aditya Birla Sun Life Mutual Fund</a>
                            </h4>
                        </div>
                        <div className='search-items'>
                            <div className='circle'>
                                <a href="/">
                                <LazyLoader src={Kotak} className={'img-fluid'} height={"57"} width={"142"} alt={""} /> 
                                </a>
                            </div>
                            <h4 className='mf-com-name'>
                                <a href="/">Kotak Mutual Fund</a>
                            </h4>
                        </div>
                        <div className='search-items'>
                            <div className='circle'>
                                <a href="/">
                                <LazyLoader src={Franklin} className={'img-fluid'} height={"68"} width={"134"} alt={""} /> 
                                </a>
                            </div>
                            <h4 className='mf-com-name'>
                                <a href="/">Franklin Templeton Mutual Fund</a>
                            </h4>
                        </div>
                        <div className='search-items'>
                            <div className='circle'>
                                <a href="/">
                                <LazyLoader src={DSP} className={'img-fluid'} height={"97"} width={"145"} alt={""} /> 
                                </a>
                            </div>
                            <h4 className='mf-com-name'>
                                <a href="/">DSP Mutual Fund</a>
                            </h4>
                        </div>
                        <div className='search-items'>
                            <div className='circle'>
                                <a href="/">
                                <LazyLoader src={IDFC} className={'img-fluid'} height={"133"} width={"133"} alt={""} /> 
                                </a>
                            </div>
                            <h4 className='mf-com-name'>
                                <a href="/">IDFC Mutual Fund</a>
                            </h4>
                        </div>
                        <div className='search-items'>
                            <div className='circle'>
                                <a href="/">
                                <LazyLoader src={Mirae} className={'img-fluid'} height={"133"} width={"133"} alt={""} /> 
                                </a>
                            </div>
                            <h4 className='mf-com-name'>
                                <a href="/">Mirae Asset Mutual Fund</a>
                            </h4>
                        </div>
                        <div className='search-items'>
                            <div className='circle'>
                                <a href="/">
                                <LazyLoader src={Motilal} className={'img-fluid'} height={"57"} width={"146"} alt={""} /> 
                                </a>
                            </div>
                            <h4 className='mf-com-name'>
                                <a href="/">Motilal Oswal Mutual Fund</a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SerachTopFunds