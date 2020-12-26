const {I} = inject();

module.exports = {

    buttons: {

        anaSayfaButton: '#nav-logo-sprites',
        tumuButton: '#nav-hamburger-menu',
        bilgisayarButton: '//div[@id=\'hmenu-content\']//ul//li[10]//a//div[contains(text(),\'Bilgisayar\')]',
        tumBilgisayarUrunleri: '//div[@id=\'hmenu-content\']//ul//li//a[contains(text(),\'Tüm Bilgisayar Ürünleri\')]',
        agCihazlari: '//div[@id=\'s-refinements\']//div//ul//li//span[contains(text(),\'Ağ Cihazları\')]',
        kablosuzErisimNoktalari: '//div[@id=\'s-refinements\']//div//ul//li//span[contains(text(),\'Kablosuz Erişim Noktaları\')]',


    },
    fields: {},
    select: {},

    anasayfayaGit: function () {

        I.waitForElement(this.buttons.anaSayfaButton);
        I.click(this.buttons.anaSayfaButton);

    },

    kablosuzErisimNoktalarinaGit: function () {

        I.waitForElement(this.buttons.tumuButton);
        I.click(this.buttons.tumuButton);
        I.seeElement(this.buttons.bilgisayarButton);
        I.click(this.buttons.bilgisayarButton);
        I.seeElement(this.buttons.tumBilgisayarUrunleri);
        I.click(this.buttons.tumBilgisayarUrunleri);
        I.seeElement(this.buttons.agCihazlari);
        I.click(this.buttons.agCihazlari);
        I.seeElement(this.buttons.kablosuzErisimNoktalari);
        I.click(this.buttons.kablosuzErisimNoktalari);
    }
}
