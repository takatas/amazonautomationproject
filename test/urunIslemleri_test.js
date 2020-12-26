Feature('Urun Islemleri @urunIslemleri');

BeforeSuite(async (I) => {
    I.urlAc();

});

Scenario('Ürün Sepete Ekleme @sepeteEkle', async (I, anaSayfaPage, mainToolBarFragment) => {

    await mainToolBarFragment.kablosuzErisimNoktalarinaGit();
    await anaSayfaPage.urunEkle();

});