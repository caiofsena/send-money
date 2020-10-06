import StoreMoney from '../store/StoreMoney';

const getTransfers = async() => {
    const transactionResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(transactionResponse){
        return await StoreMoney.getStoreHistoryTransaction();
    } else {
        throw new Error("Não foi possível realizar o envio do dinheiro");
    }
}

const createTransfer = async(transaction) => {
    const cabecalho = {
        method: "POST",
        body: JSON.stringify(transaction)
    };
    const createTransferResponse = await fetch('https://jsonplaceholder.typicode.com/posts', cabecalho);

    if(createTransferResponse.ok){
        return true;
    } else {
        throw new Error("Não foi possível realizar o envio do dinheiro");
    }
}

const addToHistoryTransfers = async(newTransaction) => {
    let historyTransfers = await StoreMoney.getStoreHistoryTransaction();
    if(historyTransfers == null){
        historyTransfers = [];
    }
    historyTransfers.push(newTransaction);
    return historyTransfers;
}

export { getTransfers, createTransfer, addToHistoryTransfers };