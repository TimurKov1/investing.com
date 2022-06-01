import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Page from '../components/Page.jsx'
import Ad from '../components/Ad.jsx'
import API from '../components/API.jsx'
import GetDate from '../components/Date.jsx'
import Block from '../components/Block.jsx'
import Table from '../components/Table.jsx'
import News from '../components/News.jsx'
import Opnion from '../components/Opnion.jsx'
import AdNews from '../components/AdNews.jsx'
import Tabs from '../components/Tabs.jsx'
import RightBlock from '../components/RightBlock.jsx'
import TwoBlocks from '../components/TwoBlocks.jsx'
import Webinar from '../components/Webinar.jsx'
import Diogram from '../components/Diogram.jsx'
import { fetchValuteRating } from '../data/Valute.jsx'
import { fetchCryptoRating } from '../data/Crypto.jsx'
import { fetchIndicesRussiaRating } from '../data/IndicesRussia.jsx'
import { fetchIndicesWorldRating } from '../data/IndicesWorld.jsx'
import { fetchStocksRussiaRating } from '../data/StocksRussia.jsx'
import { fetchStocksWorldRating } from '../data/StocksWorld.jsx'
import { fetchMetalsRating } from '../data/Metals.jsx'
import { fetchETFRating } from '../data/ETF.jsx'
import { fetchTopHighStocksRating } from '../data/TopHighStocks.jsx'
import { fetchTopLowStocksRating } from '../data/TopLowStocks.jsx'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [ isTablet, setIsTablet ] = useState(false)
  const [ isMobile, setIsMobile ] = useState(false)
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

  return (
    <Page title="Главная">
      <Block>
        <Ad width="100%" height="275px" />
      </Block>

      <TwoBlocks>
        <>
          <Block>
            <h2 className="title">Валюта</h2>
            <GetDate
              className='date'
            />
            <API
              width={isMobile ? '40%' : '20%'}
              className={styles.maxwidth} type={isMobile ? '' : '1'}
              columns={isMobile ? ['пара', 'цена', 'изменение'] : ['пара', 'цена', 'изменение', 'изменение %']}
              template={isMobile ? [
                  ['usd/rub', '???', '-?? ₽']
                ]
                : [
                  ['usd/rub', '???', '-?? ₽', '-?? %']
              ]}
              func={fetchValuteRating}
              isMobile={isMobile}
            />
          </Block>

          <Block>
            <News title="Илон Маск чипировал обезьяну" image="01" big />

            <div className={styles.news__inner}>
              <News title="Илон Маск чипировал обезьяну" image="01" />
              <News title="Илон Маск чипировал обезьяну" image="01" />
            </div>
          </Block>

          <Block>
            <h2 className="title">Мнение аналитиков</h2>
            <div className={styles.opnion__grid}>
              <Opnion title="Gold Withstands Storm. Will Miners Drag It Off The Raft?" author="Ed Moya" date="12.03.20" />
              <Opnion title="Gold Withstands Storm. Will Miners Drag It Off The Raft?" author="Ed Moya" date="12.03.20" />
              <Opnion title="Gold Withstands Storm. Will Miners Drag It Off The Raft?" author="Ed Moya" date="12.03.20" />
              <Opnion title="Gold Withstands Storm. Will Miners Drag It Off The Raft?" author="Ed Moya" date="12.03.20" />
            </div>
          </Block>

          <Block>
            <h2 className="title">Криптовалюта</h2>
            <GetDate
              className='date'
            />
            <API
              width={isMobile ? '40%' : '17%'}
              className={styles.maxwidth} type={isMobile ? '' : '2'}
              columns={isMobile ? ['название', 'цена', 'изменение'] : ['название', 'символ', 'цена', 'капитализ.', 'курс']}
              template={isMobile ? [
                ['Bitcoin', '???', '?? %']
              ]
              : [
                ['Bitcoin', '???', '?? $', '?? $', '?? %']
              ]}
              func={fetchCryptoRating}
              isMobile={isMobile}
            />
          </Block>

          <AdNews count={isMobile ? '2' : isTablet ? '3' : '4'} title={"Вам также может понравиться"} />

          <Block>
            <h2 className="title">Брокеры</h2>
            <div className={styles.brokers__grid}>
              <Image width="140px" height="73px" src="/brokers/01.svg" />
              <Image width="140px" height="73px" src="/brokers/02.svg" />
              <Image width="140px" height="73px" src="/brokers/03.svg" />
              <Image width="140px" height="73px" src="/brokers/04.svg" />
              <Image width="140px" height="73px" src="/brokers/05.svg" />
              <Image width="140px" height="73px" src="/brokers/06.svg" />
              <Image width="140px" height="73px" src="/brokers/07.svg" />
              <Image width="140px" height="73px" src="/brokers/08.svg" />
            </div>
          </Block>

          <Block>
            <h2 className="title">Технический анализ</h2>
            <Tabs>
              <div>
                <h5>популярное</h5>
                <>
                  <div className={styles.tabcontent}>
                    <Tabs>
                      <div>
                        <h5>S&P 500</h5>
                        <>
                          <div className={styles.tab__flex_spacebetween}>
                            <div className={styles.tab__main}>
                              <h2 className={styles.tab__header}>S&P 500</h2>
                              <span className={styles.tab__price}>4418,64 ₽</span>
                              <GetDate
                                className={styles.tab__date}
                              />
                            </div>

                            <div>
                              <div className={styles.tab__flex_center}>
                                <h3 className={styles.tab__title}>Резюме:</h3>
                                <span className={styles.tab__summary}>Покупка</span>
                              </div>
                              <div className={styles.tab__data}>
                                <h3 className={styles.tab__title}>Скол.средние:</h3>
                                <span className={styles.tab__item + ' ' + styles.tab__item_green}><span>Покупка</span> (0)</span>
                                <span className={styles.tab__item + ' ' + styles.tab__item_red}><span>Продажа</span> (0)</span>
                              </div>

                              <div className={styles.tab__data}>
                                <h3 className={styles.tab__title}>Индикаторы</h3>
                                <span className={styles.tab__item + ' ' + styles.tab__item_green}><span>Покупка</span> (0)</span>
                                <span className={styles.tab__item + ' ' + styles.tab__item_red}><span>Продажа</span> (0)</span>
                              </div>

                              <Table
                                type="3"
                                className={styles.tab__table}
                                columns={['s1', 's2', 's3', 'точка пивот', 'r1', 'r2', 'r3']}
                                tables={[
                                  ['77.23', '77.23', '77.23', '77.2333', '77.23', '77.23', '77.23']
                                ]} />

                              <div className={styles.tab__data}>
                                <h3 className={styles.tab__title}>Интервалы</h3>
                                <button className={styles.tab__type}>5 минут</button>
                                <button className={styles.tab__type + ' ' + styles.tab__type_active}>5 минут</button>
                                <button className={styles.tab__type}>5 минут</button>
                                <button className={styles.tab__type}>5 минут</button>
                              </div>
                            </div>

                            <div className={styles.tab__diogram}>
                              <h3 className={styles.tab__title}>Настроение инвесторов</h3>
                              <Diogram percent1="40" percent2="60" width={isMobile ? "260" : isTablet ? "488" : "158"} height="139" />
                            </div>
                          </div>
                        </>
                      </div>

                      <div>
                        <h5>Gold</h5>
                        <>
                          <div className={styles.tab__flex_spacebetween}>
                            <div className={styles.tab__main}>
                              <h2 className={styles.tab__header}>Gold</h2>
                              <span className={styles.tab__price}>4418,64 ₽</span>
                              <GetDate
                                className={styles.tab__date}
                              />
                            </div>

                            <div>
                              <div className={styles.tab__flex_center}>
                                <h3 className={styles.tab__title}>Резюме:</h3>
                                <span className={styles.tab__summary}>Покупка</span>
                              </div>

                              <div className={styles.tab__data}>
                                <h3 className={styles.tab__title}>Скол.средние:</h3>
                                <span className={styles.tab__item + ' ' + styles.tab__item_green}><span>Покупка</span> (0)</span>
                                <span className={styles.tab__item + ' ' + styles.tab__item_red}><span>Продажа</span> (0)</span>
                              </div>

                              <div className={styles.tab__data}>
                                <h3 className={styles.tab__title}>Индикаторы</h3>
                                <span className={styles.tab__item + ' ' + styles.tab__item_green}><span>Покупка</span> (0)</span>
                                <span className={styles.tab__item + ' ' + styles.tab__item_red}><span>Продажа</span> (0)</span>
                              </div>

                              <Table
                                type="3"
                                className={styles.tab__table}
                                columns={['s1', 's2', 's3', 'точка пивот', 'r1', 'r2', 'r3']}
                                tables={[
                                  ['77.23', '77.23', '77.23', '77.2333', '77.23', '77.23', '77.23']
                                ]} />

                              <div className={styles.tab__data}>
                                <h3 className={styles.tab__title}>Интервалы</h3>
                                <button className={styles.tab__type}>5 минут</button>
                                <button className={styles.tab__type + ' ' + styles.tab__type_active}>5 минут</button>
                                <button className={styles.tab__type}>5 минут</button>
                                <button className={styles.tab__type}>5 минут</button>
                              </div>
                            </div>

                            <div className={styles.tab__diogram}>
                              <h3 className={styles.tab__title}>Настроение инвесторов</h3>
                              <Diogram percent1="40" percent2="60" width={isMobile ? "260" : isTablet ? "488" : "158"} height="139" />
                            </div>
                          </div>
                        </>
                      </div>
                    </Tabs>
                  </div>
                </>
              </div>

              <div>
                <h5>форекс</h5>
                <>
                  <div className={styles.tabcontent}>
                    <Tabs>
                      <div>
                        <h5>Text</h5>
                        <>
                          <div className={styles.tab__flex_spacebetween}>
                            <div className={styles.tab__main}>
                              <h2 className={styles.tab__header}>Text</h2>
                              <span className={styles.tab__price}>4418,64 ₽</span>
                              <GetDate
                                className={styles.tab__date}
                              />
                            </div>

                            <div>
                              <div className={styles.tab__flex_center}>
                                <h3 className={styles.tab__title}>Резюме:</h3>
                                <span className={styles.tab__summary}>Покупка</span>
                              </div>

                              <div className={styles.tab__data}>
                                <h3 className={styles.tab__title}>Скол.средние:</h3>
                                <span className={styles.tab__item + ' ' + styles.tab__item_green}><span>Покупка</span> (0)</span>
                                <span className={styles.tab__item + ' ' + styles.tab__item_red}><span>Продажа</span> (0)</span>
                              </div>

                              <div className={styles.tab__data}>
                                <h3 className={styles.tab__title}>Индикаторы</h3>
                                <span className={styles.tab__item + ' ' + styles.tab__item_green}><span>Покупка</span> (0)</span>
                                <span className={styles.tab__item + ' ' + styles.tab__item_red}><span>Продажа</span> (0)</span>
                              </div>

                              <Table
                                type="3"
                                className={styles.tab__table}
                                columns={['s1', 's2', 's3', 'точка пивот', 'r1', 'r2', 'r3']}
                                tables={[
                                  ['77.23', '77.23', '77.23', '77.2333', '77.23', '77.23', '77.23']
                                ]} />

                              <div className={styles.tab__data}>
                                <h3 className={styles.tab__title}>Интервалы</h3>
                                <button className={styles.tab__type}>5 минут</button>
                                <button className={styles.tab__type + ' ' + styles.tab__type_active}>5 минут</button>
                                <button className={styles.tab__type}>5 минут</button>
                                <button className={styles.tab__type} style={{ display: isMobile ? 'none' : 'flex' }}>5 минут</button>
                              </div>
                            </div>

                            <div className={styles.tab__diogram}>
                              <h3 className={styles.tab__title}>Настроение инвесторов</h3>
                              <Diogram percent1="40" percent2="60" width={isMobile ? "260" : isTablet ? "488" : "158"} height="139" />
                            </div>
                          </div>
                        </>
                      </div>

                      <div>
                        <h5>Gold</h5>
                        <>
                          <div className={styles.tab__flex_spacebetween}>
                            <div className={styles.tab__main}>
                              <h2 className={styles.tab__header}>Gold</h2>
                              <span className={styles.tab__price}>4418,64 ₽</span>
                              <GetDate
                                className={styles.tab__date}
                              />
                            </div>

                            <div>
                              <div className={styles.tab__flex_center}>
                                <h3 className={styles.tab__title}>Резюме:</h3>
                                <span className={styles.tab__summary}>Покупка</span>
                              </div>

                              <div className={styles.tab__data}>
                                <h3 className={styles.tab__title}>Скол.средние:</h3>
                                <span className={styles.tab__item + ' ' + styles.tab__item_green}><span>Покупка</span> (0)</span>
                                <span className={styles.tab__item + ' ' + styles.tab__item_red}><span>Продажа</span> (0)</span>
                              </div>

                              <div className={styles.tab__data}>
                                <h3 className={styles.tab__title}>Индикаторы</h3>
                                <span className={styles.tab__item + ' ' + styles.tab__item_green}><span>Покупка</span> (0)</span>
                                <span className={styles.tab__item + ' ' + styles.tab__item_red}><span>Продажа</span> (0)</span>
                              </div>

                              <Table
                                type="3"
                                className={styles.tab__table}
                                columns={['s1', 's2', 's3', 'точка пивот', 'r1', 'r2', 'r3']}
                                tables={[
                                  ['77.23', '77.23', '77.23', '77.2333', '77.23', '77.23', '77.23']
                                ]} />

                              <div className={styles.tab__data}>
                                <h3 className={styles.tab__title}>Интервалы</h3>
                                <button className={styles.tab__type}>5 минут</button>
                                <button className={styles.tab__type + ' ' + styles.tab__type_active}>5 минут</button>
                                <button className={styles.tab__type}>5 минут</button>
                                <button className={styles.tab__type}>5 минут</button>
                              </div>
                            </div>

                            <div className={styles.tab__diogram}>
                              <h3 className={styles.tab__title}>Настроение инвесторов</h3>
                              <Diogram percent1="40" percent2="60" width={isMobile ? "260" : isTablet ? "488" : "158"} height="139" />
                            </div>
                          </div>
                        </>
                      </div>
                    </Tabs>
                  </div>
                </>
              </div>
            </Tabs>
          </Block>

          <Block className='flex'>
            <div>
              <h2 className="title">Мировые индексы</h2>
              <API
                width="40%"
                className={styles.table}
                columns={['название', 'цена', 'курс (24Ч)']}
                template={[
                  ['???', '?? ₽ ', '+??%']
                ]} 
                func={fetchIndicesWorldRating}
                isMobile={isMobile}
              />
            </div>

            <div>
              <h2 className="title">Российские индексы</h2>
              <API
                width="40%"
                className={styles.table}
                columns={['название', 'цена', 'курс (24Ч)']}
                template={[
                  ['???', '?? ₽ ', '+??%']
                ]}
                func={fetchIndicesRussiaRating}
                isMobile={isMobile}
              />
            </div>
          </Block>

          <Block className='flex'>
            <div>
              <h2 className="title">Ведущие акции</h2>
              <API
                width="40%"
                className={styles.table}
                columns={['название', 'цена', 'курс (24Ч)']}
                template={[
                  ['???', '?? $ ', '+??%']
                ]} 
                func={fetchStocksWorldRating}
                isMobile={isMobile}
              />
            </div>

            <div>
              <h2 className="title">Российские акции</h2>
              <API
                width="40%"
                className={styles.table}
                columns={['название', 'цена', 'курс (24Ч)']}
                template={[
                  ['???', '?? ₽ ', '+??%']
                ]} 
                func={fetchStocksRussiaRating}
                isMobile={isMobile}
              />
            </div>
          </Block>

          <Block className='flex'>
            <div>
              <h2 className="title">Финансовые фьючерсы</h2>
              <Table
                width="30%"
                className={styles.table}
                columns={['название', 'цена', 'курс (24Ч)', 'месяц']}
                tables={[
                  ['Euro BTP', '4 418 ₽ ', '+1%', '02.22'],
                  ['Euro BTP', '4 418 ₽ ', '+1%', '02.22'],
                  ['Euro BTP', '4 418 ₽ ', '+1%', '02.22']
                ]} />
            </div>

            <div>
              <h2 className="title">ETF</h2>
              <API
                width="40%"
                className={styles.table}
                columns={['название', 'цена', 'курс (24Ч)']}
                template={[
                  ['???', '?? ₽ ', '+??%']
                ]} 
                func={fetchETFRating}
                isMobile={isMobile}
              />
            </div>
          </Block>

          <Block className='flex'>
            <div>
              <h2 className="title">Индексные фьючерсы</h2>
              <Table
                width="30%"
                className={styles.table}
                columns={['название', 'цена', 'курс (24Ч)', 'месяц']}
                tables={[
                  ['S&P 500', '4 418 ₽ ', '+1%', '02.22'],
                  ['S&P 500', '4 418 ₽ ', '+1%', '02.22'],
                  ['S&P 500', '4 418 ₽ ', '+1%', '02.22']
                ]} />
            </div>

            <div>
              <h2 className="title">Товары</h2>
              <API
                width="30%"
                className={styles.table}
                columns={['название', 'цена', 'курс (24Ч)']}
                template={[
                  ['???', '?? ₽ ', '+??%']
                ]}
                func={fetchMetalsRating}
                isMobile={isMobile}
              />
            </div>
          </Block>
        </>

        <>
          <RightBlock title="Вебинары">
            <Webinar
              title="Alvexo - 3 of the Best Short Term Trading Strategies"
              date="15.02 | 03:00PM EST" />

            <Webinar
              title="Alvexo - 3 of the Best Short Term Trading Strategies"
              date="15.02 | 03:00PM EST" />

            <Webinar
              title="Alvexo - 3 of the Best Short Term Trading Strategies"
              date="15.02 | 03:00PM EST" />
          </RightBlock>

          <Block className={styles.ad}>
            <Ad width="100%" height="500px" />
          </Block>

          <RightBlock title="Топ роста">
            <API
              width="39%"
              className={styles.smailtable}
              columns={['название', 'цена', 'курс (24Ч)']}
              template={[
                ['???', '?? ₽ ', '+??%']
              ]} 
              func={fetchTopHighStocksRating}
              isMobile={isMobile}
            />
          </RightBlock>

          <RightBlock title="Топ падения">
            <API
              width="39%"
              className={styles.smailtable}
              columns={['название', 'цена', 'курс (24Ч)']}
              template={[
                ['???', '?? ₽ ', '-??%']
              ]} 
              func={fetchTopLowStocksRating}
              isMobile={isMobile}
            />
          </RightBlock>

          <RightBlock title="Рейтинги ЦБ">
            <Table
              width="30%"
              type="2"
              className={styles.smailtable}
              columns={['банк', 'ставка', 'встреча']}
              tables={[
                ['CBR', '8.5%', '2.02.22'],
                ['CBR', '8.5%', '2.02.22'],
                ['CBR', '8.5%', '2.02.22'],
              ]} />
          </RightBlock>

          <RightBlock title="Инфляция">
            <Table
              width="39%"
              className={styles.smailtable}
              columns={['страна', 'валюта', 'инфляция']}
              tables={[
                ['Россия', 'Рубль', '6,6%'],
                ['Россия', 'Рубль', '6,6%'],
                ['Россия', 'Рубль', '6,6%']
              ]} />
          </RightBlock>

          <Block className={styles.ad}>
            <Ad width="100%" height="896px" />
          </Block>
        </>
      </TwoBlocks>
    </Page>
  )
}