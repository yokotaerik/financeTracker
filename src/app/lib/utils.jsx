export default function CurrencyFormatter(amount){
    const formatter = Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        style: "currency"
    })

    return formatter.format(amount)
}