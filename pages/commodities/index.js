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

    const localTableData = [
        {
            name: "Золото",
            options: [
                "+5%",
                "+5%",
                "+5%",
                "+5%",
            ]
        },
        {
            name: "Золото",
            options: [
                "+5%",
                "+5%",
                "+5%",
                "+5%",
            ]
        },
        {
            name: "Золото",
            options: [
                "+5%",
                "+5%",
                "+5%",
                "+5%",
            ]
        },
    ]


    return(
        <Page title="Сырьевые товары">
            <Block>
                <Ad width="100%" height="275px" />
            </Block>

            <TwoBlocks>
                <>
                    <Block>
                        <Block>
                            <Block>
                                <TwoTitles>
                                    <h2 className="title">Таблица показателей</h2>
                                    <h5 className="right_title">ПРОЦЕНТ ИЗМЕНЕНИЯ <span><ArrowIcon/></span></h5>
                                </TwoTitles>
                                <GetDate
                                    className='date'
                                />
                                <Table
                                    width={isMobile ? '40%' : '20%'}
                                    className={styles.maxwidth} type={isMobile ? '' : '1'}
                                    fake={true}
                                    columns={isMobile ? ['Товар', '1час', '1день'] : ['Товар', '1неделя', '1месяц', 'YTD', '3года']}
                                    tables={localTableData} />
                            </Block>
                        </Block>
                    </Block>
                    <Block>
                        <h2 className="title">График показателей (%)</h2>
                        <div className="barChart_div">
                            <Charts type='bar' />
                        </div>
                    </Block>
                    <Block>
                        <h2 className="title">Сырьевые товары в режиме реального времени</h2>
                    </Block>
                    <Block>
                        <h2 className="title">Энергетика</h2>
                        <GetDate
                            className='date'
                        />
                        <Table
                            width={isMobile ? '40%' : '20%'}
                            className={styles.maxwidth} type={isMobile ? '' : '1'}
                            fake={true}
                            columns={isMobile ? ['Товар', '1час', '1день'] : ['Товар', '1неделя', '1месяц', 'YTD', '3года']}
                            tables={localTableData} />
                    </Block>
                    <Block>
                        <h2 className="title">Металлы</h2>
                        <GetDate
                            className='date'
                        />
                        <Table
                            width={isMobile ? '40%' : '20%'}
                            className={styles.maxwidth} type={isMobile ? '' : '1'}
                            fake={true}
                            columns={isMobile ? ['Товар', '1час', '1день'] : ['Товар', '1неделя', '1месяц', 'YTD', '3года']}
                            tables={localTableData} />
                    </Block>
                    <Block>
                        <h2 className="title">Сельское хозяйство</h2>
                        <GetDate
                            className='date'
                        />
                        <Table
                            width={isMobile ? '40%' : '20%'}
                            className={styles.maxwidth} type={isMobile ? '' : '1'}
                            fake={true}
                            columns={isMobile ? ['Товар', '1час', '1день'] : ['Товар', '1неделя', '1месяц', 'YTD', '3года']}
                            tables={localTableData} />
                    </Block>
                    <Block>
                        <h2 className="title">Сырьевые индексы</h2>
                        <GetDate
                            className='date'
                        />
                        <Table
                            width={isMobile ? '40%' : '20%'}
                            className={styles.maxwidth} type={isMobile ? '' : '1'}
                            fake={true}
                            columns={isMobile ? ['Товар', '1час', '1день'] : ['Товар', '1неделя', '1месяц', 'YTD', '3года']}
                            tables={localTableData} />
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

                    <Block className={styles.ad}>
                        <Ad width="100%" height="500px" />
                    </Block>
                    <Block className={styles.ad}>
                        <Ad width="100%" height="500px" />
                    </Block>
                </>
            </TwoBlocks>
        </Page>
    )
}