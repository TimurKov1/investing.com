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


    return(
        <Page title="Индексные фьючерсы">

            <TwoBlocks>
                <>
                    <Block>
                        <h2 className="title">Индексные фьючерсы</h2>
                    </Block>
                    <Block>
                        <h5 className="title" style={{fontWeight: "600", marginBottom: "20px"}}>Котировки фьючерсов (CFD) в режиме реального времени</h5>
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
                        <h5 className="title" style={{fontWeight: "600", marginBottom: "20px"}}>Котировки фьючерсов США</h5>
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
                        <h5 className="title" style={{fontWeight: "600", marginBottom: "20px"}}>Котировки фьючерсов на EUREX</h5>
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
                    <RightBlock title="Просмотренные котировки">
                        <Table
                            width="39%"
                            className={styles.smailtable}
                            columns={['название', 'цена', "Изм.%", 'ОбЪем']}
                            tables={[
                                ['-Нефть Brent', '4 418 ₽ ', '+1%', '+1%'],
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
                                            ['Сбербанк', '4 418 ₽ ', '+1%', '22.84M'],
                                            ['Газпром', '4 418 ₽ ', '+1%', '22.84M'],
                                            ['НОВАТЭК', '4 418 ₽ ', '+1%', '22.84M'],
                                            ['ЛУКОЙЛ', '4 418 ₽ ', '+1%', '22.84M'],
                                            ['TCS Group H...', '4 418 ₽ ', '+1%', '22.84M'],
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

                </>
            </TwoBlocks>
        </Page>
    )
}