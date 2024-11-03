 const fromAmountInput = document.getElementById('fromAmount');
        const toAmountInput = document.getElementById('toAmount');
        const fromCurrencySelect = document.getElementById('fromCurrency');
        const toCurrencySelect = document.getElementById('toCurrency');

        // Currency data with currency codes and country names
const currencies = {
    USD: "United States Dollar",
    EUR: "Euro",
    JPY: "Japanese Yen",
    GBP: "British Pound",
    AUD: "Australian Dollar",
    CAD: "Canadian Dollar",
    CHF: "Swiss Franc",
    CNY: "Chinese Yuan",
    HKD: "Hong Kong Dollar",
    NZD: "New Zealand Dollar",
    SEK: "Swedish Krona",
    KRW: "South Korean Won",
    SGD: "Singapore Dollar",
    NOK: "Norwegian Krone",
    MXN: "Mexican Peso",
    INR: "Indian Rupee",
    RUB: "Russian Ruble",
    ZAR: "South African Rand",
    TRY: "Turkish Lira",
    BRL: "Brazilian Real",
    TWD: "New Taiwan Dollar",
    DKK: "Danish Krone",
    PLN: "Polish Zloty",
    THB: "Thai Baht",
    IDR: "Indonesian Rupiah",
    HUF: "Hungarian Forint",
    CZK: "Czech Koruna",
    ILS: "Israeli Shekel",
    CLP: "Chilean Peso",
    PHP: "Philippine Peso",
    AED: "United Arab Emirates Dirham",
    COP: "Colombian Peso",
    SAR: "Saudi Riyal",
    MYR: "Malaysian Ringgit",
    RON: "Romanian Leu",
    BGN: "Bulgarian Lev",
    HRK: "Croatian Kuna",
    ISK: "Icelandic Krona",
    UAH: "Ukrainian Hryvnia",
    NGN: "Nigerian Naira",
    VND: "Vietnamese Dong",
    EGP: "Egyptian Pound",
    PKR: "Pakistani Rupee",
    KES: "Kenyan Shilling",
    QAR: "Qatari Rial",
    LKR: "Sri Lankan Rupee",
    JOD: "Jordanian Dinar",
    BHD: "Bahraini Dinar",
    OMR: "Omani Rial",
    KWD: "Kuwaiti Dinar",
    BDT: "Bangladeshi Taka",
    MAD: "Moroccan Dirham",
    IQD: "Iraqi Dinar",
    TND: "Tunisian Dinar",
    DZD: "Algerian Dinar",
    GHS: "Ghanaian Cedi",
    UGX: "Ugandan Shilling",
    RSD: "Serbian Dinar",
    AZN: "Azerbaijani Manat",
    BYN: "Belarusian Ruble",
    GEL: "Georgian Lari",
    AFN: "Afghan Afghani",
    LBP: "Lebanese Pound",
    LSL: "Lesotho Loti",
    MKD: "Macedonian Denar",
    MUR: "Mauritian Rupee",
    NAD: "Namibian Dollar",
    ALL: "Albanian Lek",
    BAM: "Bosnia-Herzegovina Convertible Mark",
    BOB: "Bolivian Boliviano",
    KZT: "Kazakhstani Tenge",
    LAK: "Lao Kip",
    MGA: "Malagasy Ariary",
    MDL: "Moldovan Leu",
    MZN: "Mozambican Metical",
    PEN: "Peruvian Sol",
    PYG: "Paraguayan Guarani",
    SYP: "Syrian Pound",
    UZS: "Uzbekistani Som",
    YER: "Yemeni Rial",
    ZMW: "Zambian Kwacha",
    // Add more currencies if you know...
};


        // Mapping of country codes to currency codes
        const countryCurrencyMap = {
    "AF": "AFN", "AL": "ALL", "DZ": "DZD", "AS": "USD", "AD": "EUR", "AO": "AOA", "AI": "XCD", "AQ": "XCD",
    "AG": "XCD", "AR": "ARS", "AM": "AMD", "AW": "AWG", "AU": "AUD", "AT": "EUR", "AZ": "AZN", "BS": "BSD",
    "BH": "BHD", "BD": "BDT", "BB": "BBD", "BY": "BYN", "BE": "EUR", "BZ": "BZD", "BJ": "XOF", "BM": "BMD",
    "BT": "INR", "BO": "BOB", "BA": "BAM", "BW": "BWP", "BR": "BRL", "BN": "BND", "BG": "BGN", "BF": "XOF",
    "BI": "BIF", "KH": "KHR", "CM": "XAF", "CA": "CAD", "CV": "CVE", "KY": "KYD", "CF": "XAF", "TD": "XAF",
    "CL": "CLP", "CN": "CNY", "CO": "COP", "KM": "KMF", "CD": "CDF", "CR": "CRC", "CI": "XOF", "HR": "HRK",
    "CU": "CUP", "CY": "EUR", "CZ": "CZK", "DK": "DKK", "DJ": "DJF", "DM": "XCD", "DO": "DOP", "EC": "USD",
    "EG": "EGP", "SV": "USD", "GQ": "XAF", "ER": "ERN", "EE": "EUR", "SZ": "SZL", "ET": "ETB", "FJ": "FJD",
    "FI": "EUR", "FR": "EUR", "GA": "XAF", "GM": "GMD", "GE": "GEL", "DE": "EUR", "GH": "GHS", "GI": "GIP",
    "GR": "EUR", "GL": "DKK", "GD": "XCD", "GU": "USD", "GT": "GTQ", "GN": "GNF", "GW": "XOF", "GY": "GYD",
    "HT": "HTG", "HN": "HNL", "HK": "HKD", "HU": "HUF", "IS": "ISK", "IN": "INR", "ID": "IDR", "IR": "IRR",
    "IQ": "IQD", "IE": "EUR", "IL": "ILS", "IT": "EUR", "JM": "JMD", "JP": "JPY", "JO": "JOD", "KZ": "KZT",
    "KE": "KES", "KI": "AUD", "KP": "KPW", "KR": "KRW", "KW": "KWD", "KG": "KGS", "LA": "LAK", "LV": "EUR",
    "LB": "LBP", "LS": "LSL", "LR": "LRD", "LY": "LYD", "LI": "CHF", "LT": "EUR", "LU": "EUR", "MG": "MGA",
    "MW": "MWK", "MY": "MYR", "MV": "MVR", "ML": "XOF", "MT": "EUR", "MH": "USD", "MR": "MRU", "MU": "MUR",
    "MX": "MXN", "FM": "USD", "MD": "MDL", "MC": "EUR", "MN": "MNT", "ME": "EUR", "MA": "MAD", "MZ": "MZN",
    "MM": "MMK", "NA": "NAD", "NR": "AUD", "NP": "NPR", "NL": "EUR", "NZ": "NZD", "NI": "NIO", "NE": "XOF",
    "NG": "NGN", "MK": "MKD", "NO": "NOK", "OM": "OMR", "PK": "PKR", "PW": "USD", "PS": "ILS", "PA": "PAB",
    "PG": "PGK", "PY": "PYG", "PE": "PEN", "PH": "PHP", "PL": "PLN", "PT": "EUR", "QA": "QAR", "RO": "RON",
    "RU": "RUB", "RW": "RWF", "WS": "WST", "SM": "EUR", "ST": "STN", "SA": "SAR", "SN": "XOF", "RS": "RSD",
    "SC": "SCR", "SL": "SLL", "SG": "SGD", "SK": "EUR", "SI": "EUR", "SB": "SBD", "SO": "SOS", "ZA": "ZAR",
    "SS": "SSP", "ES": "EUR", "LK": "LKR", "SD": "SDG", "SR": "SRD", "SE": "SEK", "CH": "CHF", "SY": "SYP",
    "TW": "TWD", "TJ": "TJS", "TZ": "TZS", "TH": "THB", "TL": "USD", "TG": "XOF", "TO": "TOP", "TT": "TTD",
    "TN": "TND", "TR": "TRY", "TM": "TMT", "TV": "AUD", "UG": "UGX", "UA": "UAH", "AE": "AED", "GB": "GBP",
    "US": "USD", "UY": "UYU", "UZ": "UZS", "VU": "VUV", "VE": "VES", "VN": "VND", "YE": "YER", "ZM": "ZMW",
    "ZW": "ZWL", //Add more country if you have...
};


        // Populate currency select options
        for (const [code, name] of Object.entries(currencies)) {
            const optionFrom = document.createElement('option');
            optionFrom.value = code;
            optionFrom.text = name;
            fromCurrencySelect.add(optionFrom);

            const optionTo = document.createElement('option');
            optionTo.value = code;
            optionTo.text = name;
            toCurrencySelect.add(optionTo);
        }




        // Set default values with geolocation-based currency detection
        async function setDefaultCurrency() {
            try {
                // Fetch user's location information
                const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
                const data = await response.json();
                const countryCode = data.country_code;

                // Get currency code from country code
                const userCurrency = countryCurrencyMap[countryCode] || "USD";
                fromCurrencySelect.value = userCurrency;
                toCurrencySelect.value = "USD";  // Default to USD

                fetchExchangeRates();  // Fetch exchange rates for default currency
            } catch (error) {
                console.error("Failed to detect country or set currency:", error);
                fromCurrencySelect.value = "PKR";
                toCurrencySelect.value = "USD";
                fetchExchangeRates();  // Fetch exchange rates for fallback currency
            }
        }

        // Fetch exchange rates
        let exchangeRates = {};
        async function fetchExchangeRates() {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrencySelect.value}`);
                const data = await response.json();
                exchangeRates = data.rates;
                convertCurrency();


            } catch (error) {
                console.error("Failed to fetch exchange rates", error);
            }
        }




        // Convert currency when inputs change
        function convertCurrency() {
            const fromCurrency = fromCurrencySelect.value;
            const toCurrency = toCurrencySelect.value;

            if (fromAmountInput === document.activeElement) {
                const fromAmount = parseFloat(fromAmountInput.value);
                const toAmount = (fromAmount * exchangeRates[toCurrency]).toFixed(2);
                toAmountInput.value = toAmount;
            } else if (toAmountInput === document.activeElement) {
                const toAmount = parseFloat(toAmountInput.value);
                const fromAmount = (toAmount / exchangeRates[toCurrency]).toFixed(2);
                fromAmountInput.value = fromAmount;
            }
        }



        // Event listeners
        fromAmountInput.addEventListener('input', convertCurrency);
        toAmountInput.addEventListener('input', convertCurrency);
        fromCurrencySelect.addEventListener('change', fetchExchangeRates);
        toCurrencySelect.addEventListener('change', fetchExchangeRates);

        // Initial fetch with geolocation
        setDefaultCurrency();
