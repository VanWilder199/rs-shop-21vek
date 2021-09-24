import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-features',
  templateUrl: './description-features.component.html',
  styleUrls: ['./description-features.component.scss']
})
export class DescriptionFeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  advantages = [
    {
      header: 'Гарантия качества',
      content:
        'Мы продаем только сертифицированный товар с гарантией сервисных центров, чек прилагается.',
      img: 'https://www.21vek.by/img/tmp/adventage-1.jpg',
    },
    {
      header: 'Доставка по всей Беларуси',
      content:
        'Мы доставляем заказы в Минск, Брест, Витебск, Гомель, Гродно, Могилев и в любую другую точку Беларуси!',
      img: 'https://www.21vek.by/img/tmp/adventage-2.jpg',
    },
    {
      header: 'Надежный сервис',
      content:
        'Мы предлагаем услуги по сборке, установке, настройке, гарантийному и послегарантийному обслуживанию товаров.',
      img: 'https://www.21vek.by/img/tmp/adventage-3.jpg',
    },
    {
      header: 'Честные цены',
      content:
        'Все цены, указанные на сайте, действительны и актуальны — данные обновляются автоматически.',
      img: 'https://www.21vek.by/img/tmp/adventage-4.jpg',
    },
    {
      header: 'Кредит «не выходя из дома»',
      content:
        'Вы можете выбрать кредит среди предложений ведущих банков, рассчитать и оформить его, не выходя из дома.',
      img: 'https://www.21vek.by/img/tmp/adventage-5.jpg',
    },
    {
      header: 'Выгодные покупки',
      content:
        'Наш онлайн-гипермаркет предлагает вам выгодные акции, скидки и собственную бонусную программу.',
      img: 'https://www.21vek.by/img/tmp/adventage-6.jpg',
    },
  ];

}
