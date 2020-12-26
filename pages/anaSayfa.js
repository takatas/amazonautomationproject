const {I, urunIslemleriFragment} = inject();

module.exports = {

    buttons: {},
    fields: {
        urunAdi: '//div[@class=\'a-section octopus-pc-card octopus-best-seller-card\']//ul//li//span[contains(text(),\'' + I.getEnvironmentParameters("urunAdi") + '\')]',
    },
    select: {},

    urunEkle: async function () {

        I.seeElement(this.fields.urunAdi);
        I.click(this.fields.urunAdi);
        await urunIslemleriFragment.urunuSepeteEkle();


    }
}
