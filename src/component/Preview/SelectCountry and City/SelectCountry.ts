

const ukrainianCities = [
    'Kyiv',
    'Kharkiv',
    'Odesa',
    'Dnipro',
    'Lviv',
    'Zaporizhzhia',
    'Kryvyi Rih',
    'Mykolaiv',
    'Mariupol',
    'Vinnytsia',
    'Chernihiv',
    'Cherkasy',
    'Poltava',
    'Khmelnytskyi',
    'Chernivtsi',
    'Ivano-Frankivsk',
    'Rivne',
    'Zhytomyr',
    'Ternopil',
    'Uzhhorod',
    'Lutsk',
    'Sumy',
    'Kropyvnytskyi',
    'Kherson',
    'Simferopol'
];

export async function FindCountry(inputValue) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`);
    const data = await response.json();
    const Country = data[0].cca2;
    localStorage.setItem("country", Country);
    console.log(Country);
    return Country;
}

export async function FindCountryStates(Country) {
    if (Country === 'UA') {
        return ukrainianCities.map((name, i) => ({
            id: i,
            name: name
        }));
    }

    const response = await fetch(`https://api.countrystatecity.in/v1/countries/${Country}/states`, {
        headers: {
            'X-CSCAPI-KEY': '3b7a9eb13690462de6a961871b5fcf088f53c08184d5f285296c4c419dbabefb'
        }
    });
    const states = await response.json();
    console.log(states);
    return states;
}

export async function selectCountry(inputValue) {
    const country = await FindCountry(inputValue);
    console.log(country);
    console.log(inputValue);
    const states = await FindCountryStates(country);
    console.log(states);
    return states;
}