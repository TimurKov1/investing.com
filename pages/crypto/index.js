import {useEffect, useState} from "react";
import Page from "../../components/Page";
import Ad from "../../components/Ad";
import GetDate from '../../components/Date.jsx'
import Block from "../../components/Block";
import Table from "../../components/Table";
import styles from "../../styles/Home.module.scss";
import Tabs from "../../components/Tabs";
import RightBlock from "../../components/RightBlock";
import TwoBlocks from "../../components/TwoBlocks";
import TwoTitles from "../../components/TwoTitles";
import {fetchValuteRating} from "../../data/Valute";
import {fetchCryptoRating} from "../../data/Crypto";
import Charts from "../../components/Charts";
import ArrowIcon from "../../public/icons/icons";
import Prognosis from "../../components/Prognosis";
import SearchIcon from "../../public/icons/SearchIcon";
import AdNews from "../../components/AdNews";
import Link from "next/link";

export default function Bond() {
    const [isTablet, setIsTablet] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [liveTime, setliveTime] = useState(true)
    const [valuteServerData, setValuteServerData] = useState(null)
    const [isValuteDataLoading, setIsValuteDataLoading] = useState(true)
    const [cryptoServerData, setCryptoServerData] = useState(null)
    const [isCryptoDataLoading, setIsCryptoDataLoading] = useState(true)

    useEffect(() => {
        let cleanupFunction = false

        if (window.screen.width <= 768) if (!cleanupFunction) setIsTablet(true)
        if (window.screen.width <= 550) if (!cleanupFunction) setIsMobile(true)

        return () => cleanupFunction = true
    }, [])


    return (
        <Page title="Криптовалюты">
            <h2 className="title">Взаимные фонды</h2>
            <div className={"cryptoAdBlock"}>
                <div className={"cryptoAdBlock_first"}>
                    <div className={"cryptoAdBlock__container"}>
                        <div className={"cryptoAdBlock_first__titleBlock"}>
                            <Link href={"/"}>Количество валют</Link>
                            <span>: 10.264</span>
                        </div>
                        <div className={"cryptoAdBlock_first__titleBlock"}>
                            <Link href={"/"}>Общая рыночная капитализация</Link>
                            <span>: $1,26T</span>
                        </div>
                        <div className={"cryptoAdBlock_first__titleBlock"}>
                            <Link href={"/"}>Объём (24ч)</Link>
                            <span>: $100,98B</span>
                        </div>
                        <div className={"cryptoAdBlock_first__buttons"}>
                            <button>
                                <svg version="1.1" id="Capa_1" width={"10px"} height={"10px"}
                                     xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                     viewBox="0 0 15.304 15.304">
                                    <g>
                                        <path style={{fill: "#fff"}} d="M12.675,5.92L7.954,0.216c0,0-0.387-0.454-0.793-0.047C6.603,0.728,2.587,6.058,2.587,6.058
		S1.874,6.766,2.819,6.766c0.948,0,2.457,0,2.457,0s0,0.411,0,1.04c0,1.939,0,5.714,0,7.16c0,0-0.011,0.338,0.428,0.338
		c0.437,0,3.129,0,3.743,0c0.611,0,0.506-0.404,0.506-0.404c0-1.484,0-5.135,0-7.144c0-0.701,0-1.16,0-1.16s1.883,0,2.66,0
		S12.675,5.92,12.675,5.92z"/>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                </svg>
                                Купить
                            </button>
                            <button>
                                <svg width="10px" height="10px" viewBox="0 0 8 8">
                                    <path style={{fill: "#fff"}} d="M2 0v5h-2l3.03 3 2.97-3h-2v-5h-2z"
                                          transform="translate(1)"/>
                                </svg>
                                Продать
                            </button>
                        </div>
                    </div>
                </div>
                <div className={"cryptoAdBlock_second"}>
                    <div className={"cryptoAdBlock__container"}>
                        <Ad height={"100%"}/>
                    </div>
                </div>
            </div>

            <>

                <Block>
                    <h2 className="title">Ведущие криптовалюты</h2>
                    <GetDate
                        className='date'
                    />
                    <Table
                        width={isMobile ? '40%' : '17%'}
                        className={styles.maxwidth} type={isMobile ? '' : '2'}
                        columns={isMobile ? ['название', 'цена', 'изменение'] : ['название', 'символ', 'цена', 'капитализ.', 'курс']}
                        tables={
                        isCryptoDataLoading ? isMobile ? [
                                    ['Bitcoin', '???', '?? %']
                                ]
                                : [
                                    ['Bitcoin', '???', '?? $', '?? $', '?? %']
                                ]
                            : cryptoServerData}/>
                </Block>
                <Block>
                    <h2 className="title">График показателей ведущих ETF</h2>
                    <div className="barChart_div">
                        <Charts type='bar'/>
                    </div>
                </Block>
                <AdNews count={isMobile ? '3' : isTablet ? '3' : '5'} title={"Вам также может понравиться"}/>
            </>


        </Page>
    )
}