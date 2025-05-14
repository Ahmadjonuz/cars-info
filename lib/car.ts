export interface Car {
    id: string;
    name: string;
    brand: string;
    image: string;
    price: string;
    engine: string;
    power: string;
    acceleration: string;
    mpg: string;
    description: string;
    features: string[];
  }
  
  export const cars: Car[] = [
    // BMW Models
    {
      id: "bmw-m5",
      name: "M5",
      brand: "BMW",
      image: "/images/bmw/bmwm5.jpg",
      price: "108,900 $",
      engine: "4.4L V8 Qo'sh turbo",
      power: "617 ot kuchi",
      acceleration: "0-100 km/soat 3.2 soniyada",
      mpg: "15.7 L/100km shahar / 11.2 L/100km trassa",
      description: "BMW M5 - bu BMW 5 seriyasining yuqori samarali versiyasi. Hashamat va quvvatning ajoyib uyg'unligi bilan tanilgan M5 qo'sh turbinali V8 dvigatel, zamonaviy to'rt g'ildirakli haydash tizimi va premium ichki jihozlarga ega.",
      features: [
        "M xDrive to'rt g'ildirakli haydash tizimi",
        "8 tezlikli M Steptronic uzatmalar qutisi",
        "20 dyuymli M yengil qotishmali disklar",
        "M tormoz tizimi",
        "Merino charm qoplama",
        "BMW Live Cockpit Professional",
        "Harman Kardon surround ovoz tizimi",
        "Faol M differentsial"
      ]
    },
    {
      id: "bmw-x3",
      name: "X3",
      brand: "BMW",
      image: "/images/bmw/bmwx3.jpg",
      price: "43,700 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "248 ot kuchi",
      acceleration: "0-100 km/soat 6.0 soniyada",
      mpg: "10.2 L/100km shahar / 7.8 L/100km trassa",
      description: "BMW X3 - bu kompakt hashamatli krossover bo'lib, sport uslubidagi haydash va kundalik qulaylikni birlashtirgan.",
      features: [
        "xDrive to'rt g'ildirakli haydash",
        "8 tezlikli avtomatik uzatmalar qutisi",
        "BMW Live Cockpit Professional",
        "Panoramik lyuk",
        "Elektr yuk eshigi"
      ]
    },
    {
      id: "bmw-x3m",
      name: "X3 M",
      brand: "BMW",
      image: "/images/bmw/bmwx3m.jpg",
      price: "72,800 $",
      engine: "3.0L Qatorli-6 Qo'sh turbo",
      power: "473 ot kuchi",
      acceleration: "0-100 km/soat 4.1 soniyada",
      mpg: "14.7 L/100km shahar / 12.4 L/100km trassa",
      description: "BMW X3 M - bu X3 modelining yuqori samarali versiyasi bo'lib, M seriyasining sport uslubidagi xususiyatlarini o'zida mujassam etgan.",
      features: [
        "M xDrive to'rt g'ildirakli haydash",
        "8 tezlikli M Steptronic uzatmalar qutisi",
        "M tormoz tizimi",
        "M sport suspenziyasi",
        "M sport o'rindiqlar"
      ]
    },
    {
      id: "bmw-x4",
      name: "X4",
      brand: "BMW",
      image: "/images/bmw/bmwx4.jpg",
      price: "51,800 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "248 ot kuchi",
      acceleration: "0-100 km/soat 6.0 soniyada",
      mpg: "10.2 L/100km shahar / 7.8 L/100km trassa",
      description: "BMW X4 - bu X3 modelining sport kupe versiyasi bo'lib, dinamik dizayn va yuqori samaradorlikni birlashtirgan.",
      features: [
        "xDrive to'rt g'ildirakli haydash",
        "8 tezlikli avtomatik uzatmalar qutisi",
        "BMW Live Cockpit Professional",
        "Panoramik lyuk",
        "Elektr yuk eshigi"
      ]
    },
    {
      id: "bmw-x4m",
      name: "X4 M",
      brand: "BMW",
      image: "/images/bmw/bmwx4m.jpg",
      price: "73,600 $",
      engine: "3.0L Qatorli-6 Qo'sh turbo",
      power: "473 ot kuchi",
      acceleration: "0-100 km/soat 4.1 soniyada",
      mpg: "14.7 L/100km shahar / 12.4 L/100km trassa",
      description: "BMW X4 M - bu X4 modelining yuqori samarali versiyasi bo'lib, M seriyasining sport uslubidagi xususiyatlarini o'zida mujassam etgan.",
      features: [
        "M xDrive to'rt g'ildirakli haydash",
        "8 tezlikli M Steptronic uzatmalar qutisi",
        "M tormoz tizimi",
        "M sport suspenziyasi",
        "M sport o'rindiqlar"
      ]
    },
    {
      id: "bmw-x5",
      name: "X5",
      brand: "BMW",
      image: "/images/bmw/bmwx5.jpg",
      price: "61,600 $",
      engine: "3.0L Qatorli-6 turbo",
      power: "335 ot kuchi",
      acceleration: "0-100 km/soat 5.3 soniyada",
      mpg: "11.2 L/100km shahar / 9.0 L/100km trassa",
      description: "BMW X5 - bu o'rta o'lchamli hashamatli krossover bo'lib, ko'p qirraliligi, qulayligi va samaradorligini o'zida mujassam etgan.",
      features: [
        "xDrive to'rt g'ildirakli haydash",
        "8 tezlikli avtomatik uzatmalar qutisi",
        "Live Cockpit Professional",
        "Panoramik lyuk",
        "Elektr yuk eshigi"
      ]
    },
    {
      id: "bmw-x5m",
      name: "X5 M",
      brand: "BMW",
      image: "/images/bmw/bmwx5m.jpg",
      price: "105,100 $",
      engine: "4.4L V8 Qo'sh turbo",
      power: "600 ot kuchi",
      acceleration: "0-100 km/soat 3.8 soniyada",
      mpg: "18.1 L/100km shahar / 13.1 L/100km trassa",
      description: "BMW X5 M - bu X5 modelining yuqori samarali versiyasi bo'lib, M seriyasining sport uslubidagi xususiyatlarini o'zida mujassam etgan.",
      features: [
        "M xDrive to'rt g'ildirakli haydash",
        "8 tezlikli M Steptronic uzatmalar qutisi",
        "M tormoz tizimi",
        "M sport suspenziyasi",
        "M sport o'rindiqlar"
      ]
    },
    {
      id: "bmw-x6",
      name: "X6",
      brand: "BMW",
      image: "/images/bmw/bmwx6.jpg",
      price: "64,900 $",
      engine: "3.0L Qatorli-6 turbo",
      power: "335 ot kuchi",
      acceleration: "0-100 km/soat 5.3 soniyada",
      mpg: "11.2 L/100km shahar / 9.0 L/100km trassa",
      description: "BMW X6 - bu X5 modelining sport kupe versiyasi bo'lib, dinamik dizayn va yuqori samaradorlikni birlashtirgan.",
      features: [
        "xDrive to'rt g'ildirakli haydash",
        "8 tezlikli avtomatik uzatmalar qutisi",
        "BMW Live Cockpit Professional",
        "Panoramik lyuk",
        "Elektr yuk eshigi"
      ]
    },
    {
      id: "bmw-x6m",
      name: "X6 M",
      brand: "BMW",
      image: "/images/bmw/bmwx6m.jpg",
      price: "106,100 $",
      engine: "4.4L V8 Qo'sh turbo",
      power: "600 ot kuchi",
      acceleration: "0-100 km/soat 3.8 soniyada",
      mpg: "18.1 L/100km shahar / 13.1 L/100km trassa",
      description: "BMW X6 M - bu X6 modelining yuqori samarali versiyasi bo'lib, M seriyasining sport uslubidagi xususiyatlarini o'zida mujassam etgan.",
      features: [
        "M xDrive to'rt g'ildirakli haydash",
        "8 tezlikli M Steptronic uzatmalar qutisi",
        "M tormoz tizimi",
        "M sport suspenziyasi",
        "M sport o'rindiqlar"
      ]
    },
    {
      id: "bmw-x7",
      name: "X7",
      brand: "BMW",
      image: "/images/bmw/bmwx7.jpg",
      price: "77,850 $",
      engine: "3.0L Qatorli-6 turbo",
      power: "375 ot kuchi",
      acceleration: "0-100 km/soat 5.8 soniyada",
      mpg: "12.4 L/100km shahar / 9.8 L/100km trassa",
      description: "BMW X7 - bu BMW'ning eng mashhur va hashamatli full-size luxury SUV bo'lib, uch qatorli o'rindiq, premium jihozlar va yuqori quvvatli xususiyatlar bilan tanilgan.",
      features: [
        "xDrive to'rt g'ildirakli haydash",
        "8 tezlikli avtomatik uzatmalar qutisi",
        "Havo suspenziyasi",
        "Panoramik Sky Lounge LED tom",
        "Executive paketi"
      ]
    },
    {
      id: "bmw-2-series",
      name: "2 Series",
      brand: "BMW",
      image: "/images/bmw/bmwer2.jpg",
      price: "35,700 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "228 ot kuchi",
      acceleration: "0-100 km/soat 6.1 soniyada",
      mpg: "9.4 L/100km shahar / 6.5 L/100km trassa",
      description: "BMW 2 Series - bu kompakt sport avtomobil bo'lib, dinamik haydash va zamonaviy texnologiyalarni birlashtirgan.",
      features: [
        "8 tezlikli avtomatik uzatmalar qutisi",
        "BMW Live Cockpit Professional",
        "Sport suspenziyasi",
        "LED faralar",
        "Sport o'rindiqlar"
      ]
    },
    {
      id: "bmw-3-series",
      name: "3 Series",
      brand: "BMW",
      image: "/images/bmw/bmwer3.jpg",
      price: "41,450 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "255 ot kuchi",
      acceleration: "0-100 km/soat 5.8 soniyada",
      mpg: "9.4 L/100km shahar / 6.5 L/100km trassa",
      description: "BMW 3 Series - bu BMW'ning eng mashhur sedan avtomobili bo'lib, sport uslubidagi haydash va premium jihozlar bilan tanilgan.",
      features: [
        "8 tezlikli avtomatik uzatmalar qutisi",
        "BMW Live Cockpit Professional",
        "Sport suspenziyasi",
        "LED faralar",
        "Sport o'rindiqlar"
      ]
    },
    {
      id: "bmw-3-series-m",
      name: "M3",
      brand: "BMW",
      image: "/images/bmw/bmwer3m.jpg",
      price: "72,800 $",
      engine: "3.0L Qatorli-6 Qo'sh turbo",
      power: "473 ot kuchi",
      acceleration: "0-100 km/soat 4.1 soniyada",
      mpg: "14.7 L/100km shahar / 12.4 L/100km trassa",
      description: "BMW M3 - bu 3 Series modelining yuqori samarali versiyasi bo'lib, M seriyasining sport uslubidagi xususiyatlarini o'zida mujassam etgan.",
      features: [
        "M xDrive to'rt g'ildirakli haydash",
        "8 tezlikli M Steptronic uzatmalar qutisi",
        "M tormoz tizimi",
        "M sport suspenziyasi",
        "M sport o'rindiqlar"
      ]
    },
    {
      id: "bmw-4-series",
      name: "4 Series",
      brand: "BMW",
      image: "/images/bmw/bmwer4.jpg",
      price: "45,200 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "255 ot kuchi",
      acceleration: "0-100 km/soat 5.8 soniyada",
      mpg: "9.4 L/100km shahar / 6.5 L/100km trassa",
      description: "BMW 4 Series - bu 3 Series modelining kupe versiyasi bo'lib, dinamik dizayn va yuqori samaradorlikni birlashtirgan.",
      features: [
        "8 tezlikli avtomatik uzatmalar qutisi",
        "BMW Live Cockpit Professional",
        "Sport suspenziyasi",
        "LED faralar",
        "Sport o'rindiqlar"
      ]
    },
    {
      id: "bmw-4-series-m",
      name: "M4",
      brand: "BMW",
      image: "/images/bmw/bmwer4m.jpg",
      price: "74,700 $",
      engine: "3.0L Qatorli-6 Qo'sh turbo",
      power: "473 ot kuchi",
      acceleration: "0-100 km/soat 4.1 soniyada",
      mpg: "14.7 L/100km shahar / 12.4 L/100km trassa",
      description: "BMW M4 - bu 4 Series modelining yuqori samarali versiyasi bo'lib, M seriyasining sport uslubidagi xususiyatlarini o'zida mujassam etgan.",
      features: [
        "M xDrive to'rt g'ildirakli haydash",
        "8 tezlikli M Steptronic uzatmalar qutisi",
        "M tormoz tizimi",
        "M sport suspenziyasi",
        "M sport o'rindiqlar"
      ]
    },
    {
      id: "bmw-4-series-coupe",
      name: "4 Series Coupe",
      brand: "BMW",
      image: "/images/bmw/bmwer4cupe.jpg",
      price: "52,200 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "255 ot kuchi",
      acceleration: "0-100 km/soat 5.5 soniyada",
      mpg: "9.4 L/100km shahar / 6.5 L/100km trassa",
      description: "BMW 4 Series Coupe - bu BMW'ning sport kupe avtomobili bo'lib, zamonaviy dizayn va yuqori samaradorlik bilan tanilgan.",
      features: [
        "8 tezlikli avtomatik uzatmalar qutisi",
        "BMW Live Cockpit Professional",
        "Sport suspenziyasi",
        "LED faralar",
        "Sport o'rindiqlar"
      ]
    },
    {
      id: "bmw-7-series",
      name: "7 Series",
      brand: "BMW",
      image: "/images/bmw/bmwer7.jpg",
      price: "93,300 $",
      engine: "3.0L Qatorli-6 turbo",
      power: "375 ot kuchi",
      acceleration: "0-100 km/soat 5.1 soniyada",
      mpg: "10.5 L/100km shahar / 7.8 L/100km trassa",
      description: "BMW 7 Series - bu BMW'ning eng hashamatli sedan avtomobili bo'lib, premium jihozlar va zamonaviy texnologiyalar bilan tanilgan.",
      features: [
        "BMW Theatre Screen",
        "Executive Lounge paketi",
        "BMW Operating System 8.0",
        "BMW Live Cockpit Professional",
        "Panoramik Sky Lounge LED tom"
      ]
    },
    {
      id: "bmw-7-series-m",
      name: "M7",
      brand: "BMW",
      image: "/images/bmw/bmwer7m.jpg",
      price: "156,500 $",
      engine: "4.4L V8 Qo'sh turbo",
      power: "600 ot kuchi",
      acceleration: "0-100 km/soat 3.8 soniyada",
      mpg: "18.1 L/100km shahar / 13.1 L/100km trassa",
      description: "BMW M7 - bu 7 Series modelining yuqori samarali versiyasi bo'lib, M seriyasining sport uslubidagi xususiyatlarini o'zida mujassam etgan.",
      features: [
        "M xDrive to'rt g'ildirakli haydash",
        "8 tezlikli M Steptronic uzatmalar qutisi",
        "M tormoz tizimi",
        "M sport suspenziyasi",
        "M sport o'rindiqlar"
      ]
    },
    {
      id: "bmw-8-series-coupe",
      name: "8 Series Coupe",
      brand: "BMW",
      image: "/images/bmw/bmwer8coupe.jpg",
      price: "85,000 $",
      engine: "3.0L Qatorli-6 turbo",
      power: "335 ot kuchi",
      acceleration: "0-100 km/soat 4.7 soniyada",
      mpg: "10.2 L/100km shahar / 7.8 L/100km trassa",
      description: "BMW 8 Series Coupe - bu BMW'ning eng mashhur va hashamatli grand tourer bo'lib, elegant dizayn va yuqori quvvatli xususiyatlar bilan tanilgan.",
      features: [
        "Orqa g'ildirakli yoki xDrive to'rt g'ildirakli haydash",
        "8 tezlikli avtomatik uzatmalar qutisi",
        "Adaptiv M suspenziyasi",
        "Harman Kardon surround ovoz tizimi",
        "BMW Live Cockpit Professional"
      ]
    },
    {
      id: "bmw-8-series-m",
      name: "M8",
      brand: "BMW",
      image: "/images/bmw/bmwer8m.jpg",
      price: "130,000 $",
      engine: "4.4L V8 Qo'sh turbo",
      power: "600 ot kuchi",
      acceleration: "0-100 km/soat 3.0 soniyada",
      mpg: "18.1 L/100km shahar / 13.1 L/100km trassa",
      description: "BMW M8 - bu 8 Series modelining yuqori samarali versiyasi bo'lib, M seriyasining sport uslubidagi xususiyatlarini o'zida mujassam etgan.",
      features: [
        "M xDrive to'rt g'ildirakli haydash",
        "8 tezlikli M Steptronic uzatmalar qutisi",
        "M tormoz tizimi",
        "M sport suspenziyasi",
        "M sport o'rindiqlar"
      ]
    },
    {
      id: "bmw-8-series-cabriolet",
      name: "8 Series Cabriolet",
      brand: "BMW",
      image: "/images/bmw/bmwer8carbio.jpg",
      price: "89,300 $",
      engine: "3.0L Qatorli-6 turbo",
      power: "335 ot kuchi",
      acceleration: "0-100 km/soat 4.7 soniyada",
      mpg: "10.2 L/100km shahar / 7.8 L/100km trassa",
      description: "BMW 8 Series Cabriolet - bu 8 Series modelining ochiq versiyasi bo'lib, hashamatli kabriolet va yuqori samaradorlikni birlashtirgan.",
      features: [
        "Orqa g'ildirakli yoki xDrive to'rt g'ildirakli haydash",
        "8 tezlikli avtomatik uzatmalar qutisi",
        "Adaptiv M suspenziyasi",
        "Harman Kardon surround ovoz tizimi",
        "BMW Live Cockpit Professional"
      ]
    },
  
    // Audi Models
    {
      id: "audi-a3",
      name: "A3",
      brand: "Audi",
      image: "/images/audi/audia3.jpg",
      price: "33,900 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "201 ot kuchi",
      acceleration: "0-100 km/soat 6.8 soniyada",
      mpg: "8.4 L/100km shahar / 6.5 L/100km trassa",
      description: "Audi A3 - bu kompakt hashamatli avtomobil bo'lib, zamonaviy dizayn va yuqori samaradorlikni birlashtirgan.",
      features: [
        "quattro to'rt g'ildirakli haydash",
        "7 tezlikli S tronic qo'sh debriyaj uzatmalar qutisi",
        "Audi virtual kokpit",
        "Bang & Olufsen ovoz tizimi",
        "Audi pre sense xavfsizlik tizimlari"
      ]
    },
    {
      id: "audi-a4",
      name: "A4",
      brand: "Audi",
      image: "/images/audi/audia4.jpg",
      price: "39,100 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "261 ot kuchi",
      acceleration: "0-100 km/soat 5.5 soniyada",
      mpg: "9.4 L/100km shahar / 6.5 L/100km trassa",
      description: "Audi A4 - bu o'rta o'lchamli hashamatli sedan bo'lib, zamonaviy texnologiyalar va yuqori samaradorlikni birlashtirgan.",
      features: [
        "quattro to'rt g'ildirakli haydash",
        "7 tezlikli S tronic qo'sh debriyaj uzatmalar qutisi",
        "Audi virtual kokpit",
        "Bang & Olufsen ovoz tizimi",
        "Audi pre sense xavfsizlik tizimlari"
      ]
    },
    {
      id: "audi-a5",
      name: "A5",
      brand: "Audi",
      image: "/images/audi/audia5.jpg",
      price: "44,000 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "261 ot kuchi",
      acceleration: "0-100 km/soat 5.3 soniyada",
      mpg: "9.8 L/100km shahar / 7.6 L/100km trassa",
      description: "Audi A5 - bu Audi'ning eng mashhur va samaradorligi bilan tanlangan kompakt executive kupe bo'lib, elegant dizayn va zamonaviy texnologiyalar bilan tanilgan.",
      features: [
        "quattro to'rt g'ildirakli haydash",
        "7 tezlikli S tronic qo'sh debriyaj uzatmalar qutisi",
        "Audi virtual kokpit",
        "Bang & Olufsen ovoz tizimi",
        "Audi pre sense xavfsizlik tizimlari"
      ]
    },
    {
      id: "audi-a6",
      name: "A6",
      brand: "Audi",
      image: "/images/audi/audia6.jpg",
      price: "54,900 $",
      engine: "3.0L V6 turbo",
      power: "335 ot kuchi",
      acceleration: "0-100 km/soat 5.1 soniyada",
      mpg: "10.5 L/100km shahar / 7.8 L/100km trassa",
      description: "Audi A6 - bu o'rta o'lchamli hashamatli sedan bo'lib, premium jihozlar va zamonaviy texnologiyalar bilan tanilgan.",
      features: [
        "quattro to'rt g'ildirakli haydash",
        "8 tezlikli Tiptronic uzatmalar qutisi",
        "Audi virtual kokpit",
        "Bang & Olufsen ovoz tizimi",
        "Audi pre sense xavfsizlik tizimlari"
      ]
    },
    {
      id: "audi-a8",
      name: "A8",
      brand: "Audi",
      image: "/images/audi/audia8.jpg",
      price: "86,500 $",
      engine: "3.0L V6 turbo",
      power: "335 ot kuchi",
      acceleration: "0-100 km/soat 5.6 soniyada",
      mpg: "10.5 L/100km shahar / 7.8 L/100km trassa",
      description: "Audi A8 - bu Audi'ning eng hashamatli sedan avtomobili bo'lib, premium jihozlar va zamonaviy texnologiyalar bilan tanilgan.",
      features: [
        "quattro to'rt g'ildirakli haydash",
        "8 tezlikli Tiptronic uzatmalar qutisi",
        "Audi AI active suspension",
        "Bang & Olufsen 3D Advanced Sound System",
        "Executive Lounge paketi"
      ]
    },
    {
      id: "audi-tt",
      name: "TT",
      brand: "Audi",
      image: "/images/audi/auditt.jpg",
      price: "54,500 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "228 ot kuchi",
      acceleration: "0-100 km/soat 5.3 soniyada",
      mpg: "9.8 L/100km shahar / 7.6 L/100km trassa",
      description: "Audi TT - bu kompakt sport avtomobil bo'lib, zamonaviy dizayn va yuqori samaradorlikni birlashtirgan.",
      features: [
        "quattro to'rt g'ildirakli haydash",
        "7 tezlikli S tronic qo'sh debriyaj uzatmalar qutisi",
        "Audi virtual kokpit",
        "Bang & Olufsen ovoz tizimi",
        "Audi pre sense xavfsizlik tizimlari"
      ]
    },
    {
      id: "audi-q3",
      name: "Q3",
      brand: "Audi",
      image: "/images/audi/audiq3.jpg",
      price: "35,000 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "228 ot kuchi",
      acceleration: "0-100 km/soat 6.3 soniyada",
      mpg: "9.8 L/100km shahar / 7.6 L/100km trassa",
      description: "Audi Q3 - bu kompakt hashamatli krossover bo'lib, zamonaviy dizayn va yuqori samaradorlikni birlashtirgan.",
      features: [
        "quattro to'rt g'ildirakli haydash",
        "7 tezlikli S tronic qo'sh debriyaj uzatmalar qutisi",
        "Audi virtual kokpit",
        "Bang & Olufsen ovoz tizimi",
        "Audi pre sense xavfsizlik tizimlari"
      ]
    },
    {
      id: "audi-q4-etron",
      name: "Q4 e-tron",
      brand: "Audi",
      image: "/images/audi/audiq4etron.jpg",
      price: "49,800 $",
      engine: "Ikki elektr dvigatel",
      power: "295 ot kuchi",
      acceleration: "0-100 km/soat 6.0 soniyada",
      mpg: "2.8 L/100km",
      description: "Audi Q4 e-tron - bu kompakt elektr krossover bo'lib, zamonaviy dizayn va yuqori samaradorlikni birlashtirgan.",
      features: [
        "quattro to'rt g'ildirakli haydash",
        "2 tezlikli uzatmalar qutisi",
        "Adaptiv havo suspenziyasi",
        "800 voltli elektr arxitekturasi",
        "82 kWh quvvat sig'imi"
      ]
    },
    {
      id: "audi-q5",
      name: "Q5",
      brand: "Audi",
      image: "/images/audi/audiq5.jpg",
      price: "43,500 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "261 ot kuchi",
      acceleration: "0-100 km/soat 5.7 soniyada",
      mpg: "10.2 L/100km shahar / 8.4 L/100km trassa",
      description: "Audi Q5 - bu Audi'ning eng mashhur va samaradorligi bilan tanlangan kompakt krossover bo'lib, quvvat va qulaylikning ajoyib uyg'unligi bilan tanilgan.",
      features: [
        "quattro to'rt g'ildirakli haydash",
        "7 tezlikli S tronic qo'sh debriyaj uzatmalar qutisi",
        "Panoramik lyuk",
        "Audi MMI touch response tizimi",
        "Adaptiv kruiz nazorati"
      ]
    },
    {
      id: "audi-q8",
      name: "Q8",
      brand: "Audi",
      image: "/images/audi/audiq8.jpg",
      price: "68,200 $",
      engine: "3.0L V6 turbo",
      power: "335 ot kuchi",
      acceleration: "0-100 km/soat 5.6 soniyada",
      mpg: "10.5 L/100km shahar / 7.8 L/100km trassa",
      description: "Audi Q8 - bu hashamatli krossover bo'lib, zamonaviy dizayn va yuqori samaradorlikni birlashtirgan.",
      features: [
        "quattro to'rt g'ildirakli haydash",
        "8 tezlikli Tiptronic uzatmalar qutisi",
        "Audi virtual kokpit",
        "Bang & Olufsen ovoz tizimi",
        "Audi pre sense xavfsizlik tizimlari"
      ]
    },
    {
      id: "audi-q8-etron",
      name: "Q8 e-tron",
      brand: "Audi",
      image: "/images/audi/audiq8etron.jpg",
      price: "74,400 $",
      engine: "Ikki elektr dvigatel",
      power: "402 ot kuchi",
      acceleration: "0-100 km/soat 5.6 soniyada",
      mpg: "2.8 L/100km",
      description: "Audi Q8 e-tron - bu hashamatli elektr krossover bo'lib, zamonaviy dizayn va yuqori samaradorlikni birlashtirgan.",
      features: [
        "quattro to'rt g'ildirakli haydash",
        "2 tezlikli uzatmalar qutisi",
        "Adaptiv havo suspenziyasi",
        "800 voltli elektr arxitekturasi",
        "95 kWh quvvat sig'imi"
      ]
    },
    {
      id: "audi-r8",
      name: "R8",
      brand: "Audi",
      image: "/images/audi/audir8.jpg",
      price: "142,700 $",
      engine: "5.2L V10",
      power: "562 ot kuchi",
      acceleration: "0-100 km/soat 3.6 soniyada",
      mpg: "16.8 L/100km shahar / 10.2 L/100km trassa",
      description: "Audi R8 - bu Audi'ning eng yuqori samarali superkari bo'lib, V10 dvigatel va quattro to'rt g'ildirakli haydash tizimi bilan tanilgan.",
      features: [
        "quattro to'rt g'ildirakli haydash",
        "7 tezlikli S tronic qo'sh debriyaj uzatmalar qutisi",
        "Karbon keramik tormozlar",
        "Audi virtual kokpit",
        "Bang & Olufsen ovoz tizimi"
      ]
    },
    {
      id: "audi-rs7",
      name: "RS7",
      brand: "Audi",
      image: "/images/audi/audirs7.jpg",
      price: "118,500 $",
      engine: "4.0L V8 Qo'sh turbo",
      power: "591 ot kuchi",
      acceleration: "0-100 km/soat 3.6 soniyada",
      mpg: "16.8 L/100km shahar / 10.2 L/100km trassa",
      description: "Audi RS7 - bu A7 modelining yuqori samarali versiyasi bo'lib, RS seriyasining sport uslubidagi xususiyatlarini o'zida mujassam etgan.",
      features: [
        "quattro to'rt g'ildirakli haydash",
        "8 tezlikli Tiptronic uzatmalar qutisi",
        "RS sport suspenziyasi",
        "RS sport o'rindiqlar",
        "Bang & Olufsen ovoz tizimi"
      ]
    },
    {
      id: "audi-etron-gt",
      name: "e-tron GT",
      brand: "Audi",
      image: "/images/audi/audietrongt.jpg",
      price: "102,400 $",
      engine: "Ikki elektr dvigatel",
      power: "522 ot kuchi",
      acceleration: "0-100 km/soat 3.9 soniyada",
      mpg: "2.8 L/100km",
      description: "Audi e-tron GT - bu Audi'ning eng mashhur va hashamatli elektr avtomobili. Uning yuqori quvvatli elektr dvigatel, quattro to'rt g'ildirakli haydash va zamonaviy texnologiyalar bilan tanilgan.",
      features: [
        "quattro to'rt g'ildirakli haydash",
        "2 tezlikli uzatmalar qutisi",
        "Adaptiv havo suspenziyasi",
        "800 voltli elektr arxitekturasi",
        "93.4 kWh quvvat sig'imi"
      ]
    },
    {
      id: "audi-allnewa5",
      name: "All New A5",
      brand: "Audi",
      image: "/images/audi/allnewa5.jpg",
      price: "44,000 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "261 ot kuchi",
      acceleration: "0-100 km/soat 5.3 soniyada",
      mpg: "9.8 L/100km shahar / 7.6 L/100km trassa",
      description: "Audi All New A5 - bu Audi'ning yangi versiyasi bo'lib, zamonaviy dizayn va yuqori samaradorlikni birlashtirgan.",
      features: [
        "quattro to'rt g'ildirakli haydash",
        "7 tezlikli S tronic qo'sh debriyaj uzatmalar qutisi",
        "Audi virtual kokpit",
        "Bang & Olufsen ovoz tizimi",
        "Audi pre sense xavfsizlik tizimlari"
      ]
    },
  
    // Toyota Models
    {
      id: "toyota-supra",
      name: "GR Supra",
      brand: "Toyota",
      image: "/images/toyota/grsupra3.0.png",
      price: "52,350 $",
      engine: "3.0L Qatorli-6 turbo",
      power: "382 ot kuchi",
      acceleration: "0-100 km/soat 3.9 soniyada",
      mpg: "10.7 L/100km shahar / 7.8 L/100km trassa",
      description: "Toyota GR Supra - bu Toyota'ning sport kupe avtomobili bo'lib, yuqori samaradorlik va klassik dizayn bilan tanilgan.",
      features: [
        "8 tezlikli avtomatik uzatmalar qutisi",
        "Adaptiv suspenziya",
        "JBL Premium ovoz tizimi",
        "Toyota Supra Connect",
        "Sport o'rindiqlar"
      ]
    },
    {
      id: "toyota-supra-premium",
      name: "GR Supra Premium",
      brand: "Toyota",
      image: "/images/toyota/grsupra3.0-premium.png",
      price: "54,350 $",
      engine: "3.0L Qatorli-6 turbo",
      power: "382 ot kuchi",
      acceleration: "0-100 km/soat 3.9 soniyada",
      mpg: "10.7 L/100km shahar / 7.8 L/100km trassa",
      description: "Toyota GR Supra Premium - bu GR Supra modelining yuqori samarali versiyasi bo'lib, qo'shimcha hashamatli xususiyatlar bilan jihozlangan.",
      features: [
        "8 tezlikli avtomatik uzatmalar qutisi",
        "Adaptiv suspenziya",
        "JBL Premium ovoz tizimi",
        "Toyota Supra Connect",
        "Sport o'rindiqlar",
        "Premium charm qoplama",
        "12 dinamikli JBL ovoz tizimi",
        "Head-up display"
      ]
    },
    {
      id: "toyota-crown-platinum",
      name: "Crown Platinum",
      brand: "Toyota",
      image: "/images/toyota/crown-platinum.png",
      price: "52,350 $",
      engine: "2.4L Qatorli-4 turbo hybrid",
      power: "340 ot kuchi",
      acceleration: "0-100 km/soat 5.7 soniyada",
      mpg: "6.5 L/100km",
      description: "Toyota Crown Platinum - bu Toyota'ning hashamatli sedan avtomobili bo'lib, zamonaviy dizayn va yuqori samaradorlik bilan tanilgan.",
      features: [
        "Toyota Safety Sense 3.0",
        "12.3 dyuymli multimedia ekran",
        "JBL Premium ovoz tizimi",
        "Panoramik lyuk",
        "Heated va ventilated o'rindiqlar"
      ]
    },
    {
      id: "toyota-crown-nightshade",
      name: "Crown Nightshade",
      brand: "Toyota",
      image: "/images/toyota/crown-nightshade.png",
      price: "54,350 $",
      engine: "2.4L Qatorli-4 turbo hybrid",
      power: "340 ot kuchi",
      acceleration: "0-100 km/soat 5.7 soniyada",
      mpg: "6.5 L/100km",
      description: "Toyota Crown Nightshade - bu Crown modelining maxsus versiyasi bo'lib, qora rangli eksterer va interer elementlari bilan jihozlangan.",
      features: [
        "Toyota Safety Sense 3.0",
        "12.3 dyuymli multimedia ekran",
        "JBL Premium ovoz tizimi",
        "Panoramik lyuk",
        "Heated va ventilated o'rindiqlar",
        "Qora rangli eksterer elementlari",
        "Qora rangli 21 dyuymli disklar"
      ]
    },
    {
      id: "toyota-crown-limited",
      name: "Crown Limited",
      brand: "Toyota",
      image: "/images/toyota/crown-limited.png",
      price: "53,350 $",
      engine: "2.4L Qatorli-4 turbo hybrid",
      power: "340 ot kuchi",
      acceleration: "0-100 km/soat 5.7 soniyada",
      mpg: "6.5 L/100km",
      description: "Toyota Crown Limited - bu Crown modelining cheklangan versiyasi bo'lib, maxsus hashamatli xususiyatlar bilan jihozlangan.",
      features: [
        "Toyota Safety Sense 3.0",
        "12.3 dyuymli multimedia ekran",
        "JBL Premium ovoz tizimi",
        "Panoramik lyuk",
        "Heated va ventilated o'rindiqlar",
        "Maxsus ichki bezak",
        "Maxsus eksterer elementlari"
      ]
    },
    {
      id: "toyota-crown-xle",
      name: "Crown XLE",
      brand: "Toyota",
      image: "/images/toyota/crown-xle.png",
      price: "51,350 ",
      engine: "2.4L Qatorli-4 turbo hybrid",
      power: "340 ot kuchi",
      acceleration: "0-100 km/soat 5.7 soniyada",
      mpg: "6.5 L/100km",
      description: "Toyota Crown XLE - bu Crown modelining asosiy versiyasi bo'lib, hashamatli xususiyatlar va yuqori samaradorlikni birlashtirgan.",
      features: [
        "Toyota Safety Sense 3.0",
        "12.3 dyuymli multimedia ekran",
        "JBL Premium ovoz tizimi",
        "Panoramik lyuk",
        "Heated va ventilated o'rindiqlar"
      ]
    },
    {
      id: "toyota-corolla-le",
      name: "Corolla LE",
      brand: "Toyota",
      image: "/images/toyota/corolla-le.png",
      price: "20,425 $",
      engine: "2.0L Qatorli-4",
      power: "169 ot kuchi",
      acceleration: "0-100 km/soat 8.0 soniyada",
      mpg: "8.4 L/100km shahar / 6.5 L/100km trassa",
      description: "Toyota Corolla LE - bu Toyota'ning eng mashhur kompakt avtomobili bo'lib, ishonchliligi va samaradorligi bilan tanilgan.",
      features: [
        "Toyota Safety Sense 2.0",
        "7 dyuymli multimedia ekran",
        "Apple CarPlay va Android Auto",
        "Adaptiv kruiz nazorati",
        "Lane Departure Alert"
      ]
    },
    {
      id: "toyota-corolla-hybrid-le",
      name: "Corolla Hybrid LE",
      brand: "Toyota",
      image: "/images/toyota/corolla-hybridle.png",
      price: "23,050 $",
      engine: "1.8L Qatorli-4 Hybrid",
      power: "121 ot kuchi",
      acceleration: "0-100 km/soat 9.8 soniyada",
      mpg: "4.5 L/100km",
      description: "Toyota Corolla Hybrid LE - bu Corolla modelining gibrid versiyasi bo'lib, yuqori yoqilg'i tejamkorligi bilan tanilgan.",
      features: [
        "Toyota Safety Sense 2.0",
        "7 dyuymli multimedia ekran",
        "Apple CarPlay va Android Auto",
        "Adaptiv kruiz nazorati",
        "Lane Departure Alert",
        "Lithium-ion batareya",
        "Dual zone avtomatik iqlim nazorati"
      ]
    },
    {
      id: "toyota-corolla-se",
      name: "Corolla SE",
      brand: "Toyota",
      image: "/images/toyota/corolla-se.png",
      price: "22,425 $  ",
      engine: "2.0L Qatorli-4",
      power: "169 ot kuchi",
      acceleration: "0-100 km/soat 7.1 soniyada",
      mpg: "8.4 L/100km shahar / 6.5 L/100km trassa",
      description: "Toyota Corolla SE - bu Corolla modelining sport versiyasi bo'lib, sport uslubidagi dizayn va yaxshilangan haydash xususiyatlarini o'zida mujassam etgan.",
      features: [
        "Toyota Safety Sense 2.0",
        "7 dyuymli multimedia ekran",
        "Apple CarPlay va Android Auto",
        "Adaptiv kruiz nazorati",
        "Lane Departure Alert",
        "Sport suspenziyasi",
        "17 dyuymli alyuminiy disklar",
        "Sport o'rindiqlar"
      ]
    },
    {
      id: "toyota-corolla-fx",
      name: "Corolla FX",
      brand: "Toyota",
      image: "/images/toyota/corolla-fx.png",
      price: "22,425 $",
      engine: "2.0L Qatorli-4",
      power: "169 ot kuchi",
      acceleration: "0-100 km/soat 7.1 soniyada",
      mpg: "8.4 L/100km shahar / 6.5 L/100km trassa",
      description: "Toyota Corolla FX - bu Corolla modelining maxsus versiyasi bo'lib, unikal dizayn va qo'shimcha xususiyatlar bilan jihozlangan.",
      features: [
        "Toyota Safety Sense 2.0",
        "7 dyuymli multimedia ekran",
        "Apple CarPlay va Android Auto",
        "Adaptiv kruiz nazorati",
        "Lane Departure Alert",
        "Maxsus eksterer elementlari",
        "Maxsus ichki bezak"
      ]
    },
    {
      id: "toyota-corolla-xse",
      name: "Corolla XSE",
      brand: "Toyota",
      image: "/images/toyota/corolla-xse.png",
      price: "24,425 $",
      engine: "2.0L Qatorli-4",
      power: "169 ot kuchi",
      acceleration: "0-100 km/soat 7.1 soniyada",
      mpg: "8.4 L/100km shahar / 6.5 L/100km trassa",
      description: "Toyota Corolla XSE - bu Corolla modelining yuqori samarali versiyasi bo'lib, sport uslubidagi dizayn va qo'shimcha hashamatli xususiyatlar bilan jihozlangan.",
      features: [
        "Toyota Safety Sense 2.0",
        "7 dyuymli multimedia ekran",
        "Apple CarPlay va Android Auto",
        "Adaptiv kruiz nazorati",
        "Lane Departure Alert",
        "Sport suspenziyasi",
        "18 dyuymli alyuminiy disklar",
        "Sport o'rindiqlar",
        "Dual zone avtomatik iqlim nazorati",
        "7 dyuymli ko'p ma'lumot ekrani"
      ]
    },
    {
      id: "toyota-corolla-hybrid-xle",
      name: "Corolla Hybrid XLE",
      brand: "Toyota",
      image: "/images/toyota/corolla-hybridxle.png",
      price: "24,425 $  ",
      engine: "1.8L Qatorli-4 Hybrid",
      power: "121 ot kuchi",
      acceleration: "0-100 km/soat 9.8 soniyada",
      mpg: "4.5 L/100km",
      description: "Toyota Corolla Hybrid XLE - bu Corolla Hybrid modelining yuqori samarali versiyasi bo'lib, qo'shimcha hashamatli xususiyatlar bilan jihozlangan.",
      features: [
        "Toyota Safety Sense 2.0",
        "7 dyuymli multimedia ekran",
        "Apple CarPlay va Android Auto",
        "Adaptiv kruiz nazorati",
        "Lane Departure Alert",
        "Lithium-ion batareya",
        "Dual zone avtomatik iqlim nazorati",
        "Heated o'rindiqlar",
        "Elektr yuk eshigi"
      ]
    },
    {
      id: "toyota-corolla-hybrid-se",
      name: "Corolla Hybrid SE",
      brand: "Toyota",
      image: "/images/toyota/corolla-hybridse.png",
      price: "24,425 $",
      engine: "1.8L Qatorli-4 Hybrid",
      power: "121 ot kuchi",
      acceleration: "0-100 km/soat 9.8 soniyada",
      mpg: "4.5 L/100km",
      description: "Toyota Corolla Hybrid SE - bu Corolla Hybrid modelining sport versiyasi bo'lib, sport uslubidagi dizayn va yuqori samaradorlikni birlashtirgan.",
      features: [
        "Toyota Safety Sense 2.0",
        "7 dyuymli multimedia ekran",
        "Apple CarPlay va Android Auto",
        "Adaptiv kruiz nazorati",
        "Lane Departure Alert",
        "Lithium-ion batareya",
        "Sport suspenziyasi",
        "17 dyuymli alyuminiy disklar",
        "Sport o'rindiqlar"
      ]
    },
  
    // Mercedes-Benz Models
    {
      id: "mercedes-amg-gt",
      name: "AMG GT",
      brand: "Mercedes-Benz",
      image: "/images/mercedesbenz/mercedesamggt.jpg",
      price: "118,600 $",
      engine: "4.0L V8 Qo'sh turbo",
      power: "523 ot kuchi",
      acceleration: "0-100 km/soat 3.7 soniyada",
      mpg: "15.7 L/100km shahar / 11.8 L/100km trassa",
      description: "Mercedes-AMG GT - bu Mercedes-AMG'ning eng mashhur va hashamatli grand tourer bo'lib, ajoyib ishlash xususiyatlarini, ishlatilish qulayligini va ajoyib dizaynini birlashtirgan.",
      features: [
        "AMG SPEEDSHIFT DCT 7 tezlikli uzatmalar qutisi",
        "AMG RIDE CONTROL suspenziyasi",
        "AMG yuqori samarali kompozit tormoz tizimi",
        "AMG DYNAMIC SELECT",
        "Burmester surround ovoz tizimi"
      ]
    },
    {
      id: "mercedes-cle200amgline-cabriolet",
      name: "CLE 200 AMG Line Cabriolet",
      brand: "Mercedes-Benz",
      image: "/images/mercedesbenz/cle200amglinecabriolet.jpg",
      price: "63,900 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "255 ot kuchi",
      acceleration: "0-100 km/soat 6.2 soniyada",
      mpg: "9.8 L/100km shahar / 7.6 L/100km trassa",
      description: "Mercedes-Benz CLE 200 AMG Line Cabriolet - bu hashamatli kabriolet bo'lib, zamonaviy texnologiya va mukammal haydash tajribasini elegant dizayn bilan birlashtirgan.",
      features: [
        "9G-TRONIC 9 tezlikli avtomatik uzatmalar qutisi",
        "DYNAMIC SELECT",
        "LED Intelligent Light System",
        "12.3 dyuymli raqamli asboblar paneli",
        "11.9 dyuymli markaziy sensorli ekran",
        "AIRCAP shamol to'sqini",
        "AIRSCARF bo'yin darajasidagi isitish"
      ]
    },
    {
      id: "mercedes-cle200amgline-coupe",
      name: "CLE 200 AMG Line Coupe",
      brand: "Mercedes-Benz",
      image: "/images/mercedesbenz/cle200amglinecoupe.jpg",
      price: "56,400 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "255 ot kuchi",
      acceleration: "0-100 km/soat 6.1 soniyada",
      mpg: "9.8 L/100km shahar / 7.6 L/100km trassa",
      description: "Mercedes-Benz CLE 200 AMG Line Coupe - bu hashamatli ikki eshikli kupe bo'lib, zamonaviy texnologiya va mukammal haydash tajribasini elegant dizayn bilan birlashtirgan.",
      features: [
        "9G-TRONIC 9 tezlikli avtomatik uzatmalar qutisi",
        "DYNAMIC SELECT",
        "LED Intelligent Light System",
        "12.3 dyuymli raqamli asboblar paneli",
        "11.9 dyuymli markaziy sensorli ekran"
      ]
    },
    {
      id: "mercedes-cle200amgline-premium-cabriolet",
      name: "CLE 200 AMG Line Premium Cabriolet",
      brand: "Mercedes-Benz",
      image: "/images/mercedesbenz/cle200amglinepremiumcabriolet.jpg",
      price: "68,500 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "255 ot kuchi",
      acceleration: "0-100 km/soat 6.2 soniyada",
      mpg: "9.8 L/100km shahar / 7.6 L/100km trassa",
      description: "Mercedes-Benz CLE 200 AMG Line Premium Cabriolet - bu hashamatli kabriolet bo'lib, qo'shimcha hashamatli xususiyatlar va texnologik yangilanishlar bilan jihozlangan.",
      features: [
        "9G-TRONIC 9 tezlikli avtomatik uzatmalar qutisi",
        "DYNAMIC SELECT",
        "LED Intelligent Light System",
        "12.3 dyuymli raqamli asboblar paneli",
        "11.9 dyuymli markaziy sensorli ekran",
        "AIRCAP shamol to'sqini",
        "AIRSCARF bo'yin darajasidagi isitish",
        "Charm qoplama",
        "13 dinamikli Burmester ovoz tizimi",
        "Dual zone avtomatik iqlim nazorati",
        "Head-up display"
      ]
    },
    {
      id: "mercedes-cle200amgline-premium-coupe",
      name: "CLE 200 AMG Line Premium Coupe",
      brand: "Mercedes-Benz",
      image: "/images/mercedesbenz/cle200amglinepremiumcoupe.jpg",
      price: "61,000 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "255 ot kuchi",
      acceleration: "0-100 km/soat 6.1 soniyada",
      mpg: "9.8 L/100km shahar / 7.6 L/100km trassa",
      description: "Mercedes-Benz CLE 200 AMG Line Premium Coupe - bu hashamatli ikki eshikli kupe bo'lib, qo'shimcha hashamatli xususiyatlar va texnologik yangilanishlar bilan jihozlangan.",
      features: [
        "9G-TRONIC 9 tezlikli avtomatik uzatmalar qutisi",
        "DYNAMIC SELECT",
        "LED Intelligent Light System",
        "12.3 dyuymli raqamli asboblar paneli",
        "11.9 dyuymli markaziy sensorli ekran",
        "Charm qoplama",
        "13 dinamikli Burmester ovoz tizimi",
        "Dual zone avtomatik iqlim nazorati",
        "Head-up display"
      ]
    },
    {
      id: "mercedes-cle200amgline-premiumplus-cabriolet",
      name: "CLE 200 AMG Line Premium Plus Cabriolet",
      brand: "Mercedes-Benz",
      image: "/images/mercedesbenz/cle200amglinepremiumpluscabriolet.jpg",
      price: "71,500 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "255 ot kuchi",
      acceleration: "0-100 km/soat 6.2 soniyada",
      mpg: "9.8 L/100km shahar / 7.6 L/100km trassa",
      description: "Mercedes-Benz CLE 200 AMG Line Premium Plus Cabriolet - bu hashamatli kabriolet bo'lib, eng yuqori darajadagi hashamatli xususiyatlar va texnologik yangilanishlar bilan jihozlangan.",
      features: [
        "9G-TRONIC 9 tezlikli avtomatik uzatmalar qutisi",
        "DYNAMIC SELECT",
        "LED Intelligent Light System",
        "12.3 dyuymli raqamli asboblar paneli",
        "11.9 dyuymli markaziy sensorli ekran",
        "AIRCAP shamol to'sqini",
        "AIRSCARF bo'yin darajasidagi isitish",
        "Charm qoplama",
        "13 dinamikli Burmester ovoz tizimi",
        "Dual zone avtomatik iqlim nazorati",
        "Head-up display",
        "Augmented reality navigatsiya"
      ]
    },
    {
      id: "mercedes-cle200amgline-premiumplus-coupe",
      name: "CLE 200 AMG Line Premium Plus Coupe",
      brand: "Mercedes-Benz",
      image: "/images/mercedesbenz/cle200amglinepremiumpluscoupe.jpg",
      price: "64,000 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "255 ot kuchi",
      acceleration: "0-100 km/soat 6.1 soniyada",
      mpg: "9.8 L/100km shahar / 7.6 L/100km trassa",
      description: "Mercedes-Benz CLE 200 AMG Line Premium Plus Coupe - bu hashamatli ikki eshikli kupe bo'lib, eng yuqori darajadagi hashamatli xususiyatlar va texnologik yangilanishlar bilan jihozlangan.",
      features: [
        "9G-TRONIC 9 tezlikli avtomatik uzatmalar qutisi",
        "DYNAMIC SELECT",
        "LED Intelligent Light System",
        "12.3 dyuymli raqamli asboblar paneli",
        "11.9 dyuymli markaziy sensorli ekran",
        "Charm qoplama",
        "13 dinamikli Burmester ovoz tizimi",
        "Dual zone avtomatik iqlim nazorati",
        "Head-up display",
        "Augmented reality navigatsiya"
      ]
    },
    {
      id: "mercedes-cle200d-amgline-cabriolet",
      name: "CLE 200d AMG Line Cabriolet",
      brand: "Mercedes-Benz",
      image: "/images/mercedesbenz/cle200damglinecabriolet.jpg",
      price: "63,900 $",
      engine: "2.0L Qatorli-4 turbo dizel",
      power: "197 ot kuchi",
      acceleration: "0-100 km/soat 7.2 soniyada",
      mpg: "7.8 L/100km shahar / 6.5 L/100km trassa",
      description: "Mercedes-Benz CLE 200d AMG Line Cabriolet - bu hashamatli dizel kabriolet bo'lib, yuqori yoqilg'i tejamkorligi va mukammal haydash tajribasini birlashtirgan.",
      features: [
        "9G-TRONIC 9 tezlikli avtomatik uzatmalar qutisi",
        "DYNAMIC SELECT",
        "LED Intelligent Light System",
        "12.3 dyuymli raqamli asboblar paneli",
        "11.9 dyuymli markaziy sensorli ekran",
        "AIRCAP shamol to'sqini",
        "AIRSCARF bo'yin darajasidagi isitish"
      ]
    },
    {
      id: "mercedes-cle200d-amgline-coupe",
      name: "CLE 200d AMG Line Coupe",
      brand: "Mercedes-Benz",
      image: "/images/mercedesbenz/cle200damglinecoupe.jpg",
      price: "56,400 $",
      engine: "2.0L Qatorli-4 turbo dizel",
      power: "197 ot kuchi",
      acceleration: "0-100 km/soat 7.0 soniyada",
      mpg: "7.8 L/100km shahar / 6.5 L/100km trassa",
      description: "Mercedes-Benz CLE 200d AMG Line Coupe - bu hashamatli dizel ikki eshikli kupe bo'lib, yuqori yoqilg'i tejamkorligi va mukammal haydash tajribasini birlashtirgan.",
      features: [
        "9G-TRONIC 9 tezlikli avtomatik uzatmalar qutisi",
        "DYNAMIC SELECT",
        "LED Intelligent Light System",
        "12.3 dyuymli raqamli asboblar paneli",
        "11.9 dyuymli markaziy sensorli ekran"
      ]
    },
    {
      id: "mercedes-cle200d-amgline-premium-cabriolet",
      name: "CLE 200d AMG Line Premium Cabriolet",
      brand: "Mercedes-Benz",
      image: "/images/mercedesbenz/cle200damglinepremiumcabriolet.jpg",
      price: "68,500 $",
      engine: "2.0L Qatorli-4 turbo dizel",
      power: "197 ot kuchi",
      acceleration: "0-100 km/soat 7.2 soniyada",
      mpg: "7.8 L/100km shahar / 6.5 L/100km trassa",
      description: "Mercedes-Benz CLE 200d AMG Line Premium Cabriolet - bu hashamatli dizel kabriolet bo'lib, qo'shimcha hashamatli xususiyatlar va texnologik yangilanishlar bilan jihozlangan.",
      features: [
        "9G-TRONIC 9 tezlikli avtomatik uzatmalar qutisi",
        "DYNAMIC SELECT",
        "LED Intelligent Light System",
        "12.3 dyuymli raqamli asboblar paneli",
        "11.9 dyuymli markaziy sensorli ekran",
        "AIRCAP shamol to'sqini",
        "AIRSCARF bo'yin darajasidagi isitish",
        "Charm qoplama",
        "13 dinamikli Burmester ovoz tizimi",
        "Dual zone avtomatik iqlim nazorati",
        "Head-up display"
      ]
    },
    {
      id: "mercedes-cle200d-amgline-premium-coupe",
      name: "CLE 200d AMG Line Premium Coupe",
      brand: "Mercedes-Benz",
      image: "/images/mercedesbenz/cle200damglinepremiumcoupe.jpg",
      price: "61,000 $",
      engine: "2.0L Qatorli-4 turbo dizel",
      power: "197 ot kuchi",
      acceleration: "0-100 km/soat 7.0 soniyada",
      mpg: "7.8 L/100km shahar / 6.5 L/100km trassa",
      description: "Mercedes-Benz CLE 200d AMG Line Premium Coupe - bu hashamatli dizel ikki eshikli kupe bo'lib, qo'shimcha hashamatli xususiyatlar va texnologik yangilanishlar bilan jihozlangan.",
      features: [
        "9G-TRONIC 9 tezlikli avtomatik uzatmalar qutisi",
        "DYNAMIC SELECT",
        "LED Intelligent Light System",
        "12.3 dyuymli raqamli asboblar paneli",
        "11.9 dyuymli markaziy sensorli ekran",
        "Charm qoplama",
        "13 dinamikli Burmester ovoz tizimi",
        "Dual zone avtomatik iqlim nazorati",
        "Head-up display"
      ]
    },
    {
      id: "mercedes-cle220d-amgline-premium-cabriolet",
      name: "CLE 220d AMG Line Premium Cabriolet",
      brand: "Mercedes-Benz",
      image: "/images/mercedesbenz/cle220damglinepremiumcabriolet.jpg",
      price: "68,500 $",
      engine: "2.0L Qatorli-4 turbo dizel",
      power: "197 ot kuchi",
      acceleration: "0-100 km/soat 7.2 soniyada",
      mpg: "7.8 L/100km shahar / 6.5 L/100km trassa",
      description: "Mercedes-Benz CLE 220d AMG Line Premium Cabriolet - bu hashamatli dizel kabriolet bo'lib, qo'shimcha hashamatli xususiyatlar va texnologik yangilanishlar bilan jihozlangan.",
      features: [
        "9G-TRONIC 9 tezlikli avtomatik uzatmalar qutisi",
        "DYNAMIC SELECT",
        "LED Intelligent Light System",
        "12.3 dyuymli raqamli asboblar paneli",
        "11.9 dyuymli markaziy sensorli ekran",
        "AIRCAP shamol to'sqini",
        "AIRSCARF bo'yin darajasidagi isitish",
        "Charm qoplama",
        "13 dinamikli Burmester ovoz tizimi",
        "Dual zone avtomatik iqlim nazorati",
        "Head-up display"
      ]
    },
    {
      id: "mercedes-cle220d-amgline-premiumplus-cabriolet",
      name: "CLE 220d AMG Line Premium Plus Cabriolet",
      brand: "Mercedes-Benz",
      image: "/images/mercedesbenz/cle220damglinepremiumpluscabriolet.jpg",
      price: "71,500 $",
      engine: "2.0L Qatorli-4 turbo dizel",
      power: "197 ot kuchi",
      acceleration: "0-100 km/soat 7.2 soniyada",
      mpg: "7.8 L/100km shahar / 6.5 L/100km trassa",
      description: "Mercedes-Benz CLE 220d AMG Line Premium Plus Cabriolet - bu hashamatli dizel kabriolet bo'lib, eng yuqori darajadagi hashamatli xususiyatlar va texnologik yangilanishlar bilan jihozlangan.",
      features: [
        "9G-TRONIC 9 tezlikli avtomatik uzatmalar qutisi",
        "DYNAMIC SELECT",
        "LED Intelligent Light System",
        "12.3 dyuymli raqamli asboblar paneli",
        "11.9 dyuymli markaziy sensorli ekran",
        "AIRCAP shamol to'sqini",
        "AIRSCARF bo'yin darajasidagi isitish",
        "Charm qoplama",
        "13 dinamikli Burmester ovoz tizimi",
        "Dual zone avtomatik iqlim nazorati",
        "Head-up display",
        "Augmented reality navigatsiya"
      ]
    },
    {
      id: "mercedes-cle220d-amgline-premiumplus-coupe",
      name: "CLE 220d AMG Line Premium Plus Coupe",
      brand: "Mercedes-Benz",
      image: "/images/mercedesbenz/cle220damglinepremiumpluscoupe.jpg",
      price: "64,000 $",
      engine: "2.0L Qatorli-4 turbo dizel",
      power: "197 ot kuchi",
      acceleration: "0-100 km/soat 7.0 soniyada",
      mpg: "7.8 L/100km shahar / 6.5 L/100km trassa",
      description: "Mercedes-Benz CLE 220d AMG Line Premium Plus Coupe - bu hashamatli dizel ikki eshikli kupe bo'lib, eng yuqori darajadagi hashamatli xususiyatlar va texnologik yangilanishlar bilan jihozlangan.",
      features: [
        "9G-TRONIC 9 tezlikli avtomatik uzatmalar qutisi",
        "DYNAMIC SELECT",
        "LED Intelligent Light System",
        "12.3 dyuymli raqamli asboblar paneli",
        "11.9 dyuymli markaziy sensorli ekran",
        "Charm qoplama",
        "13 dinamikli Burmester ovoz tizimi",
        "Dual zone avtomatik iqlim nazorati",
        "Head-up display",
        "Augmented reality navigatsiya"
      ]
    },
    {
      id: "mercedes-cle300-4matic-amgline-premium-coupe",
      name: "CLE 300 4MATIC AMG Line Premium Coupe",
      brand: "Mercedes-Benz",
      image: "/images/mercedesbenz/cle3004maticamglinepremiumcoupe.jpg",
      price: "68,500 $",
      engine: "2.0L Qatorli-4 turbo",
      power: "255 ot kuchi",
      acceleration: "0-100 km/soat 6.1 soniyada",
      mpg: "9.8 L/100km shahar / 7.6 L/100km trassa",
      description: "Mercedes-Benz CLE 300 4MATIC AMG Line Premium Coupe - bu hashamatli ikki eshikli kupe bo'lib, to'rt g'ildirakli haydash va qo'shimcha hashamatli xususiyatlar bilan jihozlangan.",
      features: [
        "9G-TRONIC 9 tezlikli avtomatik uzatmalar qutisi",
        "4MATIC to'rt g'ildirakli haydash",
        "DYNAMIC SELECT",
        "LED Intelligent Light System",
        "12.3 dyuymli raqamli asboblar paneli",
        "11.9 dyuymli markaziy sensorli ekran",
        "Charm qoplama",
        "13 dinamikli Burmester ovoz tizimi",
        "Dual zone avtomatik iqlim nazorati",
        "Head-up display"
      ]
    }
  ]