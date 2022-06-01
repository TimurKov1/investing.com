import {useEffect, useState} from "react";
import Page from "../../components/Page";
import Ad from "../../components/Ad";
import GetDate from '../../components/Date.jsx'
import Block from "../../components/Block";
import Table from "../../components/Table";
import styles from "../../styles/Home.module.scss";
import News from "../../components/News";
import Opnion from "../../components/Opnion";
import AdNews from "../../components/AdNews";
import Image from "next/image";
import Tabs from "../../components/Tabs";
import Diogram from "../../components/Diogram";
import RightBlock from "../../components/RightBlock";
import Webinar from "../../components/Webinar";
import TwoBlocks from "../../components/TwoBlocks";
import TwoTitles from "../../components/TwoTitles";
import {fetchValuteRating} from "../../data/Valute";
import {fetchCryptoRating} from "../../data/Crypto";
import Charts from "../../components/Charts";
import ArrowIcon from "../../public/icons/icons";
import Stocks from "../../components/stocks";

export default function Stock() {
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
        <Page title="Акции">
            <Block>
                <Ad width="100%" height="275px" />
            </Block>

            <TwoBlocks>
                <>
                    <Block>
                        <TwoTitles>
                            <h2 className="title">Акции</h2>
                            <h5 className="right_title">МИРОВЫЕ РЫНКИ <span><ArrowIcon/></span></h5>
                        </TwoTitles>
                        <GetDate
                            className='date'
                        />
                        <>
                            <Stocks />
                        </>
                    </Block>
                    <Block>
                        <TwoTitles>
                            <h2 className="title">Котировки</h2>
                            <h5 className="right_title">ММВБ — Индекс мосбиржи <span><ArrowIcon/></span></h5>
                        </TwoTitles>
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

                    <AdNews count={isMobile ? '2' : isTablet ? '3' : '4'} title={"Новости фондовых рынков"} />
                    <AdNews count={isMobile ? '2' : isTablet ? '3' : '4'} title={"Аналитика по рынку акций"} />
                    <Block>
                        <h2 className="title">Календарь отчетности</h2>
                        <GetDate
                            className='date'
                        />
                        <Table
                            width={isMobile ? '40%' : '20%'}
                            className={styles.maxwidth} type={isMobile ? '' : '1'}
                            columns={isMobile ? ['название', 'цена', 'eps/прогноз'] : ['название', 'цена', 'eps/прогноз', 'доход/прогноз', 'капитализация', 'ВРЕМЯ']}
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