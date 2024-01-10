let EngtoItalianStatus = {
    "payment pending":"Pagamento sospeso",
    "unfulfilled":"Non spedito",
    "refunded":"Reso",
    "complete":"Completo",
    "fulfilled":"Spedito",
    "archived":"Archiviato",
    "unpaid":"Non pagato",
    "paid":"Pagato",
    "open":"Aperto",
    "closed":"Chiuso",
    "delivered":"Consegnato",
}

export function ItalianStatus  (value){
    return EngtoItalianStatus[value.toLowerCase()] || value;
}