export type TrendPoint = { period: string; nps: number; csi: number; retention: number; complaints: number; app: number; churnRisk: number };

export const overview = {
  health: 74,
  nps: 42,
  csi: 83,
  retention: 91.6,
  churnRisk: 6.8,
  digitalSat: 4.34,
  complaintTrend: 18,
  resolutionTime: 7.4,
  confidence: 94,
  updated: "Сегодня 08:30"
};

export const kpis = [
  { label: "Индекс CX", value: "74", suffix: "/100", delta: +5, tone: "good", hint: "кв/кв" },
  { label: "NPS", value: "42", suffix: "", delta: +8, tone: "good", hint: "г/г" },
  { label: "CSI", value: "83", suffix: "%", delta: +3, tone: "good", hint: "м/м" },
  { label: "Retention", value: "91.6", suffix: "%", delta: +1.9, tone: "good", hint: "кв/кв" },
  { label: "Риск оттока", value: "6.8", suffix: "%", delta: -1.4, tone: "good", hint: "м/м" },
  { label: "Цифровая удовлетворённость", value: "4.34", suffix: "/5", delta: -0.08, tone: "risk", hint: "нед/нед" },
  { label: "Жалобы", value: "+18", suffix: "%", delta: +18, tone: "bad", hint: "м/м" },
  { label: "Время решения", value: "7.4", suffix: "h", delta: -2.1, tone: "good", hint: "м/м" }
];

export const cxHistory: TrendPoint[] = [
  { period: "1 кв. 25", nps: 31, csi: 76, retention: 88.4, complaints: 142, app: 4.08, churnRisk: 9.8 },
  { period: "2 кв. 25", nps: 33, csi: 77, retention: 88.9, complaints: 136, app: 4.12, churnRisk: 9.3 },
  { period: "3 кв. 25", nps: 29, csi: 74, retention: 87.8, complaints: 166, app: 3.96, churnRisk: 10.7 },
  { period: "4 кв. 25", nps: 34, csi: 78, retention: 89.4, complaints: 151, app: 4.11, churnRisk: 9.1 },
  { period: "янв", nps: 36, csi: 79, retention: 89.8, complaints: 144, app: 4.18, churnRisk: 8.8 },
  { period: "фев", nps: 39, csi: 81, retention: 90.6, complaints: 128, app: 4.29, churnRisk: 7.7 },
  { period: "мар", nps: 43, csi: 84, retention: 91.9, complaints: 111, app: 4.42, churnRisk: 6.1 },
  { period: "апр", nps: 41, csi: 82, retention: 91.2, complaints: 125, app: 4.36, churnRisk: 6.9 },
  { period: "май", nps: 42, csi: 83, retention: 91.6, complaints: 133, app: 4.34, churnRisk: 6.8 }
];

export const painPoints = [
  { issue: "Проверка в мобильном онбординге", volume: 18400, change: 42, impact: "-5.8 NPS", risk: 86 },
  { issue: "Нарушения SLA поддержки", volume: 12100, change: 27, impact: "-4.1 NPS", risk: 78 },
  { issue: "Неточный срок доставки карты", volume: 8200, change: -31, impact: "+2.3 NPS", risk: 38 },
  { issue: "Повторные циклы документов по ипотеке", volume: 6100, change: 18, impact: "-2.7 NPS", risk: 64 },
  { issue: "Доступность наличных в банкоматах", volume: 3900, change: -12, impact: "+0.8 NPS", risk: 31 }
];

export const journeys = [
  { name: "Онбординг", sat: 71, drop: 18, pain: 84, trend: -9, resolution: 62, effort: 4.1 },
  { name: "Мобильное приложение", sat: 79, drop: 9, pain: 58, trend: -3, resolution: 78, effort: 3.0 },
  { name: "Карты", sat: 86, drop: 5, pain: 32, trend: 11, resolution: 89, effort: 2.1 },
  { name: "Платежи", sat: 88, drop: 3, pain: 27, trend: 4, resolution: 92, effort: 1.9 },
  { name: "Поддержка", sat: 68, drop: 14, pain: 79, trend: -12, resolution: 61, effort: 4.4 },
  { name: "Кредиты", sat: 76, drop: 12, pain: 63, trend: 2, resolution: 74, effort: 3.6 },
  { name: "Ипотека", sat: 64, drop: 23, pain: 88, trend: -6, resolution: 55, effort: 4.8 },
  { name: "Отделение", sat: 81, drop: 7, pain: 43, trend: 5, resolution: 83, effort: 2.8 },
  { name: "Колл-центр", sat: 70, drop: 16, pain: 76, trend: -8, resolution: 64, effort: 4.2 }
];

export const rootCauses = [
  { cause: "Задержки KYC-провайдера", driver: "Онбординг", impact: 19, confidence: 91, chain: "Ожидание в приложении → повтор → уход → жалоба" },
  { cause: "Недостаток сотрудников поддержки 2-й линии", driver: "Поддержка", impact: 17, confidence: 88, chain: "Очередь > 18 мин → нарушение SLA → детрактор" },
  { cause: "Неясный ипотечный чек-лист", driver: "Ипотека", impact: 13, confidence: 82, chain: "Нет документа → цикл доработок → усилие клиента" },
  { cause: "Сбой релиза 8.14 на старых Android", driver: "Мобильное приложение", impact: 11, confidence: 86, chain: "Сбой → ошибка платежа → жалоба" },
  { cause: "Несовпадение ETA курьерской доставки", driver: "Карты", impact: -8, confidence: 79, chain: "Синхронизация ETA → меньше звонков" }
];

export const initiatives = [
  { name: "Синхронизация ETA доставки карт", status: "Масштабировано", before: 74, after: 86, roi: "3.8x", impact: "+2.3 NPS" },
  { name: "Приоритетный чат для premium", status: "Масштабировано", before: 81, after: 90, roi: "2.9x", impact: "+1.7 удержание" },
  { name: "Статус кредита на одном экране", status: "Пилот", before: 69, after: 77, roi: "1.8x", impact: "-14% звонков" },
  { name: "Резервный маршрут KYC", status: "Готово", before: 71, after: 82, roi: "4.1x", impact: "+5.8 потенциал NPS" }
];

export const recommendations = [
  { action: "Снизить первый ответ поддержки с 18 до 5 мин", impact: "+11 NPS", value: "₽420 млн сохранённой выручки", urgency: 96, complexity: 54 },
  { action: "Резервный KYC для онбординга в мобильном канале", impact: "+7 NPS", value: "+38 тыс. завершённых открытий счёта", urgency: 91, complexity: 61 },
  { action: "Чек-лист документов по ипотеке + проактивные уведомления", impact: "+4 CSI", value: "-22% повторных доработок", urgency: 78, complexity: 43 },
  { action: "Hotfix Android-сбоев + когортный мониторинг", impact: "+3 к рейтингу приложения", value: "-18% цифровых жалоб", urgency: 84, complexity: 32 }
];

export const segmentChannels = [
  { name: "Розница", nps: 39, csi: 81, risk: 42 },
  { name: "МСБ", nps: 35, csi: 76, risk: 58 },
  { name: "Премиум", nps: 61, csi: 90, risk: 22 },
  { name: "Молодёжь", nps: 47, csi: 84, risk: 35 },
  { name: "Пожилые клиенты", nps: 28, csi: 73, risk: 67 },
  { name: "Только цифровые каналы", nps: 44, csi: 82, risk: 49 },
  { name: "Преимущественно отделения", nps: 33, csi: 78, risk: 55 }
];

export const insights = [
  "Жалобы на мобильный онбординг +42% м/м; задержки KYC объясняют 61% всплеска.",
  "Удержание премиум-сегмента растёт: приоритетный чат поднял успешность решения до 92%.",
  "Нарушения SLA поддержки теперь драйвер оттока №1 в рознице и МСБ.",
  "Путь доставки карт стабилизировался после синхронизации ETA: жалобы -31% м/м.",
  "Клиентское усилие в ипотеке остаётся худшим в банке: 4.8/5."
];

export const scenarios = [
  { scenario: "Ожидание поддержки <5 мин", nps: 53, retention: 93.4, churn: 5.1 },
  { scenario: "Резервный KYC", nps: 49, retention: 92.7, churn: 5.8 },
  { scenario: "Исправление производительности приложения", nps: 46, retention: 92.1, churn: 6.2 },
  { scenario: "Механизм предотвращения жалоб", nps: 56, retention: 94.0, churn: 4.7 }
];
