function renderCart(items) {
    const $cart = document.querySelector(".cart");
    const $total = document.querySelector(".total");
    const $totalCarRentBucketElement = document.getElementById('totalCarRentBucket');
    let i = 0;

    $cart.innerHTML = items.map((item) => `
            <tr>
                <td>${++i +'.'}</td>
                <td>${item.name}</td>
                <td>${item.quantity} (days for rent)</td>
                <td style="width: 30px;">	
                    <button type="button" class="btn btn-block btn-sm btn-outline-primary"
                        onClick="cartLS.quantity(${item.id},1)">+</button>
                </td>
                <td style="width: 30px;">	
                    <button type="button" class="btn btn-block btn-sm btn-outline-primary"
                        onClick="cartLS.quantity(${item.id},-1)">-</button>
                </td>
                <td class="text-right">$${item.price}</td>
                <td class="text-right"><Button class="btn btn-block btn-sm btn-outline-primary" onClick="cartLS.remove(${item.id})">Delete</Button></td>
            </tr>`).join("");

    $total.innerHTML = "$" + cartLS.total();
    $totalCarRentBucketElement.innerHTML = '<sub>' + (i++) + '<sub>';
}
renderCart(cartLS.list());
cartLS.onChange(renderCart);

