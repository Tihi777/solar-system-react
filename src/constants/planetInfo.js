const PLANET_INFO = {
  Солнце: {
    type: 'Желтый карлик',
    diameter: '1.39М км',
    mass: {
      base: '1.99',
      exponent: '30',
    },
    distanceFromSun: '26 038 сл',
    rotationPeriod: '25 дни',
    rotationPeriodAroundSun: '225М годы',
    gravity: '275',
    temperature: '5 505',
    description: 'Солнце это звезда в центре Солнечной системы. Масса Солнца состовляет 99,86% общей массы Солнечной системы.',
  },
  Меркурий: {
    type: 'Планета',
    diameter: '4 879 км',
    mass: {
      base: '3.3',
      exponent: '23',
    },
    distanceFromSun: '58.6M км',
    rotationPeriod: '59 дни',
    rotationPeriodAroundSun: '88 дни',
    gravity: '3.7',
    temperature: '167',
    description: 'Меркурий самая маленькая планета Солнечной системы. Поскольку у него нет атмосферы, чтобы сохранять тепло, его поверхность испытывает самый большой перепад температуры по сравнению с другими планетами.',
  },
  Венера: {
    type: 'Планета',
    diameter: '12 104 км',
    mass: {
      base: '4.9',
      exponent: '24',
    },
    distanceFromSun: '108M км',
    rotationPeriod: '243 дни',
    rotationPeriodAroundSun: '225 дни',
    gravity: '8.9',
    temperature: '462',
    description: 'Хотя Венера подобна по размеру и внутренней структуре Земле, ее вулканическая поверхность, жаркая и плотная атмосфера, делают ее одним из самых негостеприимных мест Солнечной системы.',
  },
  Земля: {
    type: 'Планета',
    diameter: '12 756 км',
    mass: {
      base: '6',
      exponent: '24',
    },
    distanceFromSun: '150M км',
    rotationPeriod: '23 ч 56 мин',
    rotationPeriodAroundSun: '1 год',
    gravity: '9.8',
    temperature: '15',
    description: 'Наша планета самая плотная из 8 планет Солнечной системы. Она также самая большая из четырех планет Земной группы.',
  },
  Марс: {
    type: 'Планета',
    diameter: '6 792 км',
    mass: {
      base: '6.4',
      exponent: '23',
    },
    distanceFromSun: '230M км',
    rotationPeriod: '1.03 день',
    rotationPeriodAroundSun: '1.88 год',
    gravity: '9.8',
    temperature: '15',
    description: 'Марс это четвертая планета от Солнца и вторая самая маленькая планета Солнечной системы.',
  },
  Юпитер: {
    type: 'Планета',
    diameter: '142 984 км',
    mass: {
      base: '1.9',
      exponent: '27',
    },
    distanceFromSun: '780M км',
    rotationPeriod: '9 ч 55 мин',
    rotationPeriodAroundSun: '11.9 годы',
    gravity: '25',
    temperature: '-120',
    description: 'Юпитер - самя большая планета Солнечной cистемы, с массой в 2,5 раза большей, чем у всех остальных вместе взятых планет, и составляющая всего 0,001% массы Солнца.',
  },
  Сатурн: {
    type: 'Планета',
    diameter: '120 536 км',
    mass: {
      base: '5.7',
      exponent: '26',
    },
    distanceFromSun: '9.56 ae',
    rotationPeriod: '10 ч 39 мин',
    rotationPeriodAroundSun: '29 годы',
    gravity: '10.4',
    temperature: '-125',
    description: 'Сатурн это шестая планета от Солнца и вторая самая большая планета Солнечной системы. Вплоть до изобретения современного телескопа, Сатурн считали самой отдаленной из планет.',
  },
  Уран: {
    type: 'Планета',
    diameter: '51 118 км',
    mass: {
      base: '8.7',
      exponent: '25',
    },
    distanceFromSun: '19.2 ае',
    rotationPeriod: '17 ч 14 мин',
    rotationPeriodAroundSun: '84 годы',
    gravity: '8.7',
    temperature: '-210',
    description: 'Уран это седьмая планета от Солнца и третий самый большой газовый гигант Солнечной системы. Он один из самых холодных планет Солнечной системы.',
  },
  Нептун: {
    type: 'Планета',
    diameter: '49 528 км',
    mass: {
      base: '1.02',
      exponent: '26',
    },
    distanceFromSun: '30.1 ае',
    rotationPeriod: '16 ч 06 мин',
    rotationPeriodAroundSun: '165 годы',
    gravity: '11.2',
    temperature: '-200',
    description: 'Нептун - восьмая и официально самая дальняя планета от Солнца. Эта самая маленькая, но самая плотная планета газовый гигант. Сила гравитации на поверхности Нептуна уступает только Юпитеру.',
  },
  Плутон: {
    type: 'Карликовая планета',
    diameter: '2 374 км',
    mass: {
      base: '1.31',
      exponent: '22',
    },
    distanceFromSun: '40.7 ае',
    rotationPeriod: '6.4 дни',
    rotationPeriodAroundSun: '248 годы',
    gravity: '0.66',
    temperature: '-228',
    description: 'Плутон это самый большой объект пояса Койпера и вторая по размеру известная карликовая планета в Солнечной системе.',
  },
};

export default PLANET_INFO;
