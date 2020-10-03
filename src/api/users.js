const getUserHub = async() => {
    const userHubResponse = await fetch('https://randomuser.me/api/?inc=name, picture');
    const userHubJson = await userHubResponse.json();
    let userHub = {
        name: userHubJson.results[0].name.first + ' ' + userHubJson.results[0].name.last,
        photo: userHubJson.results[0].picture.large
    }
    return userHub;
}

const getContactsHub = async() => {
    const contactsHubResponse = await fetch('https://randomuser.me/api/?results=15&inc=name,picture');
    const contatcsHubJson = await contactsHubResponse.json();

    let contatcsHub = [];

    for (let index = 0; index < contatcsHubJson.results.length; index++) {
        const item = contatcsHubJson.results[index];
        const contact = {
            name: item.name.first + ' ' + item.name.last,
            photo: item.picture.large    
        };
        contatcsHub.push(contact);
    }
    return contatcsHub;
}

export { getUserHub, getContactsHub };