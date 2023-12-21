async function getSmartphoneByBrand(brand) {
    const response = await fetch(`/getSmartphoneByBrand?brand=${brand}`);
    if (response.ok) {
        const responseObj = await response.json();
        console.log(JSON.stringify(responseObj));
        return;
    }
    alert("error");
}
