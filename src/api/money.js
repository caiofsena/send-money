import StoreMoney from '../store/StoreMoney';

const getTransactions = async() => {
    const transactionResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(transactionResponse){
        return await StoreMoney.getStoreHistoryTransaction();
    } else {
        throw new Error("Não foi possível realizar o envio do dinheiro");
    }
}

const createTransaction = async(transaction) => {
    const cabecalho = {
        method: "POST",
        body: JSON.stringify(transaction)
    };
    const createTransactionResponse = await fetch('https://jsonplaceholder.typicode.com/posts', cabecalho);

    if(createTransactionResponse.ok){
        return true;
    } else {
        throw new Error("Não foi possível realizar o envio do dinheiro");
    }
}

const addToHistoryTransaction = async(newTransaction) => {
    let historyTransaction = await StoreMoney.getStoreHistoryTransaction();
    if(historyTransaction == null){
        historyTransaction = [];
    }
    historyTransaction.push(newTransaction);
    return historyTransaction;
}

export { getTransactions, createTransaction, addToHistoryTransaction };