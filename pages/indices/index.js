import {useEffect, useState} from "react";
import {fetchValuteRating} from "../../data/Valute";
import {fetchCryptoRating} from "../../data/Crypto";
import Block from "../../components/Block";
import Ad from "../../components/Ad";
import GetDate from '../../components/Date.jsx'
import TwoBlocks from "../../components/TwoBlocks";
import TwoTitles from "../../components/TwoTitles";
import SearchIcon from "../../public/icons/SearchIcon";
import Charts from "../../components/Charts";
import Table from "../../components/Table";
import styles from "../../styles/Home.module.scss";
import RightBlock from "../../components/RightBlock";
import Tabs from "../../components/Tabs";
import Prognosis from "../../components/Prognosis";
import ArrowIcon from "../../public/icons/icons";
import Page from "../../components/Page";
import Opnion from "../../components/Opnion";
import AdNews from "../../components/AdNews";

export default function Indices(){
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
        <Page title="Индексы">
            <Block>
                <Ad width="100%" height="275px" />
            </Block>

            <TwoBlocks>
                <>
                    <Block>
                        <h2 className="title">Мировые и отраслевые индексы</h2>
                        <div className={"filter-country"}>
                            <div className={"filter-country__tabPane"}>
                                <button>Все страницы</button>
                                <button>Америка</button>
                                <button>Европа</button>
                                <button>Бл. Восток</button>
                                <button>Азия</button>
                                <button>Африка</button>
                            </div>
                            <div className={"filter-country__tabContent"}>
                                <p className={"tabContent__title"}>Найти индексы</p>
                                <select className={"tabContent__selectOption"}>
                                    <option>Россия</option>
                                    <option>США</option>
                                    <option>Китай</option>
                                    <option>Канада</option>
                                </select>
                                <div className={"checkboxes"}>
                                    <div>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                        <label htmlFor="vehicle1">Основные</label><br/>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                        <label htmlFor="vehicle1">Отраслевые</label><br/>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                        <label htmlFor="vehicle1">Дополнительные</label><br/>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                        <label htmlFor="vehicle1">Другие</label><br/>
                                    </div>
                                </div>
                                <button className={"searchButton"}>Поиск</button>
                            </div>
                        </div>
                    </Block>
                    <Block>
                        <h2 className="title">График показателей (%)</h2>
                        <div className="barChart_div">
                            <Charts type='bar' />
                        </div>
                    </Block>
                    <Block>
                        <h2 className="title">Индексы РФ</h2>
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
                        <h2 className="title">Основные индексы мира</h2>
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
                    <AdNews count={isMobile ? '2' : isTablet ? '3' : '4'} title={"Новости Форекс"} />

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

                    <Block className={styles.ad}>
                        <Ad width="100%" height="300px" />
                    </Block>

                    <RightBlock title="Лидеры роста/падения">
                        <Tabs>
                            <div>
                                <h5>
                                    активные
                                </h5>
                                <>
                                    <Table
                                        width="39%"
                                        className={styles.smailtable}
                                        columns={['название', 'цена', 'изм.', 'изм%']}
                                        tables={[
                                            ['-Нефть Brent', '4 418 ₽ ', '+1%', '+1%'],
                                        ]} /></>
                            </div>
                            <div>
                                <h5>рост</h5>
                                <></>
                            </div>
                            <div>
                                <h5>падение</h5>
                                <></>
                            </div>
                        </Tabs>
                    </RightBlock>
                    <Block className={styles.ad}>
                        <Ad width="100%" height="500px" />
                    </Block>
                </>
            </TwoBlocks>
        </Page>
    )
}