import React from 'react'
import { plyonkii } from '../data'

const PlyonkiHyundai = () => {
    return (
        <div className='w-full max-w-7xl mx-auto px-5'>
            <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold py-[15px]'>Экстерьерные ламинационные плёнки Hyundai</h2>
            <div className='grid w-full lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 py-10'>
                {plyonkii.map((plyonki) => {
                    return (
                        <div key={plyonki.id}>
                            <div>
                                <img src={plyonki.img} alt="plyongi.png" />
                                <p className='text-2xl font-medium'>{plyonki.name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <p>В 2018 году на российском рынке экстерьерных пленок появился новый игрок под известным корейским брендом Hyundai. С тех пор высокое качество пленок Hyundai оценили многие ламинационные компании как в России, так и в странах бывшего СНГ.</p><br />
            <p>Пожалуй, одним из главных преимуществ пленок Hyundai являются высококачественные материалы, из которых они изготавливаются. Верхний слой пленки Hyundai – это прозрачная ПММА пленка (полиметилметакрилат) толщиной 70 мкм. Именно этот слой защищает пленку от выцветания. Далее идет слой печатной краски. После этого – тонированная базовая ПВХ пленка c инфракрасным отражающим пигментом и добавкой, защищающей от чрезмерного накопления тепла в профиле. Четвертый слой – это праймер, который усиливает адгезию при нанесении пленки на профиль.</p><br />
            <p>Акриловый слой пленки Hyundai увеличен до 70 мкм, в то время как у большинства экстерьерных пленок он составляет 50 мкм, а иногда и меньше этого минимально допустимого уровня. Более толстый слой акрила позволяет надежнее защитить пленку от ударов, царапин, суровых погодных условий, выцветания. Кроме того, акриловый слой 70 мкм прослужит дольше, чем слой 50 мкм. Профессионалам оконного рынка хорошо известно, что, к сожалению, с каждым годом снижается качество ПВХ профиля. Многие производители экономят как на материалах, так и на толщине наружной стенки профиля. Результатом такой экономии становится то, что профиль в готовом изделии начинает выгибать «винтом» даже в регионах с холодным климатом. Что уж говорить о тех регионах, где температура летом достигает +30° С и выше, где очень активное солнце. В такой ситуации крайне важно выбирать для ламинации качественную экстерьерную пленку с надежной защитой от нагрева. Специалисты компании Hyundai разработали и успешно применяют во всех экстерьерных пленках HRT (Heat Reflection Technology) – технологию теплоотражения или, иначе говоря, защиту от нагревания. Данная технология предотвращает перегрев ПВХ профиля под пленкой Hyundai при воздействии солнечных лучей (инфракрасного излучения). Использование пленки Hyundai понижает риск возможной деформации профиля при высоких температурах окружающей среды. Пленки Hyundai имеют сертификат RAL – это своего рода знак качества на рынке ламинационных пленок. Это значит, что пленки Hyundai прошли все испытания SKZ и могут успешно продаваться по всему миру, в том числе и в Европе, где, как известно, самые строгие требования к теплотехническим характеристикам светопрозрачных конструкций. Наличие сертификата RAL можно проверить на независимом сайте www.gkfp.de. Из российских сертификатов имеется обязательный пожарный сертификат и сертификат ГОСТ. Пленка Hyundai популярна не только в Корее. В Турции, где активное солнце и много приморских территорий, ежегодно перерабатывается свыше 4 млн кв. м пленки Hyundai, а в России за 2019 год продано более 1 млн кв. метров. Очевидно, что до объемов переработки в Турции России еще далеко, но не будем забывать, что пленка Hyundai здесь всего 2 года, а рынок, как известно, очень конкурентный. С каждым годом пленка Hyundai пользуется все большей популярностью, она очень востребована. В настоящее время в России пленку Hyundai перерабатывают уже более 100 компаний.</p><br />
            <p>Сегодня на складе в Москве имеется 26 наиболее популярных декоров Hyundai: золотой дуб, темный дуб, золотой орех, антрацитово серый, шоколадно коричневый и т. д. Бухты есть как стандартной ширины 660 мм, так и шириной 1320 мм. Пленки режутся по необходимым размерам и доставляются до терминала любой транспортной компании в Москве. Палитра представленных в России декоров регулярно расширяется в соответствии с потребностями наших клиентов (ближе к лету появится ещё 4 цвета).</p><br />
            <p>За пленками Hyundai вся мощь и весь опыт огромного корейского конгломерата Hyundai Group, который смог предоставить российским переработчикам продукт с улучшенными техническими характеристиками, с бОльшим запасом долговечности, при этом по сверхпривлекательной цене. Hyundai – один из самых знаменитых и успешных в России брендов, продавать который легко!</p>
            <div className='py-12'>
                <a href="./img/sertifikat.jpg" download={'pismo.pdf'} className='underline text-xl'>Скачать гарантийное письмо Hyundai для экстерьерных плёнок</a>
            </div>
        </div>
    )
}

export default PlyonkiHyundai