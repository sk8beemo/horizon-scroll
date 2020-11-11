import React from 'react';
import './App.css';
import {Card, Col, Container, Image as Imageq, Row} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

class Horizon extends React.Component {
    state = {
        activeModule: {
            id: 1,
            title: 'ЗНАКОМСТВО С ПРОГРАММОЙ',
            lessons: [
                {
                    id: 1,
                    title: 'ЗАЧЕМ ДИЗАЙНЕРУ SKETCHUP',
                    description: ['В уроке рассказываем о том, КАК, ГДЕ и ЗАЧЕМ дизайнер может применять программу.',
                        'Показываем готовые проекты студии Afonskaya&Trofimova, созданные в SketchUp.',
                        'И объясняем связь технических характеристик компьютера и вашего результат.'],
                    advancedMath: '',
                    advancedLinkText: '',
                    advancedLink: '#',
                    imageLink: 'https://static.tildacdn.com/tild3739-3937-4565-a461-376637313238/0101___SketchUp__1.jpg',
                    btnText: 'СМОТРЕТЬ БЕСПЛАТНО',
                    btnLink: 'https://homeprolive.getcourse.ru/su3_acquaintance',
                },
                {
                    id: 2,
                    title: 'ЭТАПЫ ПРОЕКТИРОВАНИЯ ИНТЕРЬЕРА В SKETCHUP',
                    description: ['На уроке мы выдадим вам алгоритм грамотного проектирования интерьера в SketchUp.',
                        'Покажем результаты студентов практического модуля.',
                        'И объясним, каких роковых ошибок нужно избегать, чтобы добиться нужного результата и сэкономить время.'],
                    advancedMath: '',
                    advancedLinkText: '',
                    advancedLink: '#',
                    imageLink: 'https://static.tildacdn.com/tild3937-6430-4264-b531-646531366435/0102_____SketchUp__1.jpg',
                    btnText: 'СМОТРЕТЬ БЕСПЛАТНО',
                    btnLink: 'https://homeprolive.getcourse.ru/su3_acquaintance',
                },
            ]
        },
        activeLesson: {
            id: 1,
            title: 'ЗАЧЕМ ДИЗАЙНЕРУ SKETCHUP',
            description: ['В уроке рассказываем о том, КАК, ГДЕ и ЗАЧЕМ дизайнер может применять программу.',
                'Показываем готовые проекты студии Afonskaya&Trofimova, созданные в SketchUp.',
                'И объясняем связь технических характеристик компьютера и вашего результат.'],
            advancedMath: '',
            advancedLinkText: '',
            advancedLink: '#',
            imageLink: 'https://static.tildacdn.com/tild3739-3937-4565-a461-376637313238/0101___SketchUp__1.jpg',
            btnText: 'СМОТРЕТЬ БЕСПЛАТНО',
            btnLink: 'https://homeprolive.getcourse.ru/su3_acquaintance',
        },
        modules: [
            {
                id: 1,
                title: 'ЗНАКОМСТВО С ПРОГРАММОЙ',
                lessons: [
                    {
                        id: 1,
                        title: 'ЗАЧЕМ ДИЗАЙНЕРУ SKETCHUP',
                        description: ['В уроке рассказываем о том, КАК, ГДЕ и ЗАЧЕМ дизайнер может применять программу.',
                            'Показываем готовые проекты студии Afonskaya&Trofimova, созданные в SketchUp.',
                            'И объясняем связь технических характеристик компьютера и вашего результат.'],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '#',
                        imageLink: 'https://static.tildacdn.com/tild3739-3937-4565-a461-376637313238/0101___SketchUp__1.jpg',
                        btnText: 'СМОТРЕТЬ БЕСПЛАТНО',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_acquaintance',
                    },
                    {
                        id: 2,
                        title: 'ЭТАПЫ ПРОЕКТИРОВАНИЯ ИНТЕРЬЕРА В SKETCHUP',
                        description: ['На уроке мы выдадим вам алгоритм грамотного проектирования интерьера в SketchUp.',
                            'Покажем результаты студентов практического модуля.',
                            'И объясним, каких роковых ошибок нужно избегать, чтобы добиться нужного результата и сэкономить время.'],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '#',
                        imageLink: 'https://static.tildacdn.com/tild3937-6430-4264-b531-646531366435/0102_____SketchUp__1.jpg',
                        btnText: 'СМОТРЕТЬ БЕСПЛАТНО',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_acquaintance',
                    },
                ]
            },
            {
                id: 2,
                title: 'БАЗОВЫЙ МОДУЛЬ',
                lessons: [
                    {
                        id: 1.1,
                        title: 'ВВОДНЫЙ УРОК. ЧАСТЬ 1',
                        description: [
                            'ЧАСТЬ 1',
                            'Что будет в уроке:',
                            'Это ознакомительный урок. Мы расскажем вам о том, как проходит обучение у нас на платформе. Где и в каком формате будут проходить уроки, интерактивные занятия, занятия на практическом моделе и тестирования.',
                            'Также покажем вам где находятся методические материалы по курсу, отчёты и домашние задания.',
                            'Всем быть ОБЯЗАТЕЛЬНО!',
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '#',
                        imageLink: 'https://static.tildacdn.com/tild6530-3234-4639-b535-636537626630/020101_________2.jpg',
                        btnText: 'СМОТРЕТЬ БЕСПЛАТНО',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_base_module',
                    },
                    {
                        id: 1.2,
                        title: 'ВВОДНЫЙ УРОК. ЧАСТЬ 2',
                        description: [
                            'ЧАСТЬ 2',
                            'Что будет в уроке:',
                            '1. Разбор инструкции по установке программы. Выбор версии SketchUp. Регистрация.',
                            '2. Устройство самой программы и плагинов. Как искать. Где скачивать. Как устанавливать'
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '#',
                        imageLink: 'https://static.tildacdn.com/tild6435-6637-4665-a363-666637663162/020102_____SketchUp_.jpg',
                        btnText: 'СМОТРЕТЬ БЕСПЛАТНО',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_base_module',
                    },
                    {
                        id: 2.1,
                        title: 'часть 1 ПРИНЦИПЫ РАБОТЫ В ПРОГРАММЕ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '#',
                        imageLink: 'https://static.tildacdn.com/tild6133-3130-4332-a334-386364636166/020201____.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_base_module',
                    },
                    {
                        id: 2.2,
                        title: 'часть 2 НАСТРОЙКА РАБОЧЕГО ПОЛЯ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '#',
                        imageLink: 'https://static.tildacdn.com/tild6631-6363-4561-a661-393734353064/020202___.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_base_module',
                    },
                    {
                        id: 3,
                        title: 'ПАНЕЛЬ ОСНОВНЫХ ИНСТРУМЕНТОВ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3864-3430-4463-a638-396637653435/0203___.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_base_module',
                    },
                    {
                        id: 4,
                        title: 'РАЗБОР ИНСТРУМЕНТОВ ПРОГРАММЫ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3733-3262-4330-a333-333761636264/0204___.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_base_module',
                    },
                    {
                        id: 5,
                        title: 'НАСТРОЙКА ГОРЯЧИХ КЛАВИШ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6432-3038-4364-b039-313033663935/0205___.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_base_module',
                    },
                    {
                        id: 6,
                        title: 'СОЗДАНИЕ ЛИЧНОГО ШАБЛОНА',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3466-6234-4431-a637-363261373662/0206___.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_base_module',
                    },
                    {
                        id: 7,
                        title: 'ПОСТРОЕНИЕ ГЕОМЕТРИИ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3932-6362-4133-b836-383964323366/0207__.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_base_module',
                    },
                ]
            },
            {
                id: 3,
                title: 'ДОПОЛНИТЕЛЬНЫЕ ВОЗМОЖНОСТИ',
                lessons: [
                    {
                        id: 1,
                        title: 'УСТАНОВКА ПЛАГИНОВ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3537-3637-4836-a335-363836366363/0301__.jpg',
                        btnText: 'КУПИТЬ ЗА 500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_adv_module',
                    },
                    {
                        id: 2,
                        title: 'СОЗДАНИЕ ПЛОСКОСТЕЙ. ОБЛЕГЧЕНИЕ РАБОТЫ С ЧЕРТЕЖАМИ И СХЕМАМИ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6466-6539-4632-b836-636536363936/0302________.jpg',
                        btnText: 'КУПИТЬ ЗА 1000 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_adv_module',
                    },
                    {
                        id: 3,
                        title: 'СОЗДАНИЕ ФАСОК И СКРУГЛЕНИЙ УГЛОВ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6166-3638-4961-b234-633066356137/0303_____.jpg',
                        btnText: 'КУПИТЬ ЗА 1000 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_adv_module',
                    },
                    {
                        id: 4,
                        title: 'ВЫДЕЛЕНИЕ КРАЁВ, ПОВЕРХНОСТЕЙ, ГРУПП И КОМПОНЕНТОВ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3563-3830-4533-b238-353632396661/0304______.jpg',
                        btnText: 'КУПИТЬ ЗА 1000 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_adv_module',
                    },
                    {
                        id: 5,
                        title: 'ТРАНСФОРМИРУЕМ ОБЪЕКТЫ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3365-3064-4366-b733-373964373032/0305__.jpg',
                        btnText: 'КУПИТЬ ЗА 1000 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_adv_module',
                    },
                    {
                        id: 6,
                        title: 'СТРОИМ ПЛИНТУСЫ, КАРНИЗЫ, МОЛДИНГИ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3033-3934-4562-a566-616666303262/0306____.jpg',
                        btnText: 'КУПИТЬ ЗА 1000 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_adv_module',
                    },
                    {
                        id: 7,
                        title: 'ИМПОРТИРУЕМ И ОПТИМИЗИРУЕМ ОБЪЁМЫ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6133-6333-4161-b935-323738346233/0307____.jpg',
                        btnText: 'КУПИТЬ ЗА 1000 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_adv_module',
                    },
                    {
                        id: 8,
                        title: 'ЧИСТИМ МОДЕЛЬ И ИСПРАВЛЯЕМ ОШИБКИ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3030-3538-4962-b637-616335386135/0308_____.jpg',
                        btnText: 'КУПИТЬ ЗА 1000 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_adv_module',
                    },
                    {
                        id: 9,
                        title: 'ВИЗУАЛИЗАЦИЯ В SKETCHUP',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3632-6463-4462-b230-666138306435/0309____SketchUp.jpg',
                        btnText: 'КУПИТЬ ЗА 1000 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_adv_module',
                    },
                    {
                        id: 10,
                        title: 'РАБОТАЕМ СО СЛОЖНЫМИ ПЛОСКОСТЯМИ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6134-3233-4334-b633-353334373030/0310____.jpg',
                        btnText: 'КУПИТЬ ЗА 1000 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_adv_module',
                    },
                    {
                        id: 11,
                        title: 'ОБЪЕДЕНЯЕМ СЕГМЕНТЫ В ОДНУ СЛОЖНУЮ ЛИНИЮ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3530-3566-4534-a139-313230656561/0311______.jpg',
                        btnText: 'КУПИТЬ ЗА 1000 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_adv_module',
                    },
                    {
                        id: 12,
                        title: 'ЧИСТИМ ТЕКТСУРЫ. УДАЛЯЕМ ПРИМЕНЁННЫЕ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3434-3935-4134-b239-383731613737/0312____.jpg',
                        btnText: 'КУПИТЬ ЗА 1000 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_adv_module',
                    },
                    {
                        id: 13,
                        title: 'СТРОИМ ЛЕСТНИЦЫ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3266-3462-4139-b133-633430393838/0313__.jpg',
                        btnText: 'КУПИТЬ ЗА 1000 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_adv_module',
                    },
                    {
                        id: 14,
                        title: 'ПРЕОБРАЗОВЫВАЕМ ЭЛЕМЕНТЫ И КОМПОНЕНТЫ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6430-6333-4365-b930-353138663065/0314____.jpg',
                        btnText: 'КУПИТЬ ЗА 1000 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_adv_module',
                    },
                    {
                        id: 15,
                        title: 'ИЗГИБАЕМ ГРУППЫ И КОМПОНЕНТЫ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3831-6134-4935-a166-366633636633/0315____.jpg',
                        btnText: 'КУПИТЬ ЗА 1000 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_adv_module',
                    },
                    {
                        id: 16,
                        title: 'РАБОТАЕМ С ТКАНЯМИ И ДРАПИРОВКАМИ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6136-3336-4831-b837-306562363737/0316_____.jpg',
                        btnText: 'КУПИТЬ ЗА 1000 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_adv_module',
                    },
                ]
            },
            {
                id: 4,
                title: 'ГОТОВЫЕ МОДЕЛИ И ТЕКСТУРИРОВАНИЕ',
                lessons: [
                    {
                        id: 1,
                        title: 'СТРУКТУРИРОВАНИЕ СОБСТВЕННОЙ БИБЛИОТЕКИ МОДЕЛЕЙ И ТЕКСТУР',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6665-6261-4537-b439-373862616534/0401______.jpg',
                        btnText: 'КУПИТЬ ЗА 500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_rm_module',
                    },
                    {
                        id: 2,
                        title: 'ПОИСК И СОЗДАНИЕ БЕСШОВНЫХ ТЕКСТУР И МАСОК',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6362-6639-4333-a632-323065633165/0402_______.jpg',
                        btnText: 'КУПИТЬ ЗА 500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_rm_module',
                    },
                    {
                        id: 3,
                        title: 'СТАНДАРТНЫЕ ИНСТРУМЕНТЫ ДЛЯ СОЗДАНИЯ СЛОЖНЫХ ТЕКСТУР',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3235-3137-4365-a631-643736313662/0403______.jpg',
                        btnText: 'КУПИТЬ ЗА 500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_rm_module',
                    },
                    {
                        id: 4,
                        title: 'РАБОТА С РЕАЛИСТИЧНЫМИ ТЕКСТУРАМИ НА ВИЗУАЛИЗАЦИИ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6130-6636-4565-a565-356263343533/0404______.jpg',
                        btnText: 'КУПИТЬ ЗА 500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_rm_module',
                    },
                    {
                        id: 5,
                        title: 'РАБОТА С 3D WAREHOUSE. ОПТИМИЗАЦИЯ МОДЕЛЕЙ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6237-3563-4935-b739-633763343432/0405___3D_Warehouse_.jpg',
                        btnText: 'КУПИТЬ ЗА 500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_rm_module',
                    },
                    {
                        id: 6,
                        title: 'РАБОТА С МОДЕЛЯМИ ДЛЯ 3D MAX. ОПТИМИЗАЦИЯ МОДЕЛЕЙ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6435-3934-4332-b731-363539356338/0406_____3ds_Max__.jpg',
                        btnText: 'КУПИТЬ ЗА 500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_rm_module',
                    },
                    {
                        id: 7,
                        title: 'РАБОТА С СЕРВИСОМ 3DUD',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3361-6261-4836-b639-343662636639/0407____3DUD.jpg',
                        btnText: 'СМОТРЕТЬ БЕСПЛАТНО',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_rm_module',
                    },
                    {
                        id: 8,
                        title: 'ИСПОЛЬЗОВАНИЕ ВСТРОЕННОЙ БИБЛИОТЕКИ ПРИ ВИЗУАЛИЗАЦИИ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6463-6232-4631-a438-363230663130/0408_____.jpg',
                        btnText: 'КУПИТЬ ЗА 500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_rm_module',
                    },
                    {
                        id: 9,
                        title: 'ОПТИМИЗАЦИЯ. УМЕНЬШЕНИЕ ВЕСА. УВЕЛИЧЕНИЕ СКОРОСТИ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3662-6436-4738-b963-353234633962/0409_____.jpg',
                        btnText: 'КУПИТЬ ЗА 500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_rm_module',
                    },
                ]
            },
            {
                id: 5,
                title: 'ПРАКТИЧЕСКИЙ МОДУЛЬ',
                lessons: [
                    {
                        id: 1,
                        title: 'ПОСТРОЕНИЕ ГЕОМЕТРИИ ПОМЕЩЕНИЯ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3738-3066-4830-a436-656334383234/0501___.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_practise_module',
                    },
                    {
                        id: 2,
                        title: 'ДЕТАЛИЗАЦИЯ ОБЪЁМА',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3861-3530-4432-b432-376437366333/0502__.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_practise_module',
                    },
                    {
                        id: 3,
                        title: 'ПРОСТОЕ  ТЕКСТУРИРОВАНИЕ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3961-3566-4364-a561-353031316630/0503__.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_practise_module',
                    },
                    {
                        id: 4,
                        title: 'НАСТРОЙКА ДИНАМИЧЕСКИХ КОМПОНЕНТОВ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3466-3031-4237-b964-366139383465/0504___.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_practise_module',
                    },
                    {
                        id: 5,
                        title: 'РАБОТА НАД ОШИБКАМИ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3833-6561-4164-b431-373036396137/0505___.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_practise_module',
                    },
                    {
                        id: 6,
                        title: 'ВИД ЗА ОКНОМ ПРОСТАЯ АНИМАЦИЯ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3835-6535-4434-b535-666432396431/0506_____.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_practise_module',
                    },
                    {
                        id: 7,
                        title: 'ВИД ЗА ОКНОМ И ЕСТЕССТВЕННОЕ ОСВЕЩЕНИЯ ДЛЯ ВИЗУАЛИЗАЦИИ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6531-3837-4033-b737-646531386434/0507________.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_practise_module',
                    },
                    {
                        id: 8,
                        title: 'НАСТРОЙКА ТЕКСТУР ДЛЯ ВИЗУАЛИЗАЦИИ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6337-3130-4531-a539-366438316262/0508____.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_practise_module',
                    },
                    {
                        id: 9,
                        title: 'НАСТРОЙКА СВЕТА ДЛЯ ВИЗУАЛИЗАЦИИ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3037-6637-4035-b033-396261643538/0509____.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_practise_module',
                    },
                    {
                        id: 10,
                        title: 'ВИЗУАЛИЗАЦИЯ. СОЗДАНИЕ КАРТИНОК И ПАНОРАМ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6562-3134-4261-b566-333434616139/0510_____.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_practise_module',
                    },
                    {
                        id: 11,
                        title: 'ВИЗУАЛИЗАЦИЯ. СОЗДАНИЕ ВИДЕО-РОЛИКА',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3039-6163-4261-a364-326432643736/0511___-.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_practise_module',
                    },
                    {
                        id: 12,
                        title: 'СОХРАНЕНИЕ МОДЕЛЕЙ В СВОЮ БИБЛИОТЕКУ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3462-3033-4532-a532-636265366366/0512_____.jpg',
                        btnText: 'КУПИТЬ ЗА 500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_practise_module',
                    },
                    {
                        id: 13,
                        title: 'СОЗДАНИЕ ШАБЛОНА. ВЫГРУЗКА МОДЕЛЕЙ НА САЙТ 3DUD.RU',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3465-6631-4432-a362-343065356163/0513_______3DUDRU.jpg',
                        btnText: 'СМОТРЕТЬ БЕСПЛАТНО',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_practise_module',
                    },
                    {
                        id: 14,
                        title: 'РАБОТА С ВИДЕО И МУЗЫКОЙ. ВОДЯНЫЕ ЗНАКИ И QR КОДЫ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3836-6631-4163-b434-373730333330/0514________QR_.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_practise_module',
                    },
                ]
            },
            {
                id: 6,
                title: 'АНИМАЦИЯ. РАЗРЕЗЫ. ТЕНИ',
                lessons: [
                    {
                        id: 1,
                        title: 'НАСТРОЙКА ВИДА ЗА ОКНОМ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3864-6437-4438-a464-386631663330/0601____.jpg',
                        btnText: 'КУПИТЬ ЗА 500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_animation_module',
                    },
                    {
                        id: 2,
                        title: 'ПРИМЕНЕНИЕ РАЗРЕЗОВ И ВИДОВ В ГОТОВОЙ МОДЕЛИ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3931-6463-4839-b132-663963353438/0602_______.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_animation_module',
                    },
                    {
                        id: 3,
                        title: 'СОЗДАНИЕ АНИМАЦИИ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3561-6332-4534-b661-653462353536/0603__.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_animation_module',
                    },
                    {
                        id: 4,
                        title: 'СОЗДАНИЕ ТЗ ДЛЯ СМЕЖНИКОВ (МЕБЕЛЬ И ДРУГИЕ)',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3633-3564-4132-b938-643436356631/0604_______.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_animation_module',
                    },
                ]
            },
            {
                id: 7,
                title: 'ВИЗУАЛИЗАЦИЯ. ВИДЕО. ПАНОРАМЫ',
                lessons: [
                    {
                        id: 1,
                        title: 'НАСТРОЙКА ВИДА И ЕСТЕССТВЕННОГО ОСВЕЩЕНИЯ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6338-6661-4234-a263-386562636431/0701_____.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_visualization_module_',
                    },
                    {
                        id: 2,
                        title: 'НАСТРОЙКА ИСКУССТВЕННОГО ОСВЕЩЕНИЯ. ПОДСВЕТКИ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3263-6565-4533-b234-636632353135/0702____.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_visualization_module_',
                    },
                    {
                        id: 3,
                        title: 'ТЕКСТУРЫ В ГОТОВОМ ИНТЕРЬЕРЕ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3164-6232-4431-b532-333263323231/0703____.jpg',
                        btnText: 'КУПИТЬ ЗА 500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_visualization_module_',
                    },
                    {
                        id: 4,
                        title: 'ПРАВИЛА ПОИСКА РАКУРСОВ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3533-3739-4336-b631-326263306466/0704___.jpg',
                        btnText: 'КУПИТЬ ЗА 500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_visualization_module_',
                    },
                    {
                        id: 5,
                        title: 'ВИЗУАЛИЗАЦИЯ: СТАТИЧНОЕ ИЗОБРАЖЕНИЕ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3534-3030-4131-a362-353638643566/0705___.jpg',
                        btnText: 'КУПИТЬ ЗА 500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_visualization_module_',
                    },
                    {
                        id: 6,
                        title: 'ВИЗУАЛИЗАЦИЯ: ПАНОРАМА',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6530-6431-4832-b631-333963613533/0706__.jpg',
                        btnText: 'КУПИТЬ ЗА 500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_visualization_module_',
                    },
                    {
                        id: 7,
                        title: 'ВИЗУАЛИЗАЦИЯ: ВИДЕО',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6562-3932-4865-b133-336565326662/0707__.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_visualization_module_',
                    },
                ]
            },
            {
                id: 8,
                title: 'ПРЕЗЕНТАЦИЯ ИНТЕРЬЕРА',
                lessons: [
                    {
                        id: 1,
                        title: 'ПРЕЗЕНТАЦИЯ МОДЕЛИ НА РАЗНЫХ ЭТАПАХ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3865-6231-4735-b063-386436336139/0801_____.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_presentation_module',
                    },
                    {
                        id: 2,
                        title: 'ПЕРЕНОС НА МОБИЛЬНОЕ УСТРОЙСТВО',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild3530-3039-4532-a665-643538346133/0802____.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_presentation_module',
                    },
                    {
                        id: 3,
                        title: 'РАБОТА С QR КОДОМ',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6339-3135-4364-a261-663164346565/0803___QR_.jpg',
                        btnText: 'КУПИТЬ ЗА 500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_presentation_module',
                    },
                    {
                        id: 4,
                        title: 'ПРЕЗЕНТАЦИЯ. ИСПОЛЬЗОВАНИЕ В СОЦ. СЕТЯХ И ПОРТФОЛИО',
                        description: [
                            '', ''
                        ],
                        advancedMath: '',
                        advancedLinkText: '',
                        advancedLink: '',
                        imageLink: 'https://static.tildacdn.com/tild6333-3138-4135-a361-663666613834/0804_______.jpg',
                        btnText: 'КУПИТЬ ЗА 1500 Р.',
                        btnLink: 'https://homeprolive.getcourse.ru/su3_presentation_module',
                    },
                ]
            },
        ]
    }

    moduleClickHandler(module) {
        this.setState({
            ...this.state,
            activeModule: module,
        })
    }

    renderModules() {
        return this.state.modules.map((module) => {
            let cls = ['mobile__card-body']
            if (module.id === this.state.activeModule.id) {
                cls = ['mobile__card-body', 'mobile__card-body__active']
            }
            return (
                <Col key={module.id}>
                    <Card onClick={() => {this.moduleClickHandler(module)}}>
                        <Card.Body className={cls.join(' ')}>
                            <Card.Title className="mobile__card-title">#{module.id}</Card.Title>
                            <Card.Text className="mobile__card-text">
                                {module.title}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }

    renderLessons(module) {
        return module.lessons.map((lesson) => {
            return (
                <Col key={lesson.id}>
                    <Card>
                        <Card.Body className="mobile__lesson">
                            <Card.Title className="mobile__lesson-title">
                                УРОК {lesson.id} <br/>
                                <span>{lesson.title}</span>
                            </Card.Title>
                            <Card.Text className="mobile__lesson-text">
                                {
                                    lesson.description[0].length > 0
                                    ? lesson.description.map((item, index) => {
                                            return <span key={index}>
                                                  {item} <br/>
                                               </span>
                                        })
                                    : <span>
                                          Описание урока появится на платформе позже <br/>
                                       </span>
                                }
                                <br/><br/>
                                {
                                    lesson.advancedMath.length > 0
                                    && <>
                                        ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ К УРОКУ:  <br/>
                                        {lesson.advancedMath} <br/>
                                        <a href={lesson.advancedLink}>&lt; {lesson.advancedLinkText} &gt;</a>
                                    </>
                                }
                            </Card.Text>
                            <Imageq src={lesson.imageLink} alt={lesson.title} fluid />
                            <a className="mobile__lesson-link" href={lesson.btnLink}>
                                <div className="mobile__lesson-btnText">
                                    {lesson.btnText}
                                </div>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }

    render() {
        return (
            <Container className="mobile__wrapper">
                <Row className="mobile__row">
                    {this.renderModules()}
                </Row>
                <Row className="mobile__module-info">
                    <Col>
                        #{this.state.activeModule.id} {this.state.activeModule.title} <br/>
                        {
                            this.state.activeModule.lessons.length === 2
                            ? <>{this.state.activeModule.lessons.length} УРОКА</>
                            : this.state.activeModule.lessons.length === 4
                                ? <>{this.state.activeModule.lessons.length} УРОКА</>
                                : <>{this.state.activeModule.lessons.length} УРОКОВ</>
                        }
                    </Col>
                </Row>
                <Row className="mobile__lessons-row">
                    {this.renderLessons(this.state.activeModule)}
                </Row>
            </Container>
        )
    }
}

export default Horizon;
