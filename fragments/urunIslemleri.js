const {I} = inject();

module.exports = {

    buttons: {

        sepeteEkleButton: '#add-to-cart-button',

    },
    fields: {

        urunBilgisi: '#productTitle',
        sepeteEklendiBilgisi: '//div[@id=\'huc-v2-order-row-confirm-text\']//h1[contains(text(),\'Sepete Eklendi\')]',
    },
    select: {},

    urunuSepeteEkle: async function () {

        let urun = I.grabTextFrom(this.fields.urunBilgisi);
        console.log('Ürün Adı : ' + urun);
        I.seeElement(this.buttons.sepeteEkleButton);
        I.click(this.buttons.sepeteEkleButton);
        I.seeElement(this.fields.sepeteEklendiBilgisi);


    }
}
