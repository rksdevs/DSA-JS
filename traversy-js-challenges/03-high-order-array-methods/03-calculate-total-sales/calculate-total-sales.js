function calculateTotalSalesWithTax(obj, taxRate) {
    const totalAmount = obj.reduce((sum, item)=> item.price*item.quantity + sum, 0)

    return totalAmount + totalAmount*taxRate/100;
}

module.exports = calculateTotalSalesWithTax;
