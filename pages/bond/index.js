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
import Charts from "../../components/Charts";
import ArrowIcon from "../../public/icons/icons";
import Prognosis from "../../components/Prognosis";
import SearchIcon from "../../public/icons/SearchIcon";

export default function Bond() {
    const [ isTablet, setIsTablet ] = useState(false)
    const [ isMobile, setIsMobile ] = useState(false)
    const [ liveTime, setliveTime ] = useState(true)
    const [ valuteServerData, setValuteServerData ] = useState(null)
    const [ isValuteDataLoading, setIsValuteDataLoading ] = useState(true)
    const [ cryptoServerData, setCryptoServerData ] = useState(null)
    const [ isCryptoDataLoading, setIsCryptoDataLoading ] = useState(true)

    useEffect(() => {
        let cleanupFunction = false

        if (window.screen.width <= 768) if (!cleanupFunction) setIsTablet(true)
        if (window.screen.width <= 550) if (!cleanupFunction) setIsMobile(true)

        return () => cleanupFunction = true
    }, [])

    return(
        <Page title="Облигации">
            <Block>
                <Ad width="100%" height="275px" />
            </Block>

            <TwoBlocks>
                <>
                    <Block>
                        <TwoTitles>
                            <h2 className="title">Государственные облигации</h2>
                            <h2 className="title">Поиск по фильтрам</h2>
                        </TwoTitles>
                        <div className={"filter-group"}>
                            <div>
                                <span className={"select__title"}>СТРАНА</span>
                                <select className={"select-option"}>
                                    <option>Россия</option>
                                    <option>США</option>
                                    <option>Китай</option>
                                    <option>Канада</option>
                                </select>
                            </div>
                            <div>
                                <span className={"select__title"}>СРОК ПОГЕШЕНИЯ</span>
                                <select className={"select-option"}>
                                    <option>10.04.2022</option>
                                </select>
                            </div>
                            <div>
                                <span className={"select__title"}>ДО</span>
                                <select className={"select-option"}>
                                    <option>10.04.2022</option>
                                </select>
                                <span>
                                    <button style={{outline: "none", border: "none", background: "#fff", cursor: "pointer"}}>
                                        <SearchIcon />
                                    </button>
                                </span>
                            </div>
                        </div>
                    </Block>
                    <Block>
                        <h2 className="title">График доходности облигаций за 10 лет</h2>
                        <div className="barChart_div">
                            <Charts type='bar' />
                        </div>
                    </Block>
                    <Block>
                        <h2 className="title">Россия — государственные облигации</h2>
                        <GetDate
                            className='date'
                        />
                        <Table
                            width={isMobile ? '40%' : '20%'}
                            className={styles.maxwidth} type={isMobile ? '' : '1'}
                            columns={isMobile ? ['название', 'цена', 'изменение'] : ['название', 'цена', 'изменение', 'изменение %', 'ВРЕМЯ']}
                            tables={isValuteDataLoading ? isMobile ? [
                                        ['usd/rub', '???', '-?? %']
                                    ]
                                    : [
                                        ['usd/rub', '???', '-?? ₽', '-?? %']
                                    ]
                                : valuteServerData} />
                    </Block>
                    <Block>
                        <h2 className="title">Россия — государственные облигации</h2>
                        <GetDate
                            className='date'
                        />
                        <Table
                            width={isMobile ? '40%' : '20%'}
                            className={styles.maxwidth} type={isMobile ? '' : '1'}
                            columns={isMobile ? ['название', 'цена', 'изменение'] : ['название', 'цена', 'изменение', 'изменение %', 'ВРЕМЯ']}
                            tables={isValuteDataLoading ? isMobile ? [
                                        ['usd/rub', '???', '-?? %']
                                    ]
                                    : [
                                        ['usd/rub', '???', '-?? ₽', '-?? %']
                                    ]
                                : valuteServerData} />
                    </Block>
                    <Block>
                        <h2 className="title">Россия — государственные облигации</h2>
                        <GetDate
                            className='date'
                        />
                        <Table
                            width={isMobile ? '40%' : '20%'}
                            className={styles.maxwidth} type={isMobile ? '' : '1'}
                            columns={isMobile ? ['название', 'цена', 'изменение'] : ['название', 'цена', 'изменение', 'изменение %', 'ВРЕМЯ']}
                            tables={isValuteDataLoading ? isMobile ? [
                                        ['usd/rub', '???', '-?? %']
                                    ]
                                    : [
                                        ['usd/rub', '???', '-?? ₽', '-?? %']
                                    ]
                                : valuteServerData} />
                    </Block>
                    <Block>
                        <h2 className="title">Россия — государственные облигации</h2>
                        <GetDate
                            className='date'
                        />
                        <Table
                            width={isMobile ? '40%' : '20%'}
                            className={styles.maxwidth} type={isMobile ? '' : '1'}
                            columns={isMobile ? ['название', 'цена', 'изменение'] : ['название', 'цена', 'изменение', 'изменение %', 'ВРЕМЯ']}
                            tables={isValuteDataLoading ? isMobile ? [
                                        ['usd/rub', '???', '-?? %']
                                    ]
                                    : [
                                        ['usd/rub', '???', '-?? ₽', '-?? %']
                                    ]
                                : valuteServerData} />
                    </Block>
                    <Block>
                        <h2 className="title">Россия — государственные облигации</h2>
                        <GetDate
                            className='date'
                        />
                        <Table
                            width={isMobile ? '40%' : '20%'}
                            className={styles.maxwidth} type={isMobile ? '' : '1'}
                            columns={isMobile ? ['название', 'цена', 'изменение'] : ['название', 'цена', 'изменение', 'изменение %', 'ВРЕМЯ']}
                            tables={isValuteDataLoading ? isMobile ? [
                                        ['usd/rub', '???', '-?? %']
                                    ]
                                    : [
                                        ['usd/rub', '???', '-?? ₽', '-?? %']
                                    ]
                                : valuteServerData} />
                    </Block>
                    <Block>
                        <h2 className="title">Россия — государственные облигации</h2>
                        <GetDate
                            className='date'
                        />
                        <Table
                            width={isMobile ? '40%' : '20%'}
                            className={styles.maxwidth} type={isMobile ? '' : '1'}
                            columns={isMobile ? ['название', 'цена', 'изменение'] : ['название', 'цена', 'изменение', 'изменение %', 'ВРЕМЯ']}
                            tables={isValuteDataLoading ? isMobile ? [
                                        ['usd/rub', '???', '-?? %']
                                    ]
                                    : [
                                        ['usd/rub', '???', '-?? ₽', '-?? %']
                                    ]
                                : valuteServerData} />
                    </Block>
                </>

                <>
                    <RightBlock>
                        <Tabs>
                            <div>
                                <h5>ТОВАРЫ</h5>
                                <>
                                    <div>
                                        <div className="select">
                                            <select>
                                                <option>1Д</option>
                                                <option>1Н</option>
                                                <option>1М</option>
                                            </select>
                                        </div>
                                        <div className="charts">
                                            <Charts type="line" />
                                        </div>
                                    </div>
                                    <div className="products__card">
                                        <h5>Товары</h5>
                                        <Table
                                            width="39%"
                                            className={styles.smailtable}
                                            columns={['название', 'цена', 'курс (24Ч)']}
                                            tables={[
                                                ['Золото', '4 418 ₽ ', '+1%'],
                                                ['Золото', '4 418 ₽ ', '+1%'],
                                                ['Золото', '4 418 ₽ ', '+1%'],
                                                ['Золото', '4 418 ₽ ', '+1%'],
                                                ['Золото', '4 418 ₽ ', '+1%'],
                                                ['Золото', '4 418 ₽ ', '+1%'],
                                                ['Золото', '4 418 ₽ ', '+1%'],
                                            ]} />
                                    </div>
                                </>
                            </div>
                            <div>
                                <h5>ФОРЕКС</h5>
                                <></>
                            </div>
                            <div>
                                <h5>ИНДЕКСЫ</h5>
                                <></>
                            </div>
                            <div>
                                <h5>АКЦИИ</h5>
                                <></>
                            </div>
                        </Tabs>
                    </RightBlock>

                    <RightBlock title={"Прогноз по ставке ФРС"}>
                        <Prognosis manyForecast={80} />
                    </RightBlock>

                    <RightBlock>
                        <Tabs>
                            <div>
                                <h5>ТОВАРЫ</h5>
                                <>
                                    <div className="rightStatCard">
                                        <h2 id="eon">E.ON</h2>
                                        <div className="rightStatCard__score">
                                            <p>11,071</p>
                                            <span>
                                                -0,011 (-0,10%)
                                            </span>
                                        </div>
                                        <div className="rightStatCard__stat">
                                            <div className="rightStatCard__left">
                                                <h3 className={styles.tab__title}>Интервалы:</h3>
                                                <p id="time">5 минут <span><ArrowIcon/></span></p>
                                                <h3 className={styles.tab__title}>Интервалы:</h3>
                                                <h3 className={styles.tab__title}>Интервалы:</h3>
                                            </div>
                                            <div className="rightStatCard__right">
                                                <h3 className={styles.tab__title}>Резюме:</h3>
                                                <div id="status">
                                                    АКТИВНО ПРОДОВАТЬ
                                                </div>
                                                <div>
                                                    <span className={styles.tab__item + ' ' + styles.tab__item_green}><span>Покупка</span> (0)</span>
                                                    <span className={styles.tab__item + ' ' + styles.tab__item_red}><span>Продажа</span> (0)</span>
                                                </div>
                                                <div>
                                                    <span className={styles.tab__item + ' ' + styles.tab__item_green}><span>Покупка</span> (0)</span>
                                                    <span className={styles.tab__item + ' ' + styles.tab__item_red}><span>Продажа</span> (0)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Table
                                            width="39%"
                                            className={styles.smailtable}
                                            columns={['название', 'цена', 'курс (24Ч)']}
                                            tables={[
                                                ['Золото', '4 418 ₽ ', '+1%'],
                                                ['Золото', '4 418 ₽ ', '+1%'],
                                                ['Золото', '4 418 ₽ ', '+1%'],
                                                ['Золото', '4 418 ₽ ', '+1%'],
                                                ['Золото', '4 418 ₽ ', '+1%'],
                                                ['Золото', '4 418 ₽ ', '+1%'],
                                                ['Золото', '4 418 ₽ ', '+1%'],
                                            ]} />
                                    </div>
                                </>
                            </div>
                            <div>
                                <h5>ФОРЕКС</h5>
                                <></>
                            </div>
                            <div>
                                <h5>ИНДЕКСЫ</h5>
                                <></>
                            </div>
                            <div>
                                <h5>АКЦИИ</h5>
                                <></>
                            </div>
                        </Tabs>
                    </RightBlock>

                    <RightBlock title="Просмотренное">
                        <Table
                            width="39%"
                            className={styles.smailtable}
                            columns={['название', 'цена', 'курс (24Ч)']}
                            tables={[
                                ['-Нефть Brent', '4 418 ₽ ', '+1%'],
                            ]} />
                    </RightBlock>
                    <Block className={styles.ad}>
                        <Ad width="100%" height="500px" />
                    </Block>
                </>
            </TwoBlocks>
        </Page>
    )
}